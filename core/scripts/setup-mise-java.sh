#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORK_DIR="$(cd "${SCRIPT_DIR}/../.." && pwd)"
MODPACK_DIR="${WORK_DIR}/src/modpack"
MISE_DIR="${HOME}/.local/share/mise"
JAVA_VERSION_FILE="${WORK_DIR}/.java-version"
MISE_TOML="${WORK_DIR}/mise.toml"

echo "==> Setting up Java via mise"

JAVA_VER=$(${SCRIPT_DIR}/detect-java-version.sh)
echo "    Full version   : ${JAVA_VER}"

# Extract major version
JRE_VERSION=$(echo "${JAVA_VER}" | cut -d. -f1)
echo "    Major version  : ${JRE_VERSION}"

# Ask if user wants to install the detected version
if [[ -t 0 ]]; then
    read -p "    Install Java ${JAVA_VER} now? [y/N] " -n 1 -r
    echo
else
    REPLY="n"
fi

if [[ $REPLY =~ ^[Yy]$ ]]; then
    # Option A: Install the detected version
    echo "    Running: mise install java@${JAVA_VER}"
    mise install java@${JAVA_VER}
    echo "    Java ${JAVA_VER} installed successfully"
else
    # Option B: User skipped — show installed versions, offer to pick one
    echo "    Skipped installation."
    echo ""
    echo "    Installed Java versions via mise:"
    mise ls java 2>/dev/null | while IFS= read -r line; do
        echo "      ${line}"
    done
    echo ""

    if [[ -t 0 ]]; then
        read -p "    Use an installed version instead? [y/N] " -n 1 -r
        echo
    else
        REPLY="n"
    fi

    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "    To install manually, run: mise install java@${JAVA_VER}"
        exit 0
    fi

    echo ""
    if [[ -t 0 ]]; then
        read -p "    Enter the installed Java version to use (e.g. 17.0.9): " CHOICE_JAVA_VER
    else
        echo "    Non-interactive: cannot select version, exiting"
        exit 0
    fi
    JAVA_VER="${CHOICE_JAVA_VER}"
    JRE_VERSION=$(echo "${JAVA_VER}" | cut -d. -f1)
    echo "    Using Java ${JAVA_VER} (major ${JRE_VERSION})"
fi

# Create/update .java-version file
echo "java:${JAVA_VER}" > "${JAVA_VERSION_FILE}"
echo "    Wrote ${JAVA_VERSION_FILE}"

# Update mise.toml to use local Java
if [[ -f "${MISE_TOML}" ]]; then
    if grep -qi "java" "${MISE_TOML}"; then
        sed -i 's/^java\s*=.*/java = "'"${JRE_VERSION}"'"/' "${MISE_TOML}"
        echo "    Updated java entry in ${MISE_TOML}"
    else
        echo "" >> "${MISE_TOML}"
        echo "[tools]" >> "${MISE_TOML}"
        echo "java = \"${JRE_VERSION}\"" >> "${MISE_TOML}"
        echo "    Added java entry to ${MISE_TOML}"
    fi
    echo "    Updated ${MISE_TOML}"
else
    cat > "${MISE_TOML}" <<EOF
[tools]
java = "${JRE_VERSION}"
EOF
    echo "    Created ${MISE_TOML} with java = \"${JRE_VERSION}\""
fi

echo "==> Java setup complete (version ${JAVA_VER})"
