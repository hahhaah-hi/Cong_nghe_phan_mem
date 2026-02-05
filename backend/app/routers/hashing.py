from passlib.context import CryptContext
import hashlib

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class Hash:
    @staticmethod
    def _pre_hash(password: str) -> str:
        return hashlib.sha256(password.encode("utf-8")).hexdigest()

    @staticmethod
    def bcrypt(password: str) -> str:
        return pwd_context.hash(Hash._pre_hash(password))

    @staticmethod
    def verify(password: str, hashed_password: str) -> bool:
        return pwd_context.verify(Hash._pre_hash(password), hashed_password)
