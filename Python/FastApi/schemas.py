from pydantic import BaseModel, ConfigDict
from typing import Optional


class UserModel(BaseModel):
    username: str
    password: str
    email: str

    model_config = ConfigDict(
        from_attributes=True,
        json_schema_extra={
            "example": {
                "username": "javohir",
                "email": "javohir@gmail.com",
                "password": "password1234",
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


class ProductModel(BaseModel):
    name : str;
    price : int ;
    user_id : Optional[int] = None;

    model_config = ConfigDict(
        from_attributes=True ,  
        json_schema_extra={
            "example" : {
                "name" : "Iphone 14" , 
                "price" : 550
            }
        }
    )