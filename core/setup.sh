#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPTS_DIR="${SCRIPT_DIR}/src/scripts"
SERVICE_SRC="${SCRIPT_DIR}/src/service/server_mine.service"
SERVICE_DEST="/etc/systemd/system/server_mine.service"

# Determine base installation directory — defaults to where setup.sh lives,
# can be overridden via env var or first argument
BASE_DIR="${1:-${BASE_DIR:-${SCRIPT_DIR}}}"

echo "========================================"
echo "  Server-Mine Setup"
echo "========================================"
echo ""
echo "    Script dir  : ${SCRIPT_DIR}"
echo "    Base dir    : ${BASE_DIR}"
echo "    Service src : ${SERVICE_SRC}"
echo ""

if [[ ! -f "${SERVICE_SRC}" ]]; then
    echo "Error: Service file not found at ${SERVICE_SRC}"
    exit 1
fi

# ── Step 1: Java setup ──
echo "── 1. Java Setup ──"
JAVA_VER=$("${SCRIPTS_DIR}/detect-java-version.sh")
"${SCRIPTS_DIR}/setup-mise-java.sh"
echo ""

# ── Step 2: Service user ──
echo "── 2. Service User ──"
if [[ -t 0 ]]; then
    read -p "    Enter username to run the service under (default: arstry): " SERVICE_USER
fi
SERVICE_USER="${SERVICE_USER:-arstry}"
echo "    Service user : ${SERVICE_USER}"
echo ""

# ── Step 3: Install systemd service ──
echo "── 3. Systemd Service ──"
WORKING_DIR="${BASE_DIR}/src/modpack"
echo "    Working directory : ${WORKING_DIR}"
echo "    Destination       : ${SERVICE_DEST}"

cat "${SERVICE_SRC}" \
    | sed "s|^User=.*|User=${SERVICE_USER}|" \
    | sed "s|^Group=.*|Group=${SERVICE_USER}|" \
    | sed "s|^WorkingDirectory=.*|WorkingDirectory=${WORKING_DIR}|" \
    | sudo tee "${SERVICE_DEST}" > /dev/null
echo "    Rendered service file installed"

sudo systemctl daemon-reload
echo "    systemd daemon reloaded"

sudo systemctl enable server_mine.service
echo "    server_mine.service enabled"

sudo systemctl restart server_mine.service
echo "    server_mine.service restarted"
echo ""

# ── Summary ──
echo "========================================"
echo "  Setup Complete"
echo "========================================"
echo ""
echo "    Java             : ${JAVA_VER}"
echo "    Service user     : ${SERVICE_USER}"
echo "    Working directory: ${WORKING_DIR}"
echo ""
echo "  Useful commands:"
echo "    systemctl status server_mine"
echo "    tmux attach -t mine-server"
echo "    journalctl -u server_mine -f"
echo ""
