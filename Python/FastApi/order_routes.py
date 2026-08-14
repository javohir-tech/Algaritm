from fastapi import APIRouter, status, Depends
from fastapi.exceptions import HTTPException

from sqlalchemy import or_, select
from sqlalchemy.orm import selectinload
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError

from database import get_db

from token_service import verify

from models import Order, OrderItem, Product, User

from schemas import OrderItemModel, OrderStatusUpdateModel

order_routes = APIRouter(prefix="/order")


@order_routes.get("/")
async def get_orders(
    db: AsyncSession = Depends(get_db), current_user: str = Depends(verify)
):

    result_user = await db.execute(select(User).filter(User.username == current_user))

    user = result_user.scalar_one_or_none()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authenticated user could not be found",
        )

    order_result = await db.execute(
        select(Order)
        .options(selectinload(Order.items).selectinload(OrderItem.product))
        .filter(Order.user_id == user.id)
    )

    orders = order_result.scalars().all()

    return {
        "success": True,
        "message": "successfully fetchedd",
        "data": [
            {
                "id": order.id,
                "status": order.status,
                "items": [
                    {
                        "id": item.id,
                        "product_id": item.product_id,
                        "order_id": order.id,
                        "quantity": item.quantity,
                        "price": item.price,
                        "product_name": item.product.name,
                    }
                    for item in order.items
                ],
            }
            for order in orders
        ],
    }


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
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authenticated user could not be found",
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
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Product with id {orderItem.product_id} not found",
        )

    product_price = product.price
    price = product_price * orderItem.quantity

    new_order_item = OrderItem(
        order_id=order.id,
        product_id=orderItem.product_id,
        price=price,
        quantity=orderItem.quantity,
    )

    try:
        db.add(new_order_item)
        await db.commit()
        await db.refresh(new_order_item)
    except IntegrityError:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Order item could not be created due to a data conflict",
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
            "product_name": f"{product.name}",
        },
    }


@order_routes.patch("/status/{order_id}")
async def update_order_status(
    OrderStatus: OrderStatusUpdateModel,
    order_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: str = Depends(verify),
):

    result_user = await db.execute(select(User).filter(User.username == current_user))

    user = result_user.scalar_one_or_none()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authenticated user could not be found",
        )

    if not user.is_staff:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You do not have permission to perform this action",
        )

    order_result = await db.execute(select(Order).filter(Order.id == order_id))

    order = order_result.scalar_one_or_none()

    if order is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Order not found"
        )

    if order.status == Order.StatusType.DELIVERED:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Order has already been delivered and cannot be modified",
        )

    order.status = OrderStatus.status

    try:
        await db.commit()
        await db.refresh(order)
    except IntegrityError:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Order status could not be updated due to a data conflict",
        )

    return {
        "success": True,
        "message": "Successfully patched",
        "data": {
            "id": order.id,
            "status": order.status,
        },
    }
