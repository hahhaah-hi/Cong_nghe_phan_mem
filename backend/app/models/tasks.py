from sqlalchemy import Column, Integer, String, Date, ForeignKey, TIMESTAMP, text
from app.database import Base
from sqlalchemy.orm import relationship

class Task(Base):
    __tablename__ = "tasks"
    task_id = Column(Integer, primary_key=True, autoincrement=True)
    project_id = Column(Integer, ForeignKey("projects.project_id", ondelete="CASCADE"), nullable=False)
    assigned_by = Column(Integer, ForeignKey("mentors.user_id"), nullable=False)
    assigned_to = Column(Integer, ForeignKey("talents.user_id"), nullable=False)
    title = Column(String(255), nullable=False)
    description = Column(String)
    status = Column(String(50), default='assigned')
    deadline = Column(Date)
    created_at = Column(TIMESTAMP, server_default=text("NOW()"))
    completed_at = Column(TIMESTAMP)
    
    project = relationship("Project", back_populates="tasks")
    assigned_by_user = relationship("Mentor", back_populates="tasks_created")
    assigned_to_user = relationship("Talent", back_populates="tasks_assigned")