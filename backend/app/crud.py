from sqlalchemy.orm import Session
from app import models, schemas


def create_placement_request(
    db: Session,
    request: schemas.PlacementRequestCreate
):
    db_request = models.PlacementRequest(
        date=request.date,
        company_name=request.company_name,
        session=request.session,
        round_name=request.round_name,
        remarks=request.remarks
    )

    db.add(db_request)
    db.commit()
    db.refresh(db_request)

    return db_request


def get_all_requests(db: Session):
    return db.query(models.PlacementRequest).all()


def get_request_by_id(db: Session, request_id: int):
    return (
        db.query(models.PlacementRequest)
        .filter(models.PlacementRequest.id == request_id)
        .first()
    )
def update_request(
    db: Session,
    request_id: int,
    updated_request: schemas.PlacementRequestUpdate
):
    db_request = (
        db.query(models.PlacementRequest)
        .filter(models.PlacementRequest.id == request_id)
        .first()
    )

    if db_request is None:
        return None

    db_request.date = updated_request.date
    db_request.company_name = updated_request.company_name
    db_request.session = updated_request.session
    db_request.round_name = updated_request.round_name
    db_request.remarks = updated_request.remarks

    db.commit()
    db.refresh(db_request)

    return db_request
def delete_request(db: Session, request_id: int):
    db_request = (
        db.query(models.PlacementRequest)
        .filter(models.PlacementRequest.id == request_id)
        .first()
    )

    if db_request is None:
        return None

    db.delete(db_request)
    db.commit()

    return db_request