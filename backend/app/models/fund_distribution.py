import uuid
from sqlalchemy import Column, String, Text, Numeric, TIMESTAMP, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from app.database import Base


class FundDistribution(Base):
    __tablename__ = "fund_distribution"

    distribution_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    project_id = Column(String(12), ForeignKey("projects.project_id", ondelete="CASCADE"), nullable=False)
    talent_amount = Column(Numeric(12, 2))
    mentor_amount = Column(Numeric(12, 2))
    lab_amount = Column(Numeric(12, 2))
    description = Column(Text)
    processed_at = Column(TIMESTAMP, server_default=func.now())