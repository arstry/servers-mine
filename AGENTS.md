# Server-Mine Agent Guidelines

## Project Overview

**Type**: Forge Minecraft server management infrastructure (shell scripts + systemd + tmux)
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
│       └── server_mine.service        # systemd service template (User/Group/WorkingDirectory are templated)
├── .ai-jail                           # AI sandbox config — restricts agent to `crush` command only
├── .gitignore                         # Ignores server world directories (server-litv3, server-dps)
├── AGENTS.md                          # This file
├── README.md                          # Project documentation
└── setup.sh                           # Main installer: Java detection + service install
```

## Architecture & Flow

### Deployment Lifecycle

1. **`setup.sh`** is the entry point. It:
   - Captures `JAVA_VER` from `detect-java-version.sh` (info goes to stderr, only version on stdout)
   - Calls `src/scripts/setup-mise-java.sh` to detect and install the correct Java version
   - Accepts a configurable `BASE_DIR` via first argument or `BASE_DIR` env var (default: the directory where `setup.sh` lives)
   - Prompts for the service user (defaults to `arstry`)
   - Reads `src/service/server_mine.service` and substitutes `User=`, `Group=`, and `WorkingDirectory=` with the prompted/configured values
   - Installs the rendered service to `/etc/systemd/system/server_mine.service`
   - Runs `systemctl daemon-reload`, `enable`, `restart`

2. **systemd service** (`server_mine.service`) runs as a **forking** type:
   - `ExecStart` creates a **tmux session** named `mine-server` running `mise exec -- ./run.sh`
   - `ExecStop` sends `stop` to the tmux console, then sleeps 20s for graceful shutdown
   - Depends on `tailscaled.service` (requires Tailscale for network access)
   - `WorkingDirectory` at runtime: `$BASE_DIR/src/modpack`

3. **Java setup scripts** (`detect-java-version.sh`, `setup-mise-java.sh`):
   - Use **mise** (not SDKMAN or manual install) for Java version management
   - Detection priority: modpack's `run.sh` → `mise.toml` → installed mise versions → fallback to 17
   - `setup-mise-java.sh` is interactive — prompts before installing; agents should bypass prompts or pre-set JAVA_VER

### Runtime Paths

| Context | Path |
|---------|------|
| Repo sources | `./src/` |
| Default deployment base | where `setup.sh` lives (e.g. `/opt/server-mine/`) |
| Modpack at runtime | `$BASE_DIR/src/modpack/` with `run.sh` |
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
sudo ./setup.sh                                        # defaults to setup.sh's own directory
sudo ./setup.sh /opt/server-mine                       # explicit base path
sudo BASE_DIR=/home/user/myserver ./setup.sh            # via env var
```

### Development / Maintenance

```bash
git log --oneline                           # review change history
df -h                                       # check disk space on deployment host
```

## Git History Context

```
3b47ad0 feat: make setup.sh accept configurable base directory via argument or env var
8c097c2 fix: resolve shell bugs, wrong doc references, and gitignore brace expansion
488c1cb Merge pull request #1 from arstry/refactor/infra
2138a90 feat: update docs
13beefe feat: create scripts to handle server setup
dc9131a refactor: mv .service to src/service
3e8adcc refactor: remove server-dps and server-litv3 modpack files (huge cleanup: ~12000+ files)
5615289 chore: remove useless backups
7e75de8 refactor: ai refactor to decrease size
```

## Bug History (fixed in 8c097c2)

| # | File | Bug |
|---|------|-----|
| 1 | `setup.sh` | Wrong path to scripts dir (`scripts/` → `src/scripts/`) |
| 2 | `setup.sh` | `JAVA_VER` out of scope (set in subshell, never captured) |
| 3 | `detect-java-version.sh` | Info echo on stdout polluted programmatic capture |
| 4 | `setup-mise-java.sh` | Dead if/else — both branches set `JRE_VERSION` identically |
| 5 | `setup-mise-java.sh` | sed pattern used colon syntax (`java:17`) but `mise.toml` uses TOML (`java = "17"`) |
| 6 | `README.md` | Referenced non-existent `install-service.sh` (should be `setup.sh`) |
| 7 | `README.md` | Wrong scripts path (`scripts/` → `src/scripts/`) |
| 8 | `.gitignore` | Brace expansion `{a,b}` silently ignored by git |

## Gotchas & Non-Obvious Patterns

1. **`/opt/server-mine/src/modpack` does not exist in this repo**: It's the **deployment target** on the server. The modpack directory must be placed there separately. This repo only has the scripts and service template.

2. **systemd + tmux pattern is essential**: The service uses `type=forking` with tmux. To interact with the Minecraft console you must `tmux attach -t mine-server`. The `ExecStop` sends `stop` via `tmux send-keys` — this is the only way to cleanly shut down a Minecraft server managed this way.

3. **mise is the Java toolchain**: Not SDKMAN, not apt. `mise exec -- ./run.sh` in the service file means Java is available only within mise's context. Agents modifying Java versions need to update mise config, not system-level Java.

4. **Setup is interactive**: `setup.sh` and `setup-mise-java.sh` both prompt for input (service user, Java install confirmation). Agents running these scripts need to handle or bypass prompts or pre-initialize variables.

5. **No tests, no build system**: Pure shell scripts. No Makefile, no CI config, no test framework. Validate changes by running the scripts or checking their output.

6. **`.ai-jail` restricts agent**: The `.ai-jail` file locks the AI agent to only the `crush` command (no network, no arbitrary file access). Modifications to `.ai-jail` require `ai-jail --clean --init` to regenerate.

7. **`server_mine.service` is fully templated**: `User`, `Group`, and `WorkingDirectory` are all replaced by `setup.sh` during installation. Never edit the template directly for deployment.

8. **Depends on tailscaled**: The service `Requires=tailscaled.service`, meaning the server expects Tailscale networking. The Minecraft server won't start if Tailscale isn't running.

9. **Info messages on stderr**: `detect-java-version.sh` sends its "Detected Java version:" message to stderr, and only the bare version number to stdout. This allows safe capture via `JAVA_VER=$(detect-java-version.sh)`.

## Conventions

- **Shell scripts**: `set -e` at top (fail-fast). `$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)` for script-relative paths.
- **Git commits**: Conventional commits (feat:, fix:, refactor:, chore:). PR merges use "Merge pull request #N from user/branch" style.
- **No code comments in source**: Follow existing pattern — minimal comments, focus on "why" not "what".
