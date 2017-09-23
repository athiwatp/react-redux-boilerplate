#!/bin/bash

# unofficial bash strict mode
set -euo pipefail
IFS=$'\n\t'

# run from any directory (no symlink allowed)
CURRENT_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")"; pwd -P)
cd $CURRENT_PATH

title() {
cat<<"EOT"

      __         _       __    __           _           __
     / /_  _____(_)___ _/ /_  / /__      __(_)___  ____/ /
    / __ \/ ___/ / __ `/ __ \/ __/ | /| / / / __ \/ __  /
   / /_/ / /  / / /_/ / / / / /_ | |/ |/ / / / / / /_/ /
  /_.___/_/  /_/\__, /_/ /_/\__/ |__/|__/_/_/ /_/\__,_/
               /____/

EOT
}
title

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=

AWS_ACCOUNT_ID=
AWS_REGION=

PROJECT_REPONAME=
DOCKER_REGISTRY=${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

function print_env_var {
  echo "[*] environment variables"
  echo -e "AWS_ACCESS_KEY_ID:\t$AWS_ACCESS_KEY_ID"
  echo -e "AWS_SECRET_ACCESS_KEY:\t$AWS_SECRET_ACCESS_KEY"
  echo -e "AWS_ACCOUNT_ID:\t\t$AWS_ACCOUNT_ID"
  echo -e "AWS_REGION:\t\t$AWS_REGION"
  echo -e "PROJECT_REPONAME:\t$PROJECT_REPONAME"
  echo -e "DOCKER_REGISTRY:\t$DOCKER_REGISTRY"
}

function login_aws {
  echo "[*] login"
  #eval $(aws ecr get-login --no-include-email --region $AWS_REGION)
}

function docker_build {
  echo "[*] build docker image"
  #docker build -t ${PROJECT_REPONAME} -f docker/Dockerfile .
}

function docker_tag {
  echo "[*] tag docker image"
  #docker tag ${PROJECT_REPONAME} ${DOCKER_REGISTRY}/${PROJECT_REPONAME}:latest
}

function push_ecr {
  echo "[*] push image"
  #docker push ${DOCKER_REGISTRY}/${PROJECT_REPONAME}:latest
}

function main {
  echo "[+][LOCAL] ECR"
  login_aws
  docker_build
  docker_tag
  push_ecr
  echo "[-][LOCAL] ECR"
}

print_env_var

read -p $'\nAre you sure? Press any key to continue or CTRL+c to exit' -n 1 -r && echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  main
fi
