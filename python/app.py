from flask import Flask, request
from flask_cors import CORS
import test4

app = Flask(__name__)
# Apply CORS to all routes and allow all origins, methods, and headers
CORS(app, supports_credentials=True)

my_array = []

@app.route('/data', methods=['POST'])
def get_data():
    global my_array
    url = request.json['url']  # It's generally safer to use direct key access if you're sure the key exists
    print(url)
    my_array = test4.download(url)
    return my_array

if __name__ == "__main__":
    app.secret_key = 'mysecretkey'
    app.run(debug=True)
