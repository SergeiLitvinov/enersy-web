FROM python:3.13.0a2-slim-bookworm

RUN pip install --upgrade pip

RUN useradd user
USER user
WORKDIR /home/user

COPY --chown=user:user requirements.txt requirements.txt
RUN pip install --user -r requirements.txt

ENV PATH="/home/user/.local/bin:${PATH}"

COPY --chown=user:user . .

CMD ["python", "main.py", "runserver", "0.0.0.0:8080"]