from fastapi import APIRouter, Depends, status
from models import Product, User
from sqlalchemy import or_, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from database import get_db
from fastapi.exceptions import HTTPException
from token_service import verify
from schemas import ProductModel

product_routes = APIRouter(prefix="/product")


@product_routes.post("/create", status_code=status.HTTP_201_CREATED)
async def createProduct(
    product: ProductModel,
    db: AsyncSession = Depends(get_db),
    current_user: str = Depends(verify),
):
    user = await db.execute(select(User).filter(User.username == current_user))

    product_user = user.scalar_one_or_none()

    if product_user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token"
        )

    if not product_user.is_staff:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only staff can create products",
        )

    new_product = Product(
        name=product.name, price=product.price, user_id=product_user.id
    )

    try:
        db.add(new_product)
        await db.commit()
        await db.refresh(new_product)
    except IntegrityError:
        await db.rollback()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Could not save product",
        )
    return {
        "success": True,
        "message": "Successfully created  product",
        "data": {
            "id": new_product.id,
            "name": new_product.name,
            "price": new_product.price,
            "user_id": new_product.user_id,
        },
    }


@product_routes.get("/" ,  status_code=status.HTTP_200_OK)
async def getAll(db: AsyncSession = Depends(get_db)):
    try:
        result = await db.execute(select(Product))

        produtces = result.scalars().all()

        return {
            "success": True,
            "message": "Products fetched successfully",
            "data": produtces,
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"{e}")


@product_routes.get("/{product_id}" , status_code=status.HTTP_200_OK)
async def getProductById(product_id: int, db: AsyncSession = Depends(get_db)):
    try:
        result = await db.execute(select(Product).filter(Product.id == product_id))

        product = result.scalar_one_or_none()

        if product is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="Product not found"
            )

        return {
            "success": True,
            "message": "Produc fetched successfully",
            "data": {product},
        }
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f"{e}")
