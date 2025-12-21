from sqlalchemy import Column, String, Text, ForeignKey, TIMESTAMP, NUMERIC
from sqlalchemy.sql import func
from app.database import Base

class Payment(Base):
    __tablename__ = "payments"

    payment_id = Column(String(12), primary_key=True)
    project_id = Column(String(12), ForeignKey("projects.project_id"))
    company_id = Column(String(12), ForeignKey("companies.company_id"))
    amount = Column(NUMERIC(12, 0), nullable=False)
    description = Column(Text)
    status = Column(String(50))
    create_at = Column(TIMESTAMP, server_default=func.now())
    transaction_date = Column(TIMESTAMP, server_default=func.now())
    