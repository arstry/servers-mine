#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORK_DIR="${SCRIPT_DIR}/../../.."
MODPACK_DIR="${WORK_DIR}/src/modpack"
MISE_INSTALLS="${HOME}/.local/share/mise/installs"

echo "Detecting Java version for modpack..."

# Try to find Java version from common sources
if [[ -f "${MODPACK_DIR}/run.sh" ]]; then
    JAVA_VER=$(grep -i "java" "${MODPACK_DIR}/run.sh" | grep -oiE "[0-9]+\.[0-9]+(\.[0-9]+)?" | head -1)
fi

# Fallback: check mise.toml in project root
if [[ -z "${JAVA_VER}" && -f "${WORK_DIR}/mise.toml" ]]; then
    JAVA_VER=$(grep -i "java" "${WORK_DIR}/mise.toml" | grep -oiE "[0-9]+\.[0-9]+(\.[0-9]+)?" | head -1)
fi

# Fallback: check installed versions that might match common modpack requirements
if [[ -z "${JAVA_VER}" ]]; then
    if [[ -d "${MISE_INSTALLS}/17" ]]; then
        JAVA_VER="17"
    elif [[ -d "${MISE_INSTALLS}/25" ]]; then
        JAVA_VER="25"
    else
        echo "Warning: Could not detect Java version, defaulting to 17"
        JAVA_VER="17"
    fi
fi

echo "Detected Java version: ${JAVA_VER}" >&2
echo "${JAVA_VER}"
