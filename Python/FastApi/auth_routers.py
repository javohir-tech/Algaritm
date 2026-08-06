from fastapi import APIRouter

auth_routes = APIRouter(prefix="/auth")


@auth_routes.get("/")
async def signup():
    return "sign up path"
