#!/usr/bin/env bash
# Keep the persistent files in the data volume, symlinked into the server dir.
set -euo pipefail

SERVER_DIR="${SERVER_DIR:-/opt/minecraft/server}"
DATA_DIR="${DATA_DIR:-/data}"
PERSIST="${PERSIST:-world/ eula.txt user_jvm_args.txt ops.json whitelist.json banned-players.json banned-ips.json usercache.json}"

echo "==> Linking persistent files"
echo "    Server dir : ${SERVER_DIR}"
echo "    Data dir   : ${DATA_DIR}"

for entry in ${PERSIST}; do
    name="${entry%/}"
    src="${SERVER_DIR}/${name}"
    dst="${DATA_DIR}/${name}"

    # First run: seed the volume with what the server pack shipped.
    # Afterwards the volume copy always wins over the image copy.
    if [[ -e "${src}" && ! -L "${src}" ]]; then
        if [[ -e "${dst}" ]]; then
            rm -rf "${src}"
        else
            mkdir -p "$(dirname "${dst}")"
            mv "${src}" "${dst}"
            echo "    Seeded ${name} from the server pack"
        fi
    fi

    if [[ "${entry}" == */ ]]; then
        mkdir -p "${dst}"
    fi

    mkdir -p "$(dirname "${src}")"
    ln -sfn "${dst}" "${src}"
    echo "    ${name} -> ${dst}"
done
