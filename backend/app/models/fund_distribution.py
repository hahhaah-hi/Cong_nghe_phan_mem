from sqlalchemy import Column, Integer, ForeignKey, Numeric, Text, TIMESTAMP
from app.database import Base

class FundDistribution(Base):
    __tablename__ = "fund_distribution"

    distribution_id = Column(Integer, primary_key=True, index=True)
    project_id = Column(
        Integer,
        ForeignKey("projects.project_id", ondelete="CASCADE"),
        nullable=False
    )

    talent_amount = Column(Numeric(12, 2))
    mentor_amount = Column(Numeric(12, 2))
    lab_amount = Column(Numeric(12, 2))

    description = Column(Text)
    processed_at = Column(TIMESTAMP)
