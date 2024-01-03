FROM python:3.13.0a2-slim-bookworm

RUN useradd www-data
USER www-data
WORKDIR /home/www-data

RUN pip install --upgrade pip

COPY --chown=www-data:www-data requirements.txt requirements.txt
RUN pip install --user -r requirements.txt

ENV PATH="/home/www-data/.local/bin:${PATH}"

COPY --chown=www-data:www-data . .

CMD ["python", "main.py", "runserver", "0.0.0.0:8080"]