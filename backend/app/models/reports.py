from sqlalchemy import Column, Integer, String, ForeignKey, CHAR, TIMESTAMP, text
from app.database import Base

class Report(Base):
    __tablename__ = "reports"
    report_id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey("projects.project_id", ondelete="CASCADE"), nullable=False)
    mentor_user_id = Column(Integer, ForeignKey("mentors.user_id"), nullable=False)
    report_type = Column(String(50))
    content = Column(String)
    created_at = Column(TIMESTAMP, server_default=text("NOW()"))