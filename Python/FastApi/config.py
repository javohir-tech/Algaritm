import os
from pydantic import Field
from dotenv import load_dotenv
from pydantic_settings import BaseSettings

load_dotenv()


class Settings(BaseSettings):
    database_url: str = Field(..., alias="DATABASE_URL")
    SECRET_KEY: str = Field(..., alias="SECRET_KEY")
    algarimt : str = Field(... , alias="ALGARITM")
    debug: bool = Field(default=False, alias="DEBUG")
    api_port: int = Field(default=8000, alias="API_PORT")

    class Config:
        env_file = ".env"


settings = Settings()
