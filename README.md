# Server Mine

Forge Minecraft server management with mise/rust.

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

### 2. Server Access

The server runs from `/opt/server-mine/src/modpack` with `run.sh` located there.

## Architecture

- **modpacks**: Stored in `src/modpack/`
- **service**: Service configuration in `src/service/`
- **scripts**: Automated scripts in `src/scripts/`

## Service Management

```bash
sudo systemctl status server_mine
sudo systemctl restart server_mine
sudo journalctl -u server_mine -f
```
