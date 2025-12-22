from sqlalchemy import Column, Integer, ForeignKey, Boolean, Date, String, text
from app.database import Base

class ProjectTeam(Base):
    __tablename__ = "project_team"
    project_id = Column(Integer, ForeignKey("projects.project_id", ondelete="CASCADE"), primary_key=True)
    talent_user_id = Column(Integer, ForeignKey("talents.user_id", ondelete="CASCADE"), primary_key=True)
    is_leader = Column(Boolean, default=False)
    joined_at = Column(Date, server_default=text("CURRENT_DATE"))
    status = Column(String(50), default='active')