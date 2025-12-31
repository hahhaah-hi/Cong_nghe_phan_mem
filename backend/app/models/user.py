from sqlalchemy import Column, Integer, String , TIMESTAMP, text
from app.database import Base
from sqlalchemy.orm import relationship

class User(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, autoincrement=True)
    user_name = Column(String(255), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    full_name = Column(String(255))
    phone_number = Column(String(15))
    created_at = Column(TIMESTAMP, server_default=text("NOW()"))
    updated_at = Column(TIMESTAMP, server_default=text("NOW()"), onupdate=text("NOW()"))
# quan hệ
    roles = relationship("UserRole", back_populates="user", cascade="all, delete")
    company = relationship("Company", back_populates="user", uselist=False)
    talent = relationship("Talent", back_populates="user", uselist=False)
    mentor = relationship("Mentor", back_populates="user", uselist=False)

    notifications = relationship("Notification", back_populates="user", cascade="all, delete")