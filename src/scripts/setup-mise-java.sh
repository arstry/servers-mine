#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORK_DIR="$(cd "${SCRIPT_DIR}/../.." && pwd)"
MODPACK_DIR="${WORK_DIR}/src/modpack"
MISE_DIR="${HOME}/.local/share/mise"
JAVA_VERSION_FILE="${WORK_DIR}/.java-version"
MISE_TOML="${WORK_DIR}/mise.toml"

# Colors — only when stdout is a terminal
if [[ -t 1 ]]; then
    G=$'\033[0;32m' Y=$'\033[1;33m' C=$'\033[0;36m' B=$'\033[1m' D=$'\033[2m' R=$'\033[0m'
else
    G='' Y='' C='' B='' D='' R=''
fi

echo "${B}==> Setting up Java via mise${R}"

JAVA_VER=$(${SCRIPT_DIR}/detect-java-version.sh)
echo "  ${C}·${R} Full version  : ${B}${JAVA_VER}${R}"

JRE_VERSION=$(echo "${JAVA_VER}" | cut -d. -f1)
echo "  ${C}·${R} Major version : ${B}${JRE_VERSION}${R}"
echo ""

if [[ -t 0 ]]; then
    printf "  Install ${B}Java ${JAVA_VER}${R} now? ${D}[y/N]${R} "
    read -n 1 -r
    echo
else
    REPLY="n"
fi

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "  ${C}·${R} Running: ${D}mise install java@${JAVA_VER}${R}"
    mise install java@${JAVA_VER}
    echo "  ${G}✓${R} Java ${B}${JAVA_VER}${R} installed"
else
    echo "  ${Y}·${R} Skipped installation."
    echo ""
    echo "  ${C}Installed Java versions via mise:${R}"
    mise ls java 2>/dev/null | while IFS= read -r line; do
        echo "    ${D}${line}${R}"
    done
    echo ""

    if [[ -t 0 ]]; then
        printf "  Use an installed version instead? ${D}[y/N]${R} "
        read -n 1 -r
        echo
    else
        REPLY="n"
    fi

    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "  ${Y}·${R} To install manually: ${D}mise install java@${JAVA_VER}${R}"
        exit 0
    fi

    echo ""
    if [[ -t 0 ]]; then
        printf "  Enter the installed Java version to use ${D}(e.g. 17.0.9)${R}: "
        read CHOICE_JAVA_VER
    else
        echo "  ${Y}⚠${R} Non-interactive: cannot select version, exiting"
        exit 0
    fi
    JAVA_VER="${CHOICE_JAVA_VER}"
    JRE_VERSION=$(echo "${JAVA_VER}" | cut -d. -f1)
    echo "  ${C}·${R} Using Java ${B}${JAVA_VER}${R} (major ${JRE_VERSION})"
fi

echo ""
echo "java:${JAVA_VER}" > "${JAVA_VERSION_FILE}"
echo "  ${G}✓${R} Wrote ${D}${JAVA_VERSION_FILE}${R}"

if [[ -f "${MISE_TOML}" ]]; then
    if grep -qi "java" "${MISE_TOML}"; then
        sed -i 's/^java\s*=.*/java = "'"${JRE_VERSION}"'"/' "${MISE_TOML}"
        echo "  ${G}✓${R} Updated java entry in ${D}${MISE_TOML}${R}"
    else
        echo "" >> "${MISE_TOML}"
        echo "[tools]" >> "${MISE_TOML}"
        echo "java = \"${JRE_VERSION}\"" >> "${MISE_TOML}"
        echo "  ${G}✓${R} Added java entry to ${D}${MISE_TOML}${R}"
    fi
else
    cat > "${MISE_TOML}" <<EOF
[tools]
java = "${JRE_VERSION}"
EOF
    echo "  ${G}✓${R} Created ${D}${MISE_TOML}${R}"
fi

echo ""
echo "${G}==> Java setup complete${R} (version ${B}${JAVA_VER}${R})"
