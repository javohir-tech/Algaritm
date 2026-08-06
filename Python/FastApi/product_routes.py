from fastapi import APIRouter

product_routes = APIRouter(prefix="/product")


@product_routes.get("/")
async def getAll():
    return "products get all"
