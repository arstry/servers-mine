#!/usr/bin/env bash
# Build the server.properties the server reads by merging, in order of precedence:
# the pack's own server.properties < server.properties < world.properties (data volume)
set -euo pipefail

SERVER_DIR="${SERVER_DIR:-/opt/minecraft/server}"
DATA_DIR="${DATA_DIR:-/data}"
TARGET="${SERVER_DIR}/server.properties"
PACK_DEFAULTS="${SERVER_DIR}/server.properties.pack"

echo "==> Building server.properties"

# Keep the pack's copy aside once, so every start merges from the same base
if [[ -f "${TARGET}" && ! -L "${TARGET}" && ! -e "${PACK_DEFAULTS}" ]]; then
    mv "${TARGET}" "${PACK_DEFAULTS}"
fi

sources=()
for file in "${PACK_DEFAULTS}" "${DATA_DIR}/server.properties" "${DATA_DIR}/world.properties"; do
    if [[ -f "${file}" ]]; then
        sources+=("${file}")
        echo "    + ${file}"
    fi
done

if [[ ${#sources[@]} -eq 0 ]]; then
    echo "    No properties found, the server will generate its defaults"
    exit 0
fi

rm -f "${TARGET}"

# Later files override earlier ones; keys keep their first-seen order
{
    echo "# Generated on container start from: ${sources[*]}"
    echo "# Edit those files instead, changes here are lost on restart"
    awk '
        /^[[:space:]]*([#!]|$)/ { next }
        {
            i = index($0, "=")
            if (!i) next
            key = substr($0, 1, i - 1)
            if (!(key in value)) order[++n] = key
            value[key] = substr($0, i + 1)
        }
        END { for (k = 1; k <= n; k++) print order[k] "=" value[order[k]] }
    ' "${sources[@]}"
} > "${TARGET}"

echo "    Wrote ${TARGET}"
