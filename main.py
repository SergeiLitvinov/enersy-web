#!/usr/bin/python
# coding: utf-8
from flask import Flask

app = Flask(__name__)

@app.route('/')
def entry_point():
    return 'Hello World!'

if __name__ == '__main__':
    from waitress import serve
    app.run(host='0.0.0.0', port=8080, debug=True)