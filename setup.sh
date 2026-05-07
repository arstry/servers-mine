#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVICEScripts="${SCRIPT_DIR}/scripts"
WORK_DIR="${SCRIPT_DIR}"
SERVICE_SRC="${SCRIPT_DIR}/src/service/server_mine.service"
SERVICE_DEST="/etc/systemd/system/server_mine.service"

if [[ ! -f "${SERVICE_SRC}" ]]; then
    echo "Error: Service file not found at ${SERVICE_SRC}"
    exit 1
fi

echo "=== Setting up modpack and Java ==="
"${SERVICEScripts}/setup-mise-java.sh"

echo "=== Installing server_mine.service ==="

# Prompt for service user
read -p "Enter username to run the service under (default: arstry): " SERVICE_USER
SERVICE_USER="${SERVICE_USER:-arstry}"

# Generate service file with prompted user
cat "${SERVICE_SRC}" | sed "s/^User=.*/User=${SERVICE_USER}/" | sed "s/^Group=.*/Group=${SERVICE_USER}/" | sudo tee "${SERVICE_DEST}" > /dev/null

sudo systemctl daemon-reload
sudo systemctl enable server_mine.service
sudo systemctl restart server_mine.service

echo "=== Service installed and restarted successfully ==="
echo "Service running as: ${SERVICE_USER}"
echo "Java version: ${JAVA_VER}"
echo "Working directory: /opt/server-mine/src/modpack"
