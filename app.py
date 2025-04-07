from flask import Flask, request, jsonify
from flask_cors import CORS
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import dsa
from cryptography.hazmat.primitives.asymmetric.utils import Prehashed

app = Flask(__name__)
CORS(app)

private_key = dsa.generate_private_key(key_size=1024)
public_key = private_key.public_key()

@app.route('/sign', methods=['POST'])
def sign_message():
    data = request.json['message'].encode()
    signature = private_key.sign(data, hashes.SHA256())
    return jsonify({'signature': signature.hex()})

@app.route('/verify', methods=['POST'])
def verify_signature():
    data = request.json['message'].encode()
    signature = bytes.fromhex(request.json['signature'])
    try:
        public_key.verify(signature, data, hashes.SHA256())
        return jsonify({'valid': True})
    except Exception:
        return jsonify({'valid': False})

if __name__ == '__main__':
    app.run(debug=True)
