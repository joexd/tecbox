from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/data")
def get_some_data():
    return jsonify({"data": "some data!"})


if __name__ == '__main__':
    app.run(debug=True)