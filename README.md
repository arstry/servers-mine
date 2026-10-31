# Server Mine

Forge Minecraft server in Docker. The modpack's server `.zip` is baked into the
image, and only the server configs and the world live on the host, in
`minecraft/args/`.

## Quick Start

```bash
cp .env.example .env                  # set JAVA_VERSION for the modpack
cp ~/Downloads/pack.zip minecraft/    # exactly one server pack .zip
docker compose up -d --build
docker attach minecraft               # server console (detach: Ctrl-p Ctrl-q)
```

The `.zip` must be a ready-to-run server pack (with Forge's `run.sh` or a server
jar), not a Forge installer.

## Configuration

`.env` (see `.env.example`):

| Variable       | Default | Description                                         |
|----------------|---------|-----------------------------------------------------|
| `JAVA_VERSION` | `17`    | `eclipse-temurin` tag of the image; rebuild to apply |
| `MC_PORT`      | `25565` | Host port mapped to the server                      |
| `PUID`/`PGID`  | `1000`  | Ids the server runs with; must own `minecraft/args` |

Optional entrypoint overrides, added under `environment` in
`docker-compose.yml`:

| Variable     | Description                                                  |
|--------------|--------------------------------------------------------------|
| `START_CMD`  | Command that starts the server, e.g. `sh ./startserver.sh`   |
| `SERVER_JAR` | Jar to run when the pack has no `run.sh`                     |
| `JVM_OPTS`   | JVM flags for `SERVER_JAR` (default `-Xms1G -Xmx4G`)         |
| `PERSIST`    | Files/dirs linked into `minecraft/args` (trailing `/` = dir) |

Server settings go in `minecraft/args/server.properties`, world settings
(generation and gameplay rules) in `minecraft/args/world.properties`, and memory
for Forge packs in `minecraft/args/user_jvm_args.txt`.

## How It Works

- **Build:** `minecraft/Dockerfile` unzips the pack in an Alpine builder stage
  (`scripts/extract-modpack.sh`) and copies it into an
  `eclipse-temurin:${JAVA_VERSION}-jre` image.
- **User:** the server runs as the image's default `ubuntu` user. The container
  starts as root only so `scripts/run-as-user.sh` can change that user's ids to
  `PUID`/`PGID`.
- **Data:** `minecraft/args/` is mounted at `/data`. `scripts/link-data.sh`
  symlinks `world/`, `eula.txt`, `user_jvm_args.txt`, `ops.json`,
  `whitelist.json`, `banned-*.json` and `usercache.json` from the server dir to
  it. On first run, any of them shipped in the pack is moved into `args/`; after
  that, the copy in `args/` always wins.
- **Properties:** `scripts/build-properties.sh` generates `server.properties` on
  every start from the pack's copy, then `args/server.properties`, then
  `args/world.properties`, later files winning. Edit those two, not the
  generated file.
- **Start:** `START_CMD` if set, then `run.sh nogui` (Forge), then the only
  `*.jar` in the pack. `run.sh` is patched at build time to `exec java`, so
  `docker stop` reaches the JVM and the world is saved before it exits.

The config files in `args/` are tracked in git; `world/` (the save) and caches
stay local.

## Layout

```
├── docker-compose.yml            # Service definition, mounts minecraft/args
├── .env.example                  # Java version, port, user ids
└── minecraft/
    ├── Dockerfile                # Builder (unzip) + runtime (temurin) stages
    ├── entrypoint.sh             # Prepares user, data and properties, then starts
    ├── scripts/
    │   ├── extract-modpack.sh    # Build: unzip and flatten the pack, patch run.sh
    │   ├── run-as-user.sh        # Align ubuntu with PUID/PGID, drop root
    │   ├── link-data.sh          # Symlink persistent files into /data
    │   └── build-properties.sh   # Merge server.properties + world.properties
    ├── args/                     # Mounted at /data: configs (tracked) + world (local)
    └── *.zip                     # Server pack (ignored by git)
```

## Management

```bash
docker compose ps                 # status
docker compose logs -f            # follow server logs
docker compose restart            # restart the server
docker compose down               # stop (world is saved on SIGTERM)
docker compose up -d --build      # rebuild after changing the zip or JAVA_VERSION
docker attach minecraft           # console; type `stop` for the safest shutdown
```
