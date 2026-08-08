from pydantic import BaseModel, ConfigDict
from typing import Optional


class UserModel(BaseModel):
    id: Optional[int] = None
    username: str
    password: str
    email: str
    is_staff: Optional[bool] = False
    is_active: Optional[bool] = False

    model_config = ConfigDict(
        from_attributes=True,
        json_schema_extra={
            "example": {
                "id": 1,
                "username": "javohir",
                "email": "javohir@gmail.com",
                "password": "password1234",
                "is_staff": False,
                "is_active": True,
            }
        },
    )


class LoginModel(BaseModel):
    username_or_email: str
    password: str

    model_config = ConfigDict(
        from_attributes=True,
        json_schema_extra={
            "example": {
                "username_or_email": "javohir or javohir@gmail.com",
                "password": "password1234",
            }
        },
    )

class RefreshToken(BaseModel):
    refresh_token : str
