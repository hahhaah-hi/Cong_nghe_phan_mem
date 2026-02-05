
from fastapi import FastAPI
from app import models
from app.database import engine
from app.routers import user,authenication,roles,profile,company,project,talent,mentor,project_team,lab_admin,system_admin,task
app = FastAPI()


models.Base.metadata.create_all(bind=engine)

app.include_router(user.router)
app.include_router(authenication.router)
app.include_router(roles.router)
app.include_router(profile.router)
app.include_router(company.router)
app.include_router(project.router)
app.include_router(talent.router)
app.include_router(mentor.router)
app.include_router(project_team.router)
app.include_router(lab_admin.router)
app.include_router(system_admin.router)
app.include_router(task.router)

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
