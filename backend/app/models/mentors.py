from sqlalchemy import Column, Integer, String, ForeignKey
from app.database import Base

class Mentor(Base):
    __tablename__ = "mentors"
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), primary_key=True)
    expertise = Column(String)
    years_experience = Column(Integer)
    status = Column(String)