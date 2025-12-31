from sqlalchemy import Column, Integer, String, ForeignKey, TIMESTAMP, text
from app.database import Base
from sqlalchemy.orm import relationship


class Notification(Base):
    __tablename__ = "notification"
    notification_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"), nullable=False)
    title = Column(String, nullable=False)
    messages = Column(String)
    created_at = Column(TIMESTAMP, server_default=text("NOW()"))

    user = relationship("User", back_populates="notifications")