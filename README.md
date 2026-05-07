# Server Mine

Forge Minecraft server management with shell scripts + systemd + tmux.

## Quick Start

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
