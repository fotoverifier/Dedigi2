FROM python:3.10-slim-bullseye

WORKDIR /app

RUN apt update && \
    apt install -y --no-install-recommends build-essential g++ gcc libgl1-mesa-glx libglib2.0-0 libsm6 libxrender1 libxext6 libgl1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
CMD ["python3", "main.py"]