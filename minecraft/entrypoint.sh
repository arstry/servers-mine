#!/usr/bin/env bash
set -euo pipefail

SERVER_DIR="${SERVER_DIR:-/opt/minecraft/server}"

if [[ "$(id -u)" -eq 0 ]]; then
    exec run-as-user.sh "$0" "$@"
fi

link-data.sh
build-properties.sh

cd "${SERVER_DIR}"

echo "==> Starting server"
echo "    Java : $(java -version 2>&1 | head -1)"

if [[ -n "${START_CMD:-}" ]]; then
    echo "    Command : ${START_CMD}"
    exec bash -c "exec ${START_CMD}"
fi

if [[ -f run.sh ]]; then
    echo "    Command : run.sh nogui"
    exec sh ./run.sh nogui
fi

# No run.sh: launch the server jar directly
if [[ -z "${SERVER_JAR:-}" ]]; then
    mapfile -t jars < <(find . -maxdepth 1 -name '*.jar' -printf '%f\n')
    if [[ ${#jars[@]} -ne 1 ]]; then
        echo "    Error: no run.sh and ${#jars[@]} jars found in ${SERVER_DIR}." >&2
        echo "    Set SERVER_JAR or START_CMD to choose how to start the server." >&2
        exit 1
    fi
    SERVER_JAR="${jars[0]}"
fi

read -ra jvm_opts <<< "${JVM_OPTS:--Xms1G -Xmx4G}"
echo "    Command : java ${jvm_opts[*]} -jar ${SERVER_JAR} nogui"
exec java "${jvm_opts[@]}" -jar "${SERVER_JAR}" nogui
