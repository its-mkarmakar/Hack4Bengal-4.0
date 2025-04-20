FROM python:3.11-slim

# Install FFmpeg and dependencies
RUN apt-get update && apt-get install -y ffmpeg

# Copy and install Python requirements
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy bot code
COPY . .

CMD ["python", "main.py"]
