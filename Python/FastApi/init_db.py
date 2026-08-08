import asyncio
from database import engine, Base
from models import User, Product, Order, TokenBlackList

async def init_db():
    async with engine.begin() as conn :
        await conn.run_sync(Base.metadata.create_all)

if __name__ == "__main__":
    asyncio.run(init_db())
