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

echo "[+] EC2"

echo "[-] EC2"
