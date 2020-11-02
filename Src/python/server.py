from flask import Flask, escape, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def trigger():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'

@app.route('/async', methods=['GET'])
def async_trigger():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'

app.run()