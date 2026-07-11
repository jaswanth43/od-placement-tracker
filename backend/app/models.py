from sqlalchemy import Column, Integer, String, Date, Text, TIMESTAMP
from sqlalchemy.sql import func
from app.database import Base


class PlacementRequest(Base):
    __tablename__ = "placement_requests"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date, nullable=False)
    company_name = Column(String(100), nullable=False)
    session = Column(String(20), nullable=False)
    round_name = Column(String(50), nullable=False)
    remarks = Column(Text)
    created_at = Column(TIMESTAMP, server_default=func.now())