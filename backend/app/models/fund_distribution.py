from sqlalchemy import Column, Integer, ForeignKey, Numeric, String, TIMESTAMP, text
from app.database import Base

class FundDistribution(Base):
    __tablename__ = "fund_distribution"
    distribution_id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey("projects.project_id", ondelete="CASCADE"), nullable=False)
    talent_amount = Column(Numeric(12, 2))
    mentor_amount = Column(Numeric(12, 2))
    lab_amount = Column(Numeric(12, 2))
    description = Column(String)
    processed_at = Column(TIMESTAMP, server_default=text("NOW()"))