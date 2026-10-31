#!/bin/sh
# Unpack the server pack .zip into a ready-to-run server dir.
# Usage: extract-modpack.sh <dir with the .zip> <output dir (must not exist)>
set -eu

PACK_DIR="${1:?usage: extract-modpack.sh <pack dir> <output dir>}"
OUT_DIR="${2:?usage: extract-modpack.sh <pack dir> <output dir>}"
RAW_DIR="$(mktemp -d)"

echo "==> Extracting server pack"
echo "    Pack dir   : ${PACK_DIR}"
echo "    Output dir : ${OUT_DIR}"

count=$(find "${PACK_DIR}" -maxdepth 1 -name '*.zip' | wc -l)
if [ "${count}" -ne 1 ]; then
    echo "    Error: expected exactly one .zip in minecraft/, found ${count}" >&2
    exit 1
fi

ZIP="$(find "${PACK_DIR}" -maxdepth 1 -name '*.zip')"
echo "    Archive    : $(basename "${ZIP}")"
unzip -q "${ZIP}" -d "${RAW_DIR}"

# Flatten archives that wrap everything in a single top-level folder
top="$(ls -A "${RAW_DIR}")"
if [ "$(echo "${top}" | wc -l)" -eq 1 ] && [ -d "${RAW_DIR}/${top}" ]; then
    mv "${RAW_DIR}/${top}" "${OUT_DIR}"
    rmdir "${RAW_DIR}"
    echo "    Flattened top-level folder: ${top}"
else
    mv "${RAW_DIR}" "${OUT_DIR}"
fi
chmod 755 "${OUT_DIR}"

# Strip CRLF and make run.sh exec java, so the JVM replaces the shell and
# receives SIGTERM directly on `docker stop` (saving the world before exiting)
if [ -f "${OUT_DIR}/run.sh" ]; then
    sed -i -e 's/\r$//' -e 's/^\([[:space:]]*\)java /\1exec java /' "${OUT_DIR}/run.sh"
    echo "    Patched run.sh (CRLF, exec java)"
fi
