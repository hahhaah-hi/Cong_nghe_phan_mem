from fastapi import FastAPI
from app.database import engine, Base
from app.routers import (
    user,
    authenication,
    roles,
    profile,
    company,
    project,
    talent,
    mentor,
    project_team,
    lab_admin,
    system_admin,
    task,
    payment,
    fund_distribution,
    report,
    notification
)

app = FastAPI()

Base.metadata.create_all(bind=engine)

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
app.include_router(payment.router)
app.include_router(fund_distribution.router)
app.include_router(report.router)
app.include_router(notification.router)

@app.get("/")
def root():
    return {"status": "OK"}
