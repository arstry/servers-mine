#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORK_DIR="$(cd "${SCRIPT_DIR}/../.." && pwd)"
MODPACK_DIR="${WORK_DIR}/src/modpack"
MISE_INSTALLS="${HOME}/.local/share/mise/installs"

echo "==> Detecting required Java version" >&2
echo "    Scripts dir : ${SCRIPT_DIR}" >&2
echo "    Repo root   : ${WORK_DIR}" >&2
echo "    Modpack dir : ${MODPACK_DIR}" >&2

# Try to find Java version from common sources
if [[ -f "${MODPACK_DIR}/run.sh" ]]; then
    JAVA_VER=$(grep -oiE "(JAVA_VERSION|java_version|JAVA_HOME)=\"?'?([0-9]+)" "${MODPACK_DIR}/run.sh" | grep -oiE "[0-9]+" | head -1)
    if [[ -n "${JAVA_VER}" ]]; then
        echo "    Source: modpack run.sh → Java ${JAVA_VER}" >&2
    fi
fi

# Fallback: check mise.toml in project root
if [[ -z "${JAVA_VER}" && -f "${WORK_DIR}/mise.toml" ]]; then
    JAVA_VER=$(grep -i "java" "${WORK_DIR}/mise.toml" | grep -oiE "[0-9]+\.[0-9]+(\.[0-9]+)?" | head -1)
    if [[ -n "${JAVA_VER}" ]]; then
        echo "    Source: mise.toml → Java ${JAVA_VER}" >&2
    fi
fi

# Fallback: check installed versions that might match common modpack requirements
if [[ -z "${JAVA_VER}" ]]; then
    if [[ -d "${MISE_INSTALLS}/17" ]]; then
        JAVA_VER="17"
        echo "    Source: mise installs dir (found java/17)" >&2
    elif [[ -d "${MISE_INSTALLS}/25" ]]; then
        JAVA_VER="25"
        echo "    Source: mise installs dir (found java/25)" >&2
    else
        echo "    Warning: Could not detect Java version, defaulting to 17" >&2
        JAVA_VER="17"
    fi
fi

echo "    Required Java version: ${JAVA_VER}" >&2
echo "${JAVA_VER}"
