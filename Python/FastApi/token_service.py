from jose import jwt, JWTError
from datetime import datetime, timedelta
from config import settings
from fastapi import HTTPException, status, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
import uuid

secuirty = HTTPBearer()


def create_access_token(sub: str, expires_delta: timedelta = None):
    if expires_delta:
        expire = datetime.now() + expires_delta
    else:
        expire = datetime.now() + timedelta(hours=1)

    to_encode = {"sub": sub, "exp": expire, "type": "access", "jti": str(uuid.uuid4())}

    encode_jwt = jwt.encode(
        to_encode,
        settings.SECRET_KEY,
        algorithm=settings.algarimt,
    )

    return encode_jwt


def create_refresh_token(sub: str, expire_delta: timedelta = None):
    if expire_delta:
        expire = datetime.now() + expire_delta

    else:
        expire = datetime.now() + timedelta(days=7)

    to_encode = {"sub": sub, "exp": expire, "type": "refresh", "jti": str(uuid.uuid4())}

    encode_jwt = jwt.encode(
        to_encode,
        settings.SECRET_KEY,
        algorithm=settings.algarimt,
    )

    return encode_jwt


def verify(
    credentials: HTTPAuthorizationCredentials = Depends(secuirty),
    token_type: str = "access",
) -> str:
    """token tekshirish"""
    token = credentials.credentials
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.algarimt])

        username: str = payload.get("sub")
        token_type_check: str = payload.get("type")

        if username is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
            )

        if token_type_check != token_type:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
            )

        return username
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
        )


def decode_token(token: str):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=settings.algarimt)

        return payload
    except JWTError:
        return None
