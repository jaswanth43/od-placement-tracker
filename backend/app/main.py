from fastapi import FastAPI

from app.database import Base, engine
from app.routers import placement

# Create tables if they don't exist
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Placement OD Tracker API"
)

app.include_router(placement.router)


@app.get("/")
def home():
    return {
        "message": "Placement OD Tracker API is running"
    }