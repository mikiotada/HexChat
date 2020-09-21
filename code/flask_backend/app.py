import os
from flask import Flask, request, jsonify
from firebase_admin import credentials, firestore, initialize_app
import jsonschema
from jsonschema import validate
import json

from utility_be import validate_json
from models import form_group_schema, form_cohort_schema

# Initialize Flask app
app = Flask(__name__)

# Initialize Firestore DB

# Ask me (Geoffrey) to get this json, don't push to GitHub!
cred = credentials.Certificate("hexchat.json")
default_app = initialize_app(cred)
db = firestore.client()

# group collection reference
group_collection_ref = db.collection("group")
# cohort collection reference
cohort_collection_ref = db.collection("cohort")


@app.route("/form_group", methods=["POST"])
def create():
    """
        create() : Add document to Firestore collection group with request
        body.

        Reference to Notebook on how to use form_group API

        Input data will be validated with a specified schema, only validated
        data will create a document in Firestore
    """
    # Cross check submitted input is as expected
    json_response = validate_json(request.json, form_group_schema)
    if json_response[0]:
        json_data = request.json
        json_data[u"createdAt"] = firestore.SERVER_TIMESTAMP
        group_doc_ref = group_collection_ref.document()
        group_doc_ref.set(json_data)
        return jsonify({"success": True, "message": json_response[1]}), 200
    else:
        return jsonify({"success": False, "message": json_response[1]}), 400


@app.route("/form_cohort", methods=["POST"])
def create_cohort():
    """
        create_cohort() : Add document to Firestore collection cohort with
        request body.

        Input data will be validated with a specified schema, only validated
        data will create a document in Firestore
    """
    # Cross check submitted input is as expected
    json_response = validate_json(request.json, form_cohort_schema)
    if json_response[0]:
        json_data = request.json
        json_data[u"createdAt"] = firestore.SERVER_TIMESTAMP
        cohort_doc_ref = cohort_collection_ref.document()
        cohort_doc_ref.set(json_data)
        return jsonify({"success": True, "message": json_response[1]}), 200
    else:
        return jsonify({"success": False, "message": json_response[1]}), 400


if __name__ == "__main__":
    app.run(debug=True)
