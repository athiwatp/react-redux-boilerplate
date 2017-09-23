#!/bin/bash

# unofficial bash strict mode
set -euo pipefail
IFS=$'\n\t'

# run from any directory (no symlink allowed)
CURRENT_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")"; pwd -P)
cd ${CURRENT_PATH}

ROOT_PATH="${CURRENT_PATH}/../../"

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
}

function xxx {
  echo "[*] "
}

function main {
  echo "[+][LOCAL] EC2"
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
