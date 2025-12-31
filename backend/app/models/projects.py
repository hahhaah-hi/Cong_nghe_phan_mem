from sqlalchemy import Column, Integer, String, Date, ForeignKey, CHAR
from app.database import Base
from sqlalchemy.orm import relationship

class Project(Base):
    __tablename__ = "projects"
    project_id = Column(Integer, primary_key=True, autoincrement=True)
    company_id = Column(CHAR(12), ForeignKey("companies.company_id"))
    mentor_user_id = Column(Integer, ForeignKey("mentors.user_id"))
    title = Column(String(255), nullable=False)
    description = Column(String)
    status = Column(String(50), default='assigned')
    deadline = Column(Date)

    company = relationship("Company", back_populates="projects")
    mentor = relationship("Mentor", back_populates="projects")
    team = relationship("ProjectTeam", back_populates="project")
    tasks = relationship("Task", back_populates="project")
    reports = relationship("Report", back_populates="project")