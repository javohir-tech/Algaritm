from pydantic_settings import BaseSettings
from pydantic import Field
from dotenv import load_dotenv
import os

load_dotenv()


class Settings(BaseSettings):
    database_url: str = Field(..., alias="DATABASE_URL")
    debug: bool = Field(default=False, alias="DEBUG")
    api_port: int = Field(default=8000, alias="API_PORT")

    class Config:
        env_file = ".env"


settings = Settings()
