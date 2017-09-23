#!/bin/bash

# unofficial bash strict mode
set -euo pipefail
IFS=$'\n\t'

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

DOCKER_REGISTRY=${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

function login_aws {
  echo "[*] login"
  eval $(aws ecr get-login --region $AWS_REGION)
}

function docker_build {
  echo "[*] build docker image"
  docker build -t ${CIRCLE_PROJECT_REPONAME} -f docker/Dockerfile .
}

function docker_tag {
  echo "[*] tag docker image"
  docker tag ${CIRCLE_PROJECT_REPONAME} ${DOCKER_REGISTRY}/${CIRCLE_PROJECT_REPONAME}:${CIRCLE_SHA1}
  docker tag ${CIRCLE_PROJECT_REPONAME} ${DOCKER_REGISTRY}/${CIRCLE_PROJECT_REPONAME}:latest
}

function push_ecr {
  echo "[*] push image"
  docker push ${DOCKER_REGISTRY}/${CIRCLE_PROJECT_REPONAME}:${CIRCLE_SHA1}
  docker push ${DOCKER_REGISTRY}/${CIRCLE_PROJECT_REPONAME}:latest
}

function main {
  echo "[+] ECR"
  login_aws
  docker_build
  docker_tag
  push_ecr
  echo "[-] ECR"
}

function verify_cmd {
  command -v aws >/dev/null 2>&1 || { echo >&2 "[-] error: aws not found"; exit 1; }
  command -v docker >/dev/null 2>&1 || { echo >&2 "[-] error: docker not found"; exit 1; }
}

verify_cmd
main
