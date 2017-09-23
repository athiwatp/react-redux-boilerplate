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

EC2_USERNAME=$1
EC2_HOST=$2
HOST_PORT=$3
CONTAINER_PORT=80
DOCKER_REGISTRY=${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_REGION}.amazonaws.com

function deploy_ec2 {
  echo "[*] deploy"

  ssh ${EC2_USERNAME}@${EC2_HOST} << EOF

    # aws login
    eval $(aws ecr get-login --region $AWS_REGION)
    # pull latest image
    docker pull ${DOCKER_REGISTRY}/${CIRCLE_PROJECT_REPONAME}:latest

    # remove old container by name
    docker ps -a -q -f name=${CIRCLE_PROJECT_REPONAME} | xargs --no-run-if-empty docker rm -f

    # run container in background with logs disabled
    docker run \
      --detach \
      -p ${HOST_PORT}:${CONTAINER_PORT} \
      --log-driver none \
      --name ${CIRCLE_PROJECT_REPONAME} \
      ${DOCKER_REGISTRY}/${CIRCLE_PROJECT_REPONAME}:latest

    # delete dangling images <none>
    docker images -q -f dangling=true | xargs --no-run-if-empty docker rmi
    # delete dangling volumes
    docker volume ls -q -f dangling=true | xargs --no-run-if-empty docker volume rm

EOF
}

function main {
  echo "[+] EC2"
  deploy_ec2
  echo "[-] EC2"
}

function verify_cmd {
  command -v aws >/dev/null 2>&1 || { echo >&2 "[-] error: aws not found"; exit 1; }
  command -v docker >/dev/null 2>&1 || { echo >&2 "[-] error: docker not found"; exit 1; }
}

verify_cmd
main
