import requests

url = "http://127.0.0.1:5000/product?id=1"

payload = "{\r\n    \"password\" : \"1234\"\r\n}"
headers = {
  'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))
