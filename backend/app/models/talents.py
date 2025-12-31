from sqlalchemy import Column, Integer, String, ForeignKey
from app.database import Base
from sqlalchemy.orm import relationship


class Talent(Base):
    __tablename__ = "talents"
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), primary_key=True)
    major = Column(String(255))
    student_code = Column(String(50), unique=True)
    skills = Column(String)
    certifications = Column(String)
    portfolio_url = Column(String)

    user = relationship("User", back_populates="talent")
    projects = relationship("ProjectTeam", back_populates="talent")
    tasks_assigned = relationship("Task", back_populates="assigned_to_user")