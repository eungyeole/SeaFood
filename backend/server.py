from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import pymysql
from db import get_connection

count = 0

app = Flask (__name__)
CORS(app)
app.config['JSON_AS_ASCII'] = False

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
        "HOME",
        "CRAB",
        "FISH"
    )
@app.route('/product')
def product():
    check = jsonify(
        error="Unable to check product"
    )
    param= jsonify(
        error="Parameter not found"
    )
    tags = request.args.get('tags', param)
    conn = get_connection()
    if(tags!='HOME'):
        sql = f"""SELECT * FROM product WHERE tags='{tags}'"""
        cursor = conn.cursor()
        cursor.execute(sql)
    else:
        sql = f"""SELECT * FROM product"""
        cursor = conn.cursor()
        cursor.execute(sql)
    response = cursor.fetchall()
    json = jsonify(
        response
    )
    conn.commit()
    conn.close()
    return json

if __name__ == "__main__":
    app.run()