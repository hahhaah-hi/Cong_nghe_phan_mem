from sqlalchemy import Column, Integer, ForeignKey, String, Text, TIMESTAMP
from app.database import Base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

class Report(Base):
    __tablename__ = "reports"

    report_id = Column(Integer, primary_key=True, autoincrement=True)

    project_id = Column(
        Integer,
        ForeignKey("projects.project_id", ondelete="CASCADE"),
        nullable=False
    )

    mentor_user_id = Column(
        Integer,
        ForeignKey("mentors.user_id"),
        nullable=False
    )

    report_type = Column(String(50))
    content = Column(Text)
    created_at = Column(TIMESTAMP, server_default=func.now())

    project = relationship("Project", back_populates="reports")
    mentor = relationship("Mentor", back_populates="reports")
