# Server-Mine Agent Guidelines

## Project Overview

**Type**: Forge Minecraft server management infrastructure (shell scripts + systemd)
**Purpose**: Automate deployment, Java setup, and service management for Forge modded Minecraft servers
**Java**: Forge 1.19.2/1.20.1 servers require **Java 17**
**State**: Server data stripped — this repo now contains only the provisioning/infrastructure layer

## File Structure

```
├── src/
│   ├── scripts/
│   │   ├── detect-java-version.sh     # Detect required Java version from modpack run.sh
│   │   └── setup-mise-java.sh         # Install Java via mise (prompts interactively)
│   └── service/
│       └── server_mine.service        # systemd service template (see setup.sh for how User/Group is templated)
├── .ai-jail                           # AI sandbox config — restricts agent to `crush` command only
├── .gitignore                         # Ignores server world directories (server-litv3, server-dps)
├── AGENTS.md                          # This file
├── README.md                          # Project documentation
└── setup.sh                           # Main installer: wires setup-mise-java + installs systemd service
```

## Architecture & Flow

### Deployment Lifecycle

1. **`setup.sh`** is the entry point. It:
   - Calls `src/scripts/setup-mise-java.sh` to detect and install the correct Java version
   - Prompts for the service user (defaults to `arstry`)
   - Reads `src/service/server_mine.service` and substitutes `User=` / `Group=` with the prompted user
   - Installs the rendered service to `/etc/systemd/system/server_mine.service`
   - Runs `systemctl daemon-reload`, `enable`, `restart`

2. **systemd service** (`server_mine.service`) runs as a **forking** type:
   - `ExecStart` creates a **tmux session** named `mine-server` running `mise exec -- ./run.sh`
   - `ExecStop` sends `stop` to the tmux console, then sleeps 20s for graceful shutdown
   - Depends on `tailscaled.service` (requires Tailscale for network access)
   - Working directory at runtime: `/opt/server-mine/src/modpack`

3. **Java setup scripts** (`detect-java-version.sh`, `setup-mise-java.sh`):
   - Use **mise** (not SDKMAN or manual install) for Java version management
   - Detection priority: modpack's `run.sh` → `mise.toml` → installed mise versions → fallback to 17
   - `setup-mise-java.sh` is interactive — prompts before installing; agents should bypass prompts or pre-set JAVA_VER

### Runtime Paths

| Context | Path |
|---------|------|
| Repo sources | `./src/` |
| Deployment target | `/opt/server-mine/` |
| Modpack at runtime | `/opt/server-mine/src/modpack/` with `run.sh` |
| systemd service | `/etc/systemd/system/server_mine.service` |
| Java versions (mise) | `~/.local/share/mise/installs/` |

## Essential Commands

### Server Management (on deployment host)

```bash
sudo systemctl status server_mine           # check service status
sudo systemctl restart server_mine          # restart server
sudo journalctl -u server_mine -f           # follow server logs
tmux attach -t mine-server                  # attach to Minecraft console
```

### Service (re)Installation

```bash
sudo ./setup.sh                             # install/update service (prompts for user)
```

**Gotcha**: `README.md` says `./install-service.sh` but the actual script is **`setup.sh`**.

### Development / Maintenance

```bash
git log --oneline                           # review change history
df -h /opt/server-mine                      # check disk space on deployment host
```

## Git History Context

```
488c1cb Merge: refactor/infra → master
2138a90 feat: update docs
13beefe feat: create scripts to handle server setup
dc9131a refactor: mv .service to src/service
3e8adcc refactor: remove server-dps and server-litv3 modpack files (huge cleanup: ~12000+ files)
5615289 chore: remove useless backups
7e75de8 refactor: ai refactor to decrease size
b55da89 feat: update AGENTS.md
6fe4f90 feat: add server maintenance documentation and agent config
f30bf96 feat: create service to handle server autoexec
b3a4be4 feat: add modpack Life In The Village 3
5bbbcd9 feat: add modpack Desolate Planet Survival
4c82641 Initial commit
```

The repo originally contained full modpack server directories (`server-dps/`, `server-litv3/`) with world data, configs, mods, etc. These were removed in commit `3e8adcc` (~12400+ files) and `5615289` (~5000 backup zips). What remains is the infrastructure layer only.

## Gotchas & Non-Obvious Patterns

1. **README has wrong script name**: Doc references `./install-service.sh`, the real installer is `setup.sh`.

2. **`/opt/server-mine/src/modpack` does not exist in this repo**: It's the **deployment target** on the server. The modpack directory must be placed there separately. This repo only has the scripts and service template.

3. **systemd + tmux pattern is essential**: The service uses `type=forking` with tmux. To interact with the Minecraft console you must `tmux attach -t mine-server`. The `ExecStop` sends `stop` via `tmux send-keys` — this is the only way to cleanly shut down a Minecraft server managed this way.

4. **mise is the Java toolchain**: Not SDKMAN, not apt. `mise exec -- ./run.sh` in the service file means Java is available only within mise's context. Agents modifying Java versions need to update mise config, not system-level Java.

5. **Setup is interactive**: `setup.sh` and `setup-mise-java.sh` both prompt for input (service user, Java install confirmation). Agents running these scripts need to handle or bypass prompts or pre-initialize variables.

6. **No tests, no build system**: Pure shell scripts. No Makefile, no CI config, no test framework. Validate changes by running the scripts or checking their output.

7. **`.ai-jail` restricts agent**: The `.ai-jail` file locks the AI agent to only the `crush` command (no network, no arbitrary file access). Modifications to `.ai-jail` require `ai-jail --clean --init` to regenerate.

8. **`server_mine.service` User/Group is templated**: The file has `User=arstry` / `Group=arstry` as defaults, but `setup.sh` uses `sed` to replace them during installation. Never edit this directly for deployment — use setup.sh.

9. **Depends on tailscaled**: The service `Requires=tailscaled.service`, meaning the server expects Tailscale networking. The Minecraft server won't start if Tailscale isn't running.

## Conventions

- **Shell scripts**: `set -e` at top (fail-fast). `$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)` for script-relative paths.
- **Git commits**: Conventional commits (feat:, refactor:, chore:). PR merges use "Merge pull request #N from user/branch" style.
- **No code comments in source**: Follow existing pattern — minimal comments, focus on "why" not "what".
