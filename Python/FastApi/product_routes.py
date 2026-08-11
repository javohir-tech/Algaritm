from fastapi import APIRouter, Depends, status
from models import Product, User
from sqlalchemy import or_, select
from sqlalchemy.ext.asyncio import AsyncSession
from database import get_db
from fastapi.exceptions import HTTPException
from token_service import verify

product_routes = APIRouter(prefix="/product")


@product_routes.post("/create")
async def createProduct(
    db: AsyncSession = Depends(get_db), current_user: str = Depends(verify)
):
    pass


@product_routes.get("/")
async def getAll():
    return "products get all"
