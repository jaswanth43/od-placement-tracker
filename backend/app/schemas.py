from datetime import date
from pydantic import BaseModel


class PlacementRequestCreate(BaseModel):
    date: date
    company_name: str
    session: str
    round_name: str
    remarks: str | None = None
class PlacementRequestUpdate(BaseModel):
    date: date
    company_name: str
    session: str
    round_name: str
    remarks: str | None = None


class PlacementRequestResponse(PlacementRequestCreate):
    id: int

    class Config:
        from_attributes = True
