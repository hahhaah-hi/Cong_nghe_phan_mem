from sqlalchemy import TIMESTAMP, Column, String, Text, ForeignKey, BOOLEAN, DATE, Interger, func
from app.database import Base

class ProjectTeam(Base):
    __tablename__ = "project_teams"

    team_id = Column(String(12), primary_key=True)
    team_name = Column(String(255), nullable=False)
    project_id = Column(String(12), ForeignKey("projects.project_id"))
    talent_id = Column(String(12), ForeignKey("talents.talent_id"))
    role = Column(String(100))
    is_lead = Column(BOOLEAN, default=False)
    joined_at = Column(DATE)
    description = Column(Text)
    create_at = Column( TIMESTAMP, server_default=func.now())