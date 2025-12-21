from sqlalchemy import Column, Integer, String, Text, ForeignKey, TIMESTAMP, DATE 
from app.database import Base   

class Task(Base):
    
    __tablename__ = "tasks"

    task_id = Column(String(12), primary_key=True)
    project_id = Column(String(12), ForeignKey("projects.project_id")) 
    assigned_to = Column(String(12), ForeignKey("users.user_id"))
    assigned_by = Column(String(12), ForeignKey("users.user_id"))
    title = Column(String(255), nullable=False)
    description = Column(Text)
    status = Column(String(50))
    deadline = Column(DATE)
    submited_at = Column(TIMESTAMP)  
    review_at = Column(TIMESTAMP)  
    