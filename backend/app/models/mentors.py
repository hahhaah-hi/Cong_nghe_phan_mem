from sqlalchemy import Column, String, Text, Integer, ForeignKey
from app.database import Base

class Mentor(Base):
    __tablename__ = "mentors"

    mentor_id = Column(String(12), primary_key=True)
    user_id = Column(String(12), ForeignKey("users.user_id"))
    status = Column(Text)
    expertise = Column(Text)
    description = Column(Text)
    years_experience = Column(Integer)
    