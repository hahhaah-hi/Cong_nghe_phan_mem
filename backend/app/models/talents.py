from sqlalchemy import Column, Integer, String, ForeignKey
from app.database import Base

class Talent(Base):
    __tablename__ = "talents"
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), primary_key=True)
    major = Column(String(255))
    student_code = Column(String(50), unique=True)
    skills = Column(String)
    certifications = Column(String)
    portfolio_url = Column(String)