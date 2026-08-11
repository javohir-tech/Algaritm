from models import User, TokenBlackList
from schemas import UserModel, LoginModel, RefreshToken
from fastapi import APIRouter, status, Depends
from fastapi.exceptions import HTTPException
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import or_, select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db
from datetime import datetime

from token_service import (
    create_access_token,
    create_refresh_token,
    verify,
    decode_token,
)

auth_routes = APIRouter(prefix="/auth")


@auth_routes.get("/")
async def get_signup():
    return "sign up path"


@auth_routes.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup(user: UserModel, db: AsyncSession = Depends(get_db)):

    new_user = User(
        username=user.username,
        email=user.email.lower(),
        password=generate_password_hash(user.password),
    )

    try:
        db.add(new_user)
        await db.commit()
        await db.refresh(new_user)
    except IntegrityError:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="username or email already taken",
        )

    access_token = create_access_token(sub=new_user.username)
    refresh_token = create_refresh_token(sub=new_user.username)

    return {
        "success": True,
        "message": "User created successfully",
        "data": {
            "user": {
                "id": new_user.id,
                "username": new_user.username,
                "email": new_user.email,
                "is_staff": new_user.is_staff,
                "is_active": new_user.is_active,    
            },
            "tokens": {"access_token": access_token, "refresh_token": refresh_token},
        },
    }


@auth_routes.post("/login", status_code=status.HTTP_200_OK)
async def signin(user: LoginModel, db: AsyncSession = Depends(get_db)):

    result = await db.execute(
        select(User).filter(
            or_(
                User.email == user.username_or_email.lower(),
                User.username == user.username_or_email,
            )
        )
    )

    existing_user = result.scalar_one_or_none()

    if existing_user and check_password_hash(existing_user.password, user.password):

        if not existing_user.is_active:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN, detail="account is inactive"
            )

        access_token = create_access_token(sub=existing_user.username)
        refresh_token = create_refresh_token(sub=existing_user.username)

        tokens = {
            "access_token": access_token,
            "refresh_token": refresh_token,
        }

        return {
            "success": True,
            "message": "User logged in successfully",
            "data": {
                "user": {
                    "id": existing_user.id,
                    "username": existing_user.username,
                    "email": existing_user.email,
                    "is_staff": existing_user.is_staff,
                    "is_active": existing_user.is_active,
                },
                "tokens": tokens,
            },
        }

    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid username or password"
    )


@auth_routes.post("/refresh", status_code=status.HTTP_200_OK)
async def refresh_token(
    token: RefreshToken,
    db: AsyncSession = Depends(get_db),
):

    payload = decode_token(token.refresh_token)

    if payload is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid or expired token"
        )

    username = payload.sub
    token_type = payload.type

    result = await db.execute(
        select(TokenBlackList).filter(TokenBlackList.jti == payload.jti)
    )

    if result.scalar_one_or_none() is not None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Token has been revoked"
        )

    if not username or token_type != "refresh":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
        )

    result = await db.execute(select(User).filter(User.username == username))

    user = result.scalar_one_or_none()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
        )

    access_token = create_access_token(sub=username)

    return {
        "success": True,
        "message": "Access token successfully refreshed",
        "data": {
            "tokens": {
                "access_token": access_token,
            }
        },
    }


@auth_routes.post("/logout", status_code=status.HTTP_200_OK)
async def logout(
    token: RefreshToken,
    current_user: str = Depends(verify),
    db: AsyncSession = Depends(get_db),
):
    de_code_token = decode_token(token.refresh_token)

    if de_code_token is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
        )
    if current_user != de_code_token.sub:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token does not belong to current user",
        )

    if de_code_token.type != "refresh":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
        )

    exp = de_code_token.exp
    jti = de_code_token.jti

    if not exp or not jti:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
        )

    result = await db.execute(select(TokenBlackList).filter(jti == TokenBlackList.jti))

    db_token = result.scalar_one_or_none()

    if db_token:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Token has already been revoked",
        )

    black_list_token = TokenBlackList(expires_at=datetime.fromtimestamp(exp), jti=jti)

    db.add(black_list_token)
    await db.commit()
    await db.refresh(black_list_token)
    return {
        "success": True,
        "message": "Successfully logged out",
    }
