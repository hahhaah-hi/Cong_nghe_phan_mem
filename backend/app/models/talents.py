from sqlalchemy import Column, String, Text, ForeignKey
from app.database import Base

class Talent(Base):
    __tablename__ = "talents"

    talent_id = Column(String(12), primary_key=True)
    user_id = Column(String(12), ForeignKey("users.user_id"))
    major = Column(String(255))
    student_code = Column(String(50))
    skills = Column(Text)
    description = Column(Text)
    certifications = Column(Text)
    portfolio_url = Column(Text)
