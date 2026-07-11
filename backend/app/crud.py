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