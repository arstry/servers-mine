#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SCRIPTS_DIR="${SCRIPT_DIR}/src/scripts"
SERVICE_SRC="${SCRIPT_DIR}/src/service/server_mine.service"
SERVICE_DEST="/etc/systemd/system/server_mine.service"

BASE_DIR="${1:-${BASE_DIR:-${SCRIPT_DIR}}}"
WORKING_DIR="${BASE_DIR}/src/modpack"

# Colors — only when stdout is a terminal
if [[ -t 1 ]]; then
    G=$'\033[0;32m' Y=$'\033[1;33m' C=$'\033[0;36m' B=$'\033[1m' D=$'\033[2m' R=$'\033[0m'
else
    G='' Y='' C='' B='' D='' R=''
fi

echo ""
echo "${B}╔══════════════════════════════════════╗${R}"
echo "${B}║          Server-Mine Setup           ║${R}"
echo "${B}╚══════════════════════════════════════╝${R}"
echo ""
echo "  ${C}·${R} Script dir  : ${D}${SCRIPT_DIR}${R}"
echo "  ${C}·${R} Base dir    : ${D}${BASE_DIR}${R}"
echo "  ${C}·${R} Service src : ${D}${SERVICE_SRC}${R}"
echo ""

if [[ ! -f "${SERVICE_SRC}" ]]; then
    echo "  ${Y}✗${R} Service file not found at ${SERVICE_SRC}" >&2
    exit 1
fi

# ── Step 1: Java setup ──────────────────────────────────────────────────────
echo "${B}── 1. Java Setup ──────────────────────────────────────────────────────${R}"
echo ""
JAVA_VER=$("${SCRIPTS_DIR}/detect-java-version.sh")
"${SCRIPTS_DIR}/setup-mise-java.sh"
echo ""

# ── Step 2: Service user ────────────────────────────────────────────────────
echo "${B}── 2. Service User ─────────────────────────────────────────────────────${R}"
echo ""
if [[ -t 0 ]]; then
    printf "  Enter username to run the service under ${D}(default: arstry)${R}: "
    read SERVICE_USER
fi
SERVICE_USER="${SERVICE_USER:-arstry}"
echo "  ${G}✓${R} Service user : ${B}${SERVICE_USER}${R}"
echo ""

# ── Step 3: Forge server ────────────────────────────────────────────────────
# run.sh references libraries/.../unix_args.txt, which only exists after the
# Forge installer has been run. The installer jar is committed; the generated
# libraries/ tree is gitignored, so install it here if it's missing.
echo "${B}── 3. Forge Server ─────────────────────────────────────────────────────${R}"
echo ""
INSTALLER=$(ls "${WORKING_DIR}"/forge-*-installer.jar 2>/dev/null | head -1)
if find "${WORKING_DIR}/libraries" -name unix_args.txt 2>/dev/null | grep -q .; then
    echo "  ${G}✓${R} Forge server already installed ${D}(libraries/ present)${R}"
elif [[ -n "${INSTALLER}" ]]; then
    echo "  ${C}·${R} Installer : ${D}${INSTALLER}${R}"
    echo "  ${C}·${R} Running: ${D}mise exec -- java -jar $(basename "${INSTALLER}") --installServer${R}"
    ( cd "${WORKING_DIR}" && sudo -u "${SERVICE_USER}" -H mise exec -- java -jar "${INSTALLER}" --installServer )
    echo "  ${G}✓${R} Forge server installed"
else
    echo "  ${Y}⚠${R} No libraries/ and no forge-*-installer.jar in ${D}${WORKING_DIR}${R}"
    echo "  ${Y}·${R} run.sh will fail until the Forge server is installed"
fi
echo ""

# ── Step 4: Systemd service ─────────────────────────────────────────────────
echo "${B}── 4. Systemd Service ──────────────────────────────────────────────────${R}"
echo ""
echo "  ${C}·${R} Working directory : ${D}${WORKING_DIR}${R}"
echo "  ${C}·${R} Destination       : ${D}${SERVICE_DEST}${R}"
echo ""

cat "${SERVICE_SRC}" \
    | sed "s|^User=.*|User=${SERVICE_USER}|" \
    | sed "s|^Group=.*|Group=${SERVICE_USER}|" \
    | sed "s|^WorkingDirectory=.*|WorkingDirectory=${WORKING_DIR}|" \
    | sudo tee "${SERVICE_DEST}" > /dev/null
echo "  ${G}✓${R} Service file installed"

sudo systemctl daemon-reload
echo "  ${G}✓${R} systemd daemon reloaded"

sudo systemctl enable server_mine.service
echo "  ${G}✓${R} server_mine.service enabled"

sudo systemctl restart server_mine.service
echo "  ${G}✓${R} server_mine.service restarted"
echo ""

# ── Summary ─────────────────────────────────────────────────────────────────
echo "${G}╔══════════════════════════════════════╗${R}"
echo "${G}║           Setup Complete             ║${R}"
echo "${G}╚══════════════════════════════════════╝${R}"
echo ""
echo "  ${C}·${R} Java              : ${B}${JAVA_VER}${R}"
echo "  ${C}·${R} Service user      : ${B}${SERVICE_USER}${R}"
echo "  ${C}·${R} Working directory : ${B}${WORKING_DIR}${R}"
echo ""
echo "  ${D}Useful commands:${R}"
echo "    ${D}systemctl status server_mine${R}"
echo "    ${D}tmux attach -t mine-server${R}"
echo "    ${D}journalctl -u server_mine -f${R}"
echo ""
