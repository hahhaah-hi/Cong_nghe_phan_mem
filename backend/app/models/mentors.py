from sqlalchemy import Column, Integer, String, ForeignKey
from app.database import Base
from sqlalchemy.orm import relationship

class Mentor(Base):
    __tablename__ = "mentors"
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), primary_key=True)
    expertise = Column(String)
    years_experience = Column(Integer)
    status = Column(String)

    user = relationship("User", back_populates="mentor")
    projects = relationship("Project", back_populates="mentor")
    tasks_created = relationship("Task", back_populates="assigned_by_user")
    reports_created = relationship("Report", back_populates="mentor")