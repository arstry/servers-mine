# Server Mine

Forge Minecraft server management with shell scripts + systemd + tmux.

## Docker

```bash
cp .env.example .env          # set JAVA_VERSION
cp ~/Downloads/pack.zip minecraft/   # exactly one server pack .zip
docker compose up -d --build
docker attach minecraft       # server console (detach: Ctrl-p Ctrl-q)
```

- `minecraft/Dockerfile` unzips the pack in a builder stage and copies it into an
  `eclipse-temurin:${JAVA_VERSION}-jre` image. Change `JAVA_VERSION` and rebuild
  to switch Java.
- `minecraft/args/` is mounted at `/data`. On start, the entrypoint symlinks
  `world/`, `eula.txt`, `user_jvm_args.txt`, `ops.json`, `whitelist.json`,
  `banned-*.json` and `usercache.json` from the server dir to `/data`. Only
  these stay on the host. On first run, any of them shipped in the pack is moved
  into `args/`; after that, the copy in `args/` always wins.
- `server.properties` is generated on every start: the pack's copy, then
  `args/server.properties` (server settings), then `args/world.properties`
  (world generation and gameplay rules), later files winning. Edit those two,
  not the generated file.
- The config files in `args/` are tracked in git; `world/` (the save) and caches
  stay local.
- The server runs as the image's default `ubuntu` user. The container starts as
  root only so `run-as-user.sh` can change that user's ids to `PUID`/`PGID`
  (default 1000), which must own `minecraft/args`.
- Startup order: `START_CMD` if set, then `run.sh nogui` (Forge), then the only
  `*.jar` in the pack (`SERVER_JAR` / `JVM_OPTS` to override). The list of
  persisted files can be changed with `PERSIST`.

## Quick Start (systemd)

### 1. Install Service

```bash
sudo ./setup.sh
```

This will:
- Detect and install the required Java version via mise
- Create/update `.java-version` for local usage
- Install the systemd service to `/etc/systemd/system/server_mine.service`
- Enable and restart the server

The installed service's `WorkingDirectory` is derived from `setup.sh`'s own
location (e.g. `/opt/server-mine/src/modpack`). To use a different base path:

```bash
sudo ./setup.sh /opt/server-mine
sudo BASE_DIR=/home/user/myserver ./setup.sh
```

### 2. Server Access

The server runs in a **tmux** session named `mine-server`:

```bash
tmux attach -t mine-server
```

## Architecture

- **scripts**: Server setup and Java detection in `src/scripts/`
- **service**: systemd unit template in `src/service/`
- **setup.sh**: Main installer — wires Java setup + installs systemd service
- **modpacks**: Deployed separately to `$BASE_DIR/src/modpack/`

## Service Management

```bash
sudo systemctl status server_mine
sudo systemctl restart server_mine
sudo journalctl -u server_mine -f
```
