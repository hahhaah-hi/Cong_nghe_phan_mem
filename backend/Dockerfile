FROM python:3.11-slim

WORKDIR /app

# copy file requirements trước để cache tốt hơn
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# copy toàn bộ source
COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
