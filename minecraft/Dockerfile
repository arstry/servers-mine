ARG JAVA_VERSION=17

FROM alpine:3.20 AS builder

RUN apk add --no-cache unzip
COPY --chmod=755 scripts/extract-modpack.sh /usr/local/bin/
COPY *.zip /tmp/pack/

RUN extract-modpack.sh /tmp/pack /server

# ── Stage 2: runtime ──
FROM eclipse-temurin:${JAVA_VERSION}-jre

RUN install -d -o ubuntu -g ubuntu /data

COPY --from=builder --chown=ubuntu:ubuntu /server /opt/minecraft/server
COPY --chmod=755 entrypoint.sh scripts/run-as-user.sh scripts/link-data.sh scripts/build-properties.sh /usr/local/bin/

ENV SERVER_DIR=/opt/minecraft/server \
    DATA_DIR=/data

WORKDIR /opt/minecraft/server

VOLUME /data
EXPOSE 25565

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
