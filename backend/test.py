import requests

url = "http://127.0.0.1:5000/product-tags"

headers = {
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers)

print(response.text.encode('utf8'))
