from pydantic import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = "labodc_secret_key"
    ALGORITHM: str = "HS256"

settings = Settings()
