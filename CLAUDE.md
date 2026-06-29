# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Forge Minecraft server management infrastructure — shell scripts + systemd + tmux. No build system, no tests, no CI. All validation is done by running the scripts directly.

**Target**: Forge 1.20.1 (`1.20.1-47.4.0`), requires **Java 17**. Java is managed via **mise** (not apt, not SDKMAN).

## Key Commands

### Installation

```bash
sudo ./setup.sh                            # install service, defaults to setup.sh's directory as BASE_DIR
sudo ./setup.sh /opt/server-mine           # explicit base path
sudo BASE_DIR=/home/user/server ./setup.sh  # via env var
```

`setup.sh` is interactive — it prompts for the service user (default: `arstry`) and Java install confirmation.

### Service Management

```bash
sudo systemctl status server_mine
sudo systemctl restart server_mine
sudo journalctl -u server_mine -f
tmux attach -t mine-server                 # attach to Minecraft console (the only console access)
```

## Architecture

### Deployment Flow

`setup.sh` is the single entry point. It:
1. Calls `src/scripts/detect-java-version.sh` to determine required Java version (info → stderr, bare version → stdout for capture)
2. Calls `src/scripts/setup-mise-java.sh` to install/select that Java via mise
3. Reads `src/service/server_mine.service` and substitutes `User=`, `Group=`, and `WorkingDirectory=` using sed, then installs to `/etc/systemd/system/`
4. Runs `systemctl daemon-reload && enable && restart`

### Runtime

The systemd service is `Type=forking`. It starts a **tmux session** named `mine-server` running `mise exec -- ./run.sh` — so Java is only available within mise's context. `ExecStop` sends `stop` via `tmux send-keys` for graceful Minecraft shutdown, then waits 20s. `Restart=on-failure` means a clean `stop` does **not** restart the service.

### Runtime Paths

| Context | Path |
|---------|------|
| Repo sources | `./src/` |
| Default deployment base | where `setup.sh` lives |
| Modpack at runtime | `$BASE_DIR/src/modpack/` (contains `run.sh`) |
| Installed service | `/etc/systemd/system/server_mine.service` |
| mise Java installs | `~/.local/share/mise/installs/` |
| mise binary (hardcoded in service) | `/usr/local/bin/mise` |

## Non-Obvious Gotchas

1. **`src/modpack/` is the deployment target, not the full repo**: `run.sh`, `user_jvm_args.txt`, and the modpack must be placed separately — this repo only provides scripts and the service template.

2. **Service template is fully templated**: `User`, `Group`, and `WorkingDirectory` in `src/service/server_mine.service` are placeholder values replaced by `setup.sh` at install time. Never edit them directly for deployment.

3. **mise binary hardcoded**: The service file references `/usr/local/bin/mise`. If mise is installed elsewhere, the service fails silently at start.

4. **Script path resolution is positional**: Both scripts resolve `WORK_DIR` as `SCRIPT_DIR/../..`. Moving either script out of `src/scripts/` breaks all path resolution.

5. **Two version formats must stay in sync**: `.java-version` stores `java:17.0.9`; `mise.toml` stores `java = "17"`. Both are written by `setup-mise-java.sh` and must match.

6. **Redundant detection**: `setup.sh` captures `JAVA_VER` from `detect-java-version.sh` for display only. `setup-mise-java.sh` re-runs detection internally. To pre-set Java version for non-interactive runs, override `JAVA_VER` in `setup-mise-java.sh` before its detection call at line 13.

7. **Tailscale dependency**: The service `Requires=tailscaled.service`. The server won't start without Tailscale running.

8. **Non-interactive mode**: `setup.sh` and `setup-mise-java.sh` detect `[[ -t 0 ]]` to skip prompts. In non-interactive contexts, Java install defaults to skipped and service user defaults to `arstry`.

## Conventions

- Shell: `set -e` at top; `$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)` for script-relative paths
- Git commits: conventional commits (`feat:`, `fix:`, `refactor:`, `chore:`)
- Comments: only when the "why" is non-obvious; no inline narration of what code does
