from config import settings
from fastapi import FastAPI, Request, status
from auth_routers import auth_routes
from product_routes import product_routes
from order_routes import order_routes
from fastapi.middleware.cors import CORSMiddleware
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(product_routes)
app.include_router(auth_routes)
app.include_router(order_routes)

@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    errors = exc.errors()
    first = errors[0]

    field = first["loc"][-1]
    msg = first["msg"]

    return JSONResponse(
        status_code=status.HTTP_422_UNPROCESSABLE_CONTENT,
        content={"detail": f"{field} : {msg}"},
    )


@app.get("/")
async def root():
    return {
        "message": "Welcome Home",
        "debug": settings.debug,
        "port": settings.api_port,
    }
