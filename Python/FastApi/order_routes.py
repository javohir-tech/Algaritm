from fastapi import APIRouter , status , Depends
from fastapi.exceptions  import HTTPException

from sqlalchemy import or_, select
from sqlalchemy.orm import selectinload
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError

from database import get_db

from token_service import verify

from models import Order, OrderItem, Product

order_routes = APIRouter(prefix="/order")


@order_routes.get("/")
async def getOrder():
    return {"message": " Hello world"}
