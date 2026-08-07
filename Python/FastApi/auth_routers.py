from models import User
from database import session
from schemas import UserModel
from fastapi import APIRouter, status, Depends
from fastapi.exceptions import HTTPException
from werkzeug.security import generate_password_hash, check_password_hash
from config import settings

# from fastapi.security import OAuth2PasswordBearer
from token_service import create_access_token, create_refresh_token

auth_routes = APIRouter(prefix="/auth")
# oauth2_schema = OAuth2PasswordBearer(tokenUrl="auth/login")


@auth_routes.get("/")
async def get_signup():
    return "sign up path"


@auth_routes.post("/signup", status_code=status.HTTP_201_CREATED)
async def signup(user: UserModel):

    db_email = session.query(User).filter(User.email == user.email).first()

    if db_email is not None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="this email with already exists",
        )

    username = session.query(User).filter(User.username == user.username).first()

    if username is not None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="this username with already exists",
        )

    new_user = User(
        username=user.username,
        email=user.email,
        password=generate_password_hash(user.password),
        is_active=user.is_active,
        is_staff=user.is_staff,
    )

    session.add(new_user)
    session.commit()
    session.refresh(new_user)

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


