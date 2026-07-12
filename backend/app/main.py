from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.routers import placement

# Create tables if they don't exist
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Placement OD Tracker API"
)

# CORS Configuration
origins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(placement.router)


@app.get("/")
def home():
    return {
        "message": "Placement OD Tracker API is running"
    }