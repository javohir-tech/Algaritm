from models import User, TokenBlackList
from schemas import UserModel, LoginModel, RefreshToken
from fastapi import APIRouter, status, Depends
from fastapi.exceptions import HTTPException
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import or_, select
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db
from datetime import datetime
from fastapi.responses import JSONResponse

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

    result = await db.execute(
        select(User).filter(
            or_(User.email == user.email, User.username == user.username)
        )
    )

    existing_user = result.scalar_one_or_none()

    if existing_user is not None:
        if existing_user.email == user.email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="this email already exists",
            )

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="this username already exists",
        )

    new_user = User(
        username=user.username,
        email=user.email,
        password=generate_password_hash(user.password),
        is_active=user.is_active,
        is_staff=user.is_staff,
    )

    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)

    access_token = create_access_token(sub=new_user.username)
    refresh_token = create_refresh_token(sub=new_user.username)

    return {
        "message": "User created successfully",
        "user": {
            "id": new_user.id,
            "username": new_user.username,
            "email": new_user.email,
            "access_token": access_token,
            "refresh_token": refresh_token,
        },
    }


@auth_routes.post("/login", status_code=status.HTTP_200_OK)
async def signin(user: LoginModel, db: AsyncSession = Depends(get_db)):

    # db_user = session.query(User).filter(User.username == user.username).first()

    # username or email

    result = await db.execute(
        select(User).filter(
            or_(
                User.email == user.username_or_email,
                User.username == user.username_or_email,
            )
        )
    )

    existing_user = result.scalar_one_or_none()

    if existing_user and check_password_hash(existing_user.password, user.password):
        access_token = create_access_token(sub=existing_user.username)
        refresh_token = create_refresh_token(sub=existing_user.username)

        tokens = {
            "refresh_token": refresh_token,
            "access_token": access_token,
        }

        return {
            "success": True,
            "message": "user successfuly login",
            "data": tokens,
        }

    raise HTTPException(
        status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid username or password"
    )


@auth_routes.post("/refresh", status_code=status.HTTP_200_OK)
async def refresh_token(
    token: RefreshToken,
    db: AsyncSession = Depends(get_db),
    current_user: str = Depends(verify),
):
    payload = decode_token(token.refresh_token)

    username = payload["sub"]
    token_type = payload["type"]

    if token_type != "refresh":
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
        "access_token": access_token,
    }


@auth_routes.get("/protected")
async def protected_route(current_user: str = Depends(verify)):
    return {"messaage": f"Salom , {current_user} siz royhatdan otgansiz"}


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

    exp = de_code_token["exp"]
    jti = de_code_token["jti"]

    result = await db.execute(select(TokenBlackList).filter(jti == TokenBlackList.jti))

    db_token = result.scalar_one_or_none()

    if db_token:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="black listda bor "
        )

    black_list_token = TokenBlackList(expires_at=datetime.fromtimestamp(exp), jti=jti)

    db.add(black_list_token)
    await db.commit()
    await db.refresh(black_list_token)
    return JSONResponse(
        status_code=status.HTTP_200_OK, content={"message": "successfuuly logout"}
    )
