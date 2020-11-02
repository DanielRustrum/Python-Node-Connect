from flask import Flask, escape, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def trigger():
    args = request.args.get("args", {})
    call = request.args.get("call", "")
    return f'Hello, Worlds!'

app.run(port=3001)