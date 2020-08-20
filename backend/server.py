from flask import Flask, jsonify
from flask_cors import CORS
import requests

count = 0

app = Flask (__name__)
CORS(app)
@app.route('/')
def home():

    url = "http://127.0.0.1:5000/product-tags"

    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.request("GET", url, headers=headers)
    return response.text.encode('utf8')


@app.route('/product-tags')
def product_tags():
    return jsonify(
        tags=[
            {
                "tag":"CRAB"
            },
            {
                "tag": "FISH"
            },
            {
                "tag": "SHRIMP"
            }
        ]
    )


if __name__ == "__main__":
    app.run()