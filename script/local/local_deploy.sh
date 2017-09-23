#!/bin/bash

# unofficial bash strict mode
set -euo pipefail
IFS=$'\n\t'

# run from any directory (no symlink allowed)
CURRENT_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")"; pwd -P)
cd ${CURRENT_PATH}

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

function print_env_var {
  echo "[*] environment variables"
  echo -e "EC2_USERNAME:\t\t$EC2_USERNAME"
  echo -e "EC2_HOST:\t\t$EC2_HOST"
  echo -e "EC2_KEY_PATH:\t\t$EC2_KEY_PATH"
  echo -e "AWS_REGION:\t\t$AWS_REGION"
  echo -e "PROJECT_REPONAME:\t$PROJECT_REPONAME"
  echo -e "DOCKER_REGISTRY:\t$DOCKER_REGISTRY"
  echo -e "HTTP_PORT:\t\t$HTTP_PORT"
}

function docker_run {
  local CONTAINER_PORT=80
  local HOST_PORT=$1
  local PROJECT_REPONAME=$2
  local DOCKER_REGISTRY=$3
  local PROJECT_REPONAME=$4

  # run container in background with logs disabled
  docker run \
    --detach \
    -p ${HOST_PORT}:${CONTAINER_PORT} \
    --log-driver none \
    --name ${PROJECT_REPONAME} \
    ${DOCKER_REGISTRY}/${PROJECT_REPONAME}:latest
}

function deploy_ec2 {
  echo "[*] deploy"

  ssh ${EC2_USERNAME}@${EC2_HOST} -i ${EC2_KEY_PATH} << EOF

    # aws login
    eval $(aws ecr get-login --no-include-email --region $AWS_REGION)
    # pull latest image
    docker pull ${DOCKER_REGISTRY}/${PROJECT_REPONAME}:latest

    # remove old container by name
    docker ps -a -q -f name=${PROJECT_REPONAME} | xargs --no-run-if-empty docker rm -f

    # invoke function
    $(typeset -f); docker_run ${HTTP_PORT} ${PROJECT_REPONAME} ${DOCKER_REGISTRY} ${PROJECT_REPONAME}

    # delete dangling images <none>
    docker images -q -f dangling=true | xargs --no-run-if-empty docker rmi
    # delete dangling volumes
    docker volume ls -q -f dangling=true | xargs --no-run-if-empty docker volume rm

EOF
}

function main {
  echo "[+][LOCAL] EC2"
  deploy_ec2
  echo "[-][LOCAL] EC2"
}

function init_env {
  local FILE_ENV="env.sh"
  if [[ -f ${FILE_ENV} ]]; then
    source ${FILE_ENV}
    print_env_var
  else
    echo "[-] error: ${FILE_ENV} not found"
    exit 1
  fi
}

function verify_cmd {
  command -v docker >/dev/null 2>&1 || { echo >&2 "[-] error: docker not found"; exit 1; }
}

init_env
verify_cmd

read -p $'\nAre you sure? Press any key to continue or CTRL+c to exit' -n 1 -r && echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  main
fi
