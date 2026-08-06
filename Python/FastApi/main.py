from fastapi import FastAPI
from auth_routers import auth_routes
from product_routes import product_routes

app = FastAPI()
app.include_router(product_routes)
app.include_router(auth_routes)

@app.get("/")
async def root():
    return "main page "