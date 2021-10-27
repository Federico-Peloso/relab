# main.py

import certifi
from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)

# Strinfa di connessione al DB
client = MongoClient(
    'mongodb+srv://mongo_loide:3Y92NQFGdSyeU8Y1@cluster0.7ftto.mongodb.net/sample_mflix?retryWrites=true&w=majority',
    tlsCAFile=certifi.where())

db = client['relab']
collection = db['Mil4326WKT']

# Per rispondere alle chiamate cross origin
CORS(app)


# Annotation that allows the function to be hit at the specific URL.
@app.route("/")
# Generic Python functino that returns "Hello world!"
def index():
    return "Hello world!"


# Questa route effettua una find() su tutto il DB (si limita ai primi 100 risultati)
@app.route('/addresses', methods=['GET'])
def get_all_addresses():
    query_results = [e['INDIRIZZO'] for e in collection.find().limit(100)]

    return jsonify({'result': query_results})


# @app.route('/ci_vettore', methods=['GET'])
# def get_vettore():
#     query_results = [e['CI_VETTORE'] for e in collection.find().limit(100)]
#
#     return jsonify({'result': query_results})


@app.route('/ci_vettore/<foglio>', methods=['GET'])
def get_vettore(foglio):
    query = {'FOGLIO': foglio}
    view = {
        "_id": 0,
        "WKT": 0,
        "SEZ": 0,
        "COD_REG": 0
    }
    query_results = [e for e in collection.find(query, view).limit(100)]

    return jsonify({'result': query_results})


@app.route('/ci_vettore/sezione/<sezione>', methods=['GET'])
def get_sezione(sezione):
    query = {'SEZ': sezione}
    query_results = [e for e in collection.find(query).limit(100)]

    return jsonify({'result': query_results})


# Checks to see if the name of the package is the run as the main package.
if __name__ == "__main__":
    # Runs the Flask application only if the main.py file is being run.
    app.run()
