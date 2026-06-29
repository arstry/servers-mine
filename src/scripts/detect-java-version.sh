#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORK_DIR="$(cd "${SCRIPT_DIR}/../.." && pwd)"
MODPACK_DIR="${WORK_DIR}/src/modpack"
MISE_INSTALLS="${HOME}/.local/share/mise/installs"

# Colors — only when stderr is a terminal
if [[ -t 2 ]]; then
    G=$'\033[0;32m' Y=$'\033[1;33m' C=$'\033[0;36m' B=$'\033[1m' D=$'\033[2m' R=$'\033[0m'
else
    G='' Y='' C='' B='' D='' R=''
fi

echo "${B}==> Detecting required Java version${R}" >&2
echo "  ${C}·${R} Scripts dir : ${D}${SCRIPT_DIR}${R}" >&2
echo "  ${C}·${R} Repo root   : ${D}${WORK_DIR}${R}" >&2
echo "  ${C}·${R} Modpack dir : ${D}${MODPACK_DIR}${R}" >&2

if [[ -f "${MODPACK_DIR}/run.sh" ]]; then
    JAVA_VER=$(grep -oiE "(JAVA_VERSION|java_version|JAVA_HOME)=\"?'?([0-9]+)" "${MODPACK_DIR}/run.sh" | grep -oiE "[0-9]+" | head -1)
    if [[ -n "${JAVA_VER}" ]]; then
        echo "  ${G}✓${R} Source: modpack run.sh → Java ${B}${JAVA_VER}${R}" >&2
    fi
fi

if [[ -z "${JAVA_VER}" && -f "${WORK_DIR}/mise.toml" ]]; then
    JAVA_VER=$(grep -i "java" "${WORK_DIR}/mise.toml" | grep -oiE "[0-9]+\.[0-9]+(\.[0-9]+)?" | head -1)
    if [[ -n "${JAVA_VER}" ]]; then
        echo "  ${G}✓${R} Source: mise.toml → Java ${B}${JAVA_VER}${R}" >&2
    fi
fi

if [[ -z "${JAVA_VER}" ]]; then
    if [[ -d "${MISE_INSTALLS}/17" ]]; then
        JAVA_VER="17"
        echo "  ${G}✓${R} Source: mise installs → Java ${B}17${R}" >&2
    elif [[ -d "${MISE_INSTALLS}/25" ]]; then
        JAVA_VER="25"
        echo "  ${G}✓${R} Source: mise installs → Java ${B}25${R}" >&2
    else
        echo "  ${Y}⚠${R} Could not detect Java version, defaulting to 17" >&2
        JAVA_VER="17"
    fi
fi

echo "  ${B}Required:${R} ${G}Java ${JAVA_VER}${R}" >&2
echo "${JAVA_VER}"
