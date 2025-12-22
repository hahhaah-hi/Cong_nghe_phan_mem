from sqlalchemy import Column, Integer, ForeignKey
from app.database import Base

class UserRole(Base):
    __tablename__ = "user_roles"
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), primary_key=True)
    role_id = Column(Integer, ForeignKey("roles.role_id", ondelete="CASCADE"), primary_key=True)