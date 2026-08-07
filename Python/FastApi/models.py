from database import Base
from sqlalchemy import Column, Text, String, Boolean, Integer, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy_utils import ChoiceType
from enum import Enum


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    username = Column(String(25), unique=True)
    password = Column(Text, nullable=False)
    email = Column(String(75), unique=True)
    is_staff = Column(Boolean, default=False)
    is_active = Column(Boolean, default=False)
    orders = relationship(
        "Order", back_populates="user", cascade="all, delete-orphan"
    )


class Order(Base):

    __tablename__ = "order"

    class StatusType(Enum):
        PENDING = "pending"
        IN_TRANSIT = "in_transit"
        DELIVERED = "delivered"

    id = Column(Integer, primary_key=True)
    price = Column(Integer)
    quantity = Column(Integer)
    status = Column(ChoiceType(StatusType), default=StatusType.PENDING)
    user_id = Column(Integer, ForeignKey("user.id", ondelete="CASCADE"))
    user = relationship("User", back_populates="orders")
    product_id = Column(Integer, ForeignKey("product.id"))
    product = relationship("Product", back_populates="orders")


class Product(Base):

    __tablename__ = "product"

    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    price = Column(Integer)
    orders = relationship("Order", back_populates="product")
