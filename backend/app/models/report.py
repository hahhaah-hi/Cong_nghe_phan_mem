from sqlalchemy import Column, String, Text, ForeignKey
from app.database import Base

class Report(Base):
    __tablename__ = "reports"

    report_id = Column(String(12), primary_key=True)
    project_id = Column(String(12), ForeignKey("projects.project_id"))
    mentor_id = Column(String(12), ForeignKey("mentors.mentor_id"))
    report_type = Column(String(50))
    description = Column(Text)
    submitted_by = Column(String(12), ForeignKey("users.user_id"))
    contents = Column(Text)
    created_at = Column(String(50))