from sqlalchemy import Column, Integer, ForeignKey, CHAR, Numeric, String, TIMESTAMP
from app.database import Base

class Payment(Base):
    __tablename__ = "payments"
    payment_id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey("projects.project_id", ondelete="CASCADE"), nullable=False)
    company_id = Column(CHAR(12), ForeignKey("companies.company_id"), nullable=False)
    amount = Column(Numeric(12, 2), nullable=False)
    status = Column(String(50), default='pending')
    paid_at = Column(TIMESTAMP)