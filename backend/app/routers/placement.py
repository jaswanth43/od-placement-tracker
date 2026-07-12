from fastapi import APIRouter, Depends, HTTPException
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
def get_requests(
    db: Session = Depends(get_db)
):
    return crud.get_all_requests(db)


@router.get("/{request_id}", response_model=schemas.PlacementRequestResponse)
def get_request(
    request_id: int,
    db: Session = Depends(get_db)
):
    request = crud.get_request_by_id(db, request_id)

    if request is None:
        raise HTTPException(
            status_code=404,
            detail="Placement request not found"
        )

    return request


@router.put("/{request_id}", response_model=schemas.PlacementRequestResponse)
def update_request(
    request_id: int,
    updated_request: schemas.PlacementRequestUpdate,
    db: Session = Depends(get_db)
):
    request = crud.update_request(
        db,
        request_id,
        updated_request
    )

    if request is None:
        raise HTTPException(
            status_code=404,
            detail="Placement request not found"
        )

    return request
@router.delete("/{request_id}")
def delete_request(
    request_id: int,
    db: Session = Depends(get_db)
):
    request = crud.delete_request(db, request_id)

    if request is None:
        raise HTTPException(
            status_code=404,
            detail="Placement request not found"
        )

    return {
        "message": "Placement request deleted successfully"
    }