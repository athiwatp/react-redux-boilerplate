#!/bin/bash

export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""

AWS_ACCOUNT_ID=""
AWS_REGION="eu-west-1"

PROJECT_REPONAME="react-redux-boilerplate"
DOCKER_REGISTRY="${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com"

EC2_USERNAME=""
EC2_HOST=""
EC2_KEY_PATH=""

HTTP_PORT="8080"
