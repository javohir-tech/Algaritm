from database import Base
from sqlalchemy import Text, String, Boolean, Integer, ForeignKey, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy_utils import ChoiceType
from enum import Enum
from datetime import datetime


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(25), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(Text, nullable=False)
    email: Mapped[str] = mapped_column(String(75), unique=True, nullable=False)
    is_staff: Mapped[bool] = mapped_column(Boolean, default=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)

    orders: Mapped[list["Order"]] = relationship(
        back_populates="user", cascade="all, delete-orphan", lazy="raise"
    )

    products: Mapped[list["Product"]] = relationship(
        back_populates="user", cascade="all, delete-orphan", lazy="raise"
    )


class Order(Base):
    __tablename__ = "order"

    class StatusType(str, Enum):
        PENDING = "pending"
        IN_TRANSIT = "in_transit"
        DELIVERED = "delivered"

    id: Mapped[int] = mapped_column(primary_key=True)
    status: Mapped[StatusType] = mapped_column(
        ChoiceType(StatusType), default=StatusType.PENDING, nullable=False
    )

    user_id: Mapped[int] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"))
    user: Mapped["User"] = relationship(back_populates="orders", lazy="raise")

    items: Mapped[list["OrderItem"]] = relationship(
        back_populates="order", cascade="all, delete-orphan", lazy="raise"
    )


class OrderItem(Base):
    __tablename__ = "order_item"

    id: Mapped[int] = mapped_column(primary_key=True)

    order_id: Mapped[int] = mapped_column(ForeignKey("order.id", ondelete="CASCADE"))
    order: Mapped["Order"] = relationship(back_populates="items", lazy="raise")

    product_id: Mapped[int] = mapped_column(
        ForeignKey("product.id", ondelete="RESTRICT")
    )
    product: Mapped["Product"] = relationship(back_populates="items", lazy="raise")

    quantity: Mapped[int] = mapped_column(Integer, nullable=False)
    price: Mapped[int] = mapped_column(Integer, nullable=False)


class Product(Base):
    __tablename__ = "product"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    price: Mapped[int] = mapped_column(Integer, nullable=False)
    user_id: Mapped[int] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"))

    user: Mapped["User"] = relationship(back_populates="products", lazy="raise")
    items: Mapped[list["OrderItem"]] = relationship(
        back_populates="product", lazy="select"
    )


class TokenBlackList(Base):
    __tablename__ = "token_blacklist"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    jti: Mapped[str] = mapped_column(String, unique=True, index=True , nullable=False)
    expires_at: Mapped[datetime] = mapped_column(DateTime , nullable=False)

    def __repr__(self):
        return self.jti
