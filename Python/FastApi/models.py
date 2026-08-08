from database import Base
from sqlalchemy import Text, String, Boolean, Integer, ForeignKey, DateTime
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy_utils import ChoiceType
from enum import Enum
from datetime import datetime


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(25), unique=True)
    password: Mapped[str] = mapped_column(Text, nullable=False)
    email: Mapped[str] = mapped_column(String(75), unique=True)
    is_staff: Mapped[bool] = mapped_column(Boolean, default=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=False)

    orders: Mapped[list["Order"]] = relationship(
        back_populates="user", cascade="all, delete-orphan", lazy="raise"
    )


class Order(Base):
    __tablename__ = "order"

    class StatusType(Enum):
        PENDING = "pending"
        IN_TRANSIT = "in_transit"
        DELIVERED = "delivered"

    id: Mapped[int] = mapped_column(primary_key=True)
    price: Mapped[int] = mapped_column(Integer)
    quantity: Mapped[int] = mapped_column(Integer)
    status: Mapped[StatusType] = mapped_column(
        ChoiceType(StatusType), default=StatusType.PENDING
    )

    user_id: Mapped[int] = mapped_column(ForeignKey("user.id", ondelete="CASCADE"))
    user: Mapped["User"] = relationship(back_populates="orders", lazy="raise")

    product_id: Mapped[int] = mapped_column(ForeignKey("product.id"))
    product: Mapped["Product"] = relationship(back_populates="orders", lazy="raise")


class Product(Base):
    __tablename__ = "product"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(100))
    price: Mapped[int] = mapped_column(Integer)

    orders: Mapped[list["Order"]] = relationship(
        back_populates="product", lazy="select"
    )


class TokenBlackList(Base):
    __tablename__ = "token_blacklist"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    jti: Mapped[str] = mapped_column(String, unique=True, index=True)
    expires_at: Mapped[datetime] = mapped_column(DateTime)
