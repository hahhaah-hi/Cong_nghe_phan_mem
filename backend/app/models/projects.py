from sqlalchemy import Column, Integer, String, Date, ForeignKey, CHAR
from app.database import Base

class Project(Base):
    __tablename__ = "projects"
    project_id = Column(Integer, primary_key=True, autoincrement=True)
    company_id = Column(CHAR(12), ForeignKey("companies.company_id"))
    mentor_user_id = Column(Integer, ForeignKey("mentors.user_id"))
    title = Column(String(255), nullable=False)
    description = Column(String)
    status = Column(String(50), default='assigned')
    deadline = Column(Date)