from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app import crud, schemas

router = APIRouter(
    prefix="/placement",
    tags=["Placement"]
)


@router.post("/", response_model=schemas.PlacementRequestResponse)
def create_request(
    request: schemas.PlacementRequestCreate,
    db: Session = Depends(get_db)
):
    return crud.create_placement_request(db, request)


@router.get("/", response_model=list[schemas.PlacementRequestResponse])
def get_requests(db: Session = Depends(get_db)):
    return crud.get_all_requests(db)