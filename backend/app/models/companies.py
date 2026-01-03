from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, CHAR
from app.database import Base
from sqlalchemy.orm import relationship

class Company(Base):
    __tablename__ = "companies"
    company_id = Column(String(12), primary_key=True)
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), unique=True, nullable=False)
    company_name = Column(String(255), nullable=False)
    department = Column(String(255))
    description = Column(String)
    website = Column(String(255))
    verified = Column(Boolean, default=False)

    user = relationship("User", back_populates="companies")
    projects = relationship("Project", back_populates="companies", cascade="all, delete")