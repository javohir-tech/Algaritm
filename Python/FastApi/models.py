from database import Base
from sqlalchemy import Column, Text, String, Boolean, Integer 
from sqlalchemy_utils import relationships, ChoiceType
from enum import Enum


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    username = Column(String(25), unique=True)
    email = Column(String(75), unique=True)
    is_staff = Column(Boolean, default=False)
    is_active = Column(Boolean, default=False)


class Order(Base):

    __tablename__ = "order"

    class StatusType(Enum):
        PENDING = "pending"
        IN_TRANSIT = "in_transit"
        DELIVERED = "delivered"

    id = Column(Integer, primary_key=True)
    price = Column(Integer)
    quantity = Column(Integer)
    # status = Column(String(choise))