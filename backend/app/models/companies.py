from sqlalchemy import Column, String, Text, Boolean, ForeignKey
from app.database import Base

class Company(Base):
    __tablename__ = "companies"

    company_id = Column(String(12), primary_key=True)
    user_id = Column(String(12), ForeignKey("users.user_id"))
    company_name = Column(String(255), nullable=False)
    department = Column(String(255), nullable=False)
    description = Column(Text)
    address = Column(Text)
    website = Column(String(255))
    phone = Column(String(50))
    verified = Column(Boolean, default=False)
