from fastapi import APIRouter, status, Depends
from fastapi.exceptions import HTTPException

from sqlalchemy import or_, select
from sqlalchemy.orm import selectinload
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError

from database import get_db

from token_service import verify

from models import Order, OrderItem, Product, User

from schemas import OrderItemModel

order_routes = APIRouter(prefix="/order")


@order_routes.get("/")
async def getOrder():
    return {"message": " Hello world"}


@order_routes.post("/create")
async def create_order_item(
    orderItem: OrderItemModel,
    db: AsyncSession = Depends(get_db),
    current_user: str = Depends(verify),
):
    user_result = await db.execute(select(User).filter(User.username == current_user))

    user = user_result.scalar_one_or_none()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Authenticated user could not be found"
        )

    result = await db.execute(
        select(Order)
        .where(Order.user_id == user.id, Order.status == Order.StatusType.PENDING)
        .order_by(Order.id.desc())
    )

    order = result.scalars().first()

    if order is None:
        order = Order(user_id=user.id)
        db.add(order)
        await db.flush()

    product_result = await db.execute(
        select(Product).filter(Product.id == orderItem.product_id)
    )

    product = product_result.scalar_one_or_none()

    if product is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Product with id {orderItem.product_id} not found"
        )

    product_price = product.price
    price = product_price*orderItem.quantity

    new_order_item = OrderItem(
        order_id=order.id,
        product_id=orderItem.product_id,
        price = price,
        quantity=orderItem.quantity,
    )

    try:
        db.add(new_order_item)
        await db.commit()
        await db.refresh(new_order_item)
    except IntegrityError:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Order item could not be created due to a data conflict"
        )

    return {
        "success": True,
        "message": "successfully created",
        "data": {
            "id": new_order_item.id,
            "product_id": new_order_item.product_id,
            "order_id": new_order_item.order_id,
            "price": new_order_item.price,
            "quantity": new_order_item.quantity,
            "product" : f"{product.name}"
        },
    }
