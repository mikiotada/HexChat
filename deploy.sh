#!/bin/sh
# Create the application.
echo "Creating environment"
eb init --platform node.js --region us-west-2 HexChat

echo "Creating application"
eb create HexChat

echo "Creating code-pipeline"
aws codepipeline create-pipeline --cli-input-json file://pipeline.json

