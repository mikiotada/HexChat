#!/bin/sh
APPLICATION_NAME="HexChat"
PIPELINE_JSON_BASE="pipeline-internal.json" # Before submitting, we'll replace this with pipeline.json
PIPELINE_JSON_TMP="pipeline-${APPLICATION_NAME}.json"

echo "Using application name $APPLICATION_NAME"

# Create a temp copy of pipeline.json which for deployment
cp ./$PIPELINE_JSON_BASE ./$PIPELINE_JSON_TMP

# replacing the the base pipeline.json with correct application name.
sed -i "s/ToBeReplaced/$APPLICATION_NAME/g" $PIPELINE_JSON_TMP

# Create the application.
echo "Creating environment"
eb init --platform node.js --region us-west-2 $APPLICATION_NAME

echo "Creating application $APPLICATION_NAME"
eb create ${APPLICATION_NAME}

echo "Creating code-pipeline"
aws codepipeline create-pipeline --cli-input-json file://$PIPELINE_JSON_TMP

echo "Removing temporary file: $PIPELINE_JSON_TMP"
rm $PIPELINE_JSON_TMP
