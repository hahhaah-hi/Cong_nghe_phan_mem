from sqlalchemy import Column, String, Text, ForeignKey, TIMESTAMP
from sqlalchemy.sql import func
from app.database import Base   

class Notification(Base):
    __tablename__ = "notifications"

    notification_id = Column(String(12), primary_key=True)
    user_id = Column(String(12), ForeignKey("users.user_id"))
    message = Column(Text, nullable=False)
    title = Column(String(255), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())