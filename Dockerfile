FROM python:3.13.0a2-slim-bookworm

COPY ./requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install -r requirements.txt

COPY . /app

COPY . /app

ENTRYPOINT [ "python" ]

CMD ["main.py" ]