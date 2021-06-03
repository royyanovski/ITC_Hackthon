from flask import Flask, request
from flask_cors import CORS
import torch
import json

model = torch.load()

app = Flask(__name__)
CORS(app)


@app.route('/predict')
def pred_func():

    response = json.jsonify(predictions)
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3333)
