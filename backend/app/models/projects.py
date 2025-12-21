from sqlalchemy import Column, String, Text, ForeignKey, TIMESTAMP, NUMERIC
from sqlalchemy.sql import func
from app.database import Base
class Project(Base):
    __tablename__ = "projects"

    project_id = Column(String(12), primary_key=True)
    company_id = Column(String(12), ForeignKey("companies.company_id"))
    mentor_id = Column(String(12), ForeignKey("mentors.mentor_id"))
    title = Column(String(255), nullable=False)
    description = Column(Text)
    status = Column(String(50))
    funding = Column(NUMERIC(12,0), default=0)
    create_at = Column(TIMESTAMP, server_default=func.now())
    approved_at = Column(TIMESTAMP)


