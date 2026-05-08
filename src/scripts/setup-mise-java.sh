#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORK_DIR="${SCRIPT_DIR}/../.."
MODPACK_DIR="${WORK_DIR}/src/modpack"
MISE_DIR="${HOME}/.local/share/mise"
JAVA_VERSION_FILE="${WORK_DIR}/.java-version"
MISE_TOML="${WORK_DIR}/mise.toml"

JAVA_VER=$(${SCRIPT_DIR}/detect-java-version.sh)
echo "Setting up Java (${JAVA_VER}) via mise..."

# Extract major version
JRE_VERSION=$(echo "${JAVA_VER}" | cut -d. -f1)

# Ask if user wants to install via "pacman-like" package
if [[ -t 0 ]]; then
    read -p "Install? [y/N] " -n 1 -r
    echo
else
    REPLY="n"
fi
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Skip — Java already set up. Run: mise install java:${JAVA_VER}"
    exit 0
fi

echo "Installing via mise..."
mise install java:${JAVA_VER}
echo "Installed."

# Create/update .java-version file
echo "java:${JAVA_VER}" > "${JAVA_VERSION_FILE}"
echo "Wrote .java-version"

# Update mise.toml to use local Java
if [[ -f "${MISE_TOML}" ]]; then
    if grep -qi "java" "${MISE_TOML}"; then
        sed -i 's/^java\s*=.*/java = "'"${JRE_VERSION}"'"/' "${MISE_TOML}"
    else
        echo "" >> "${MISE_TOML}"
        echo "[tools]" >> "${MISE_TOML}"
        echo "java = \"${JRE_VERSION}\"" >> "${MISE_TOML}"
    fi
    echo "Updated mise.toml"
else
    cat > "${MISE_TOML}" <<EOF
[tools]
java = "${JRE_VERSION}"
EOF
    echo "Created mise.toml"
fi

echo "Done: Java ${JAVA_VER}"
