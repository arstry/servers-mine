#!/usr/bin/env bash
# Align the image's default user with PUID/PGID, so files written to the data
# volume belong to the host user, then run the given command as that user.
# Usage: run-as-user.sh <command> [args...]   (must run as root)
set -euo pipefail

SERVER_DIR="${SERVER_DIR:-/opt/minecraft/server}"
RUN_USER="${RUN_USER:-ubuntu}"
PUID="${PUID:-$(id -u "${RUN_USER}")}"
PGID="${PGID:-$(id -g "${RUN_USER}")}"

echo "==> Preparing user"

if [[ "$(id -g "${RUN_USER}")" != "${PGID}" ]]; then
    groupmod -o -g "${PGID}" "$(id -gn "${RUN_USER}")"
    echo "    Group id changed to ${PGID}"
fi

if [[ "$(id -u "${RUN_USER}")" != "${PUID}" ]]; then
    usermod -o -u "${PUID}" "${RUN_USER}"
    echo "    User id changed to ${PUID}"
fi

# The server dir comes from the image owned by the default ids
if [[ "$(stat -c '%u:%g' "${SERVER_DIR}")" != "${PUID}:${PGID}" ]]; then
    chown -R "${PUID}:${PGID}" "${SERVER_DIR}"
    echo "    Server dir ownership updated"
fi

echo "    Running as ${RUN_USER} (${PUID}:${PGID})"

HOME="$(getent passwd "${RUN_USER}" | cut -d: -f6)"
export HOME
exec setpriv --reuid="${RUN_USER}" --regid="${PGID}" --init-groups -- "$@"
