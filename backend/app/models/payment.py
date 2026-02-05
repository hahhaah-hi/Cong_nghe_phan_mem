# app/models/payment.py
from sqlalchemy import Column, Integer, ForeignKey, CHAR, Numeric, String, TIMESTAMP, text
from app.database import Base
from sqlalchemy.orm import relationship

class Payment(Base):
    __tablename__ = "payments"

    payment_id = Column(Integer, primary_key=True, autoincrement=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.project_id", ondelete="CASCADE"),
        nullable=False
    )

    company_id = Column(
        CHAR(12),
        ForeignKey("companies.company_id"),
        nullable=False
    )

    amount = Column(Numeric(12, 2), nullable=False)

    status = Column(
        String(50),
        default="pending",
        server_default=text("'pending'")
    )

    paid_at = Column(TIMESTAMP, nullable=True)

    # relationship (khuyên có)
    project = relationship("Project", back_populates="payments")
    company = relationship("Company", back_populates="payments")
