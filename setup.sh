#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPTS_DIR="${SCRIPT_DIR}/src/scripts"
SERVICE_SRC="${SCRIPT_DIR}/src/service/server_mine.service"
SERVICE_DEST="/etc/systemd/system/server_mine.service"

# Determine base installation directory — defaults to where setup.sh lives,
# can be overridden via env var or first argument
BASE_DIR="${1:-${BASE_DIR:-${SCRIPT_DIR}}}"

if [[ ! -f "${SERVICE_SRC}" ]]; then
    echo "Error: Service file not found at ${SERVICE_SRC}"
    exit 1
fi

echo "=== Setting up modpack and Java ==="
JAVA_VER=$("${SCRIPTS_DIR}/detect-java-version.sh")
"${SCRIPTS_DIR}/setup-mise-java.sh"

echo "=== Installing server_mine.service ==="

# Prompt for service user
read -p "Enter username to run the service under (default: arstry): " SERVICE_USER
SERVICE_USER="${SERVICE_USER:-arstry}"

# Generate service file with prompted user and base directory
WORKING_DIR="${BASE_DIR}/src/modpack"
cat "${SERVICE_SRC}" \
    | sed "s|^User=.*|User=${SERVICE_USER}|" \
    | sed "s|^Group=.*|Group=${SERVICE_USER}|" \
    | sed "s|^WorkingDirectory=.*|WorkingDirectory=${WORKING_DIR}|" \
    | sudo tee "${SERVICE_DEST}" > /dev/null

sudo systemctl daemon-reload
sudo systemctl enable server_mine.service
sudo systemctl restart server_mine.service

echo "=== Service installed and restarted successfully ==="
echo "Service running as: ${SERVICE_USER}"
echo "Java version: ${JAVA_VER}"
echo "Working directory: ${WORKING_DIR}"
