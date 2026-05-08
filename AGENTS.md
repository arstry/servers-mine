# Server-Mine Agent Guidelines

## Project Overview

**Type**: Forge Minecraft server management infrastructure (shell scripts + systemd + tmux)
**Purpose**: Automate deployment, Java setup, and service management for a Forge 1.20.1 modded Minecraft server
**Java**: Requires **Java 17** (temurin-17 per modpack's mise.toml)
**State**: Modpack (146 mods, configs, KubeJS scripts, world data) present at `src/modpack/` — currently untracked

## File Structure

```
├── setup.sh                              # Main installer: Java detection + service install
├── mise.toml                             # Root mise config: java = "17.0.2"
├── src/
│   ├── scripts/
│   │   ├── detect-java-version.sh        # Detect required Java version from modpack sources
│   │   └── setup-mise-java.sh            # Install Java via mise (prompts interactively)
│   ├── service/
│   │   └── server_mine.service           # systemd service template (User/Group/WorkingDirectory templated)
│   └── modpack/                          # Forge 1.20.1 server (146 mods) — UNTRACKED
│       ├── run.sh                        # Forge launcher script (sh, not bash)
│       ├── user_jvm_args.txt             # JVM args: -Xmx8G -Xms256M -Xmn128M
│       ├── server.properties             # Live server properties (hardcore, online-mode=false)
│       ├── mise.toml                     # java = "temurin-17"
│       ├── mods/                         # 146 mod jars
│       ├── config/                       # Mod configs (Mekanism, Create, AE2, etc.)
│       ├── kubejs/                       # Custom KubeJS scripts (startup/server/client)
│       ├── defaultconfigs/               # Template configs copied on first run
│       │   └── server.properties         # "Desolate Planet" seed config
│       ├── world/                        # Live world data
│       ├── libraries/                    # Forge/Minecraft libraries
│       └── logs/                         # Server log files
├── .ai-jail                              # AI sandbox — restricts agent to `crush` command only
├── .gitignore                            # Ignores server world directories (server-litv3, server-dps)
├── AGENTS.md                             # This file
└── README.md                             # Project documentation
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
   - `ExecStart` creates a **tmux session** named `mine-server` running `/usr/local/bin/mise exec -- ./run.sh`
   - `ExecStop` sends `stop` to the tmux console, then sleeps 20s for graceful shutdown
   - Depends on `tailscaled.service` (requires Tailscale for network access)
   - `WorkingDirectory` at runtime: `$BASE_DIR/src/modpack`

3. **Java setup scripts** (`detect-java-version.sh`, `setup-mise-java.sh`):
   - Use **mise** (not SDKMAN or manual install) for Java version management
   - Detection priority: modpack's `run.sh` → `mise.toml` (repo root) → installed mise versions → fallback to 17
   - `setup-mise-java.sh` is interactive — prompts before installing; agents should bypass prompts or pre-set JAVA_VER

### Modpack Details

- **Forge version**: 1.20.1-47.4.0
- **Mod count**: 146 jars in `src/modpack/mods/`
- **Key mods**: Mekanism, Create (+ addons), Applied Energistics 2, Tinkers' Construct, Ad Astra, EnderIO, PneumaticCraft, BiggerReactors, Quark, ColdSweat, FarmersDelight, SimplyJetpacks 2, HardcoreQuestingMode, Industrial Foregoing
- **Custom scripts**: Extensive KubeJS integration in `kubejs/` — custom items, blocks, recipes, crafting tweaks, tags, JEI hiding, world generation effects
- **Server mode**: Hardcore (`hardcore=true` in server.properties)
- **Online mode**: Disabled (`online-mode=false`) — allows offline/cracked clients
- **RAM**: 8GB max heap (`-Xmx8G`)
- **Port**: 25565
- **Run script**: `run.sh` uses `#!/usr/bin/env sh` (not bash) — it invokes Java directly with `@user_jvm_args.txt` and forge's `unix_args.txt`
- **Default world**: "Desolate Planet" with seed `565388815190879030` (from `defaultconfigs/server.properties`)

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
04f6a1d docs: update README and AGENTS.md with configurable BASE_DIR and bug fix record
3b47ad0 feat: make setup.sh accept configurable base directory via argument or env var
8c097c2 fix: resolve shell bugs, wrong doc references, and gitignore brace expansion
488c1cb Merge pull request #1 from arstry/refactor/infra
2138a90 feat: update docs
13beefe feat: create scripts to handle server setup
dc9131a refactor: mv .service to src/service
3e8adcc refactor: remove modcpak server files
5615289 chore: remove useless backups
7e75de8 refactor: ai refactor to descrease size
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

## Bug History (found & fixed today — not yet committed)

| # | File | Bug | Fix |
|---|------|-----|-----|
| 9 | `detect-java-version.sh` L5 | `WORK_DIR="${SCRIPT_DIR}/../../.."` resolved 3 levels up from `src/scripts/` → went to `/opt` instead of repo root | Changed to `"${SCRIPT_DIR}/../.."` (2 levels up) |
| 10 | `setup-mise-java.sh` L5 | Same path bug — `WORK_DIR="${SCRIPT_DIR}/../../.."` | Changed to `"${SCRIPT_DIR}/../.."` |
| 11 | `detect-java-version.sh` L9 | `echo "Detecting..."` went to stdout, polluting version capture | Added `>&2` redirect |
| 12 | `detect-java-version.sh` L13 | `java` grep on `run.sh` matched Forge version `1.20.1` instead of Java version | Narrowed regex to match `JAVA_VERSION=`, `JAVA_HOME=` patterns only |
| 13 | `detect-java-version.sh` L28 | Warning message on stdout instead of stderr | Added `>&2` redirect |
| 14 | `setup-mise-java.sh` L21 | `read -p` failed under `set -e` in non-interactive mode | Added `[[ -t 0 ]]` guard, defaults to `n` |
| 15 | `setup.sh` L25 | `read -p` for service user failed in non-interactive mode | Added `[[ -t 0 ]]` guard, defaults to `arstry` |

## Gotchas & Non-Obvious Patterns

1. **`src/modpack/` is untracked but present**: The entire modpack directory (~2900 files, 146 mod jars) exists in the working tree but is not tracked by git (shown as `??` in `git status`). It is NOT in `.gitignore` — it was just never committed. The `.gitignore` only ignores the old `server-litv3` and `server-dps` directories. Adding or committing the modpack would be a massive change.

2. **Two mise.toml files with different Java specs**: The repo root `mise.toml` specifies `java = "17.0.2"` while `src/modpack/mise.toml` specifies `java = "temurin-17"`. The service uses `/usr/local/bin/mise exec -- ./run.sh` from the modpack directory, so the modpack's `mise.toml` is what matters at runtime. The root `mise.toml` is used by the setup scripts.

3. **systemd + tmux pattern is essential**: The service uses `type=forking` with tmux. To interact with the Minecraft console you must `tmux attach -t mine-server`. The `ExecStop` sends `stop` via `tmux send-keys` — this is the only way to cleanly shut down a Minecraft server managed this way. `Restart=on-failure` means a clean `stop` exit will NOT restart the service (intended: only restart on crashes).

4. **mise is the Java toolchain**: Not SDKMAN, not apt. `mise exec -- ./run.sh` in the service file means Java is available only within mise's context. The mise binary path is hardcoded as `/usr/local/bin/mise` in the service file — if mise is installed elsewhere the service will fail to start. Agents modifying Java versions need to update mise config, not system-level Java.

5. **Setup is non-interactive-safe**: `setup.sh` and `setup-mise-java.sh` both use `[[ -t 0 ]]` guards around `read -p` prompts. In non-interactive mode, the service user defaults to `arstry` and Java install is skipped. Agents can safely run these scripts without special prompt-handling.

6. **No tests, no build system**: Pure shell scripts. No Makefile, no CI config, no test framework. Validate changes by running the scripts or checking their output.

7. **`.ai-jail` restricts agent**: The `.ai-jail` file locks the AI agent to only the `crush` command (no network, no arbitrary file access). Modifications to `.ai-jail` require `ai-jail --clean --init` to regenerate.

8. **`server_mine.service` is fully templated**: `User`, `Group`, and `WorkingDirectory` are all replaced by `setup.sh` during installation. Never edit the template directly for deployment.

9. **Depends on tailscaled**: The service `Requires=tailscaled.service`, meaning the server expects Tailscale networking. The Minecraft server won't start if Tailscale isn't running.

10. **All info messages on stderr**: `detect-java-version.sh` sends ALL informational messages to stderr (`>&2`), and only the bare version number to stdout. This allows safe capture via `JAVA_VER=$(detect-java-version.sh)` with no pollution risk.

11. **Redundant Java detection**: `setup.sh` captures `JAVA_VER` from `detect-java-version.sh` but only uses it for display; `setup-mise-java.sh` then calls `detect-java-version.sh` again internally. If you want to pre-set a Java version, override `JAVA_VER` in `setup-mise-java.sh` at line 14 (before it re-calls the detection script).

12. **Path resolution is positional**: Both `detect-java-version.sh` and `setup-mise-java.sh` resolve `WORK_DIR` as `SCRIPT_DIR/../..` (2 levels up from `src/scripts/` to reach the repo root). Moving either script will break path resolution.

13. **Two different version formats coexist**: `.java-version` stores the full version string (e.g., `java:17.0.9`), while `mise.toml` stores only the major version (e.g., `java = "17"`). Both are written by `setup-mise-java.sh` and must stay in sync; updating one without the other causes version drift.

14. **Modpack's `run.sh` is sh, not bash**: The Forge launcher at `src/modpack/run.sh` uses `#!/usr/bin/env sh`. It calls `java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.4.0/unix_args.txt "$@"`.

15. **KubeJS is a major customization layer**: `src/modpack/kubejs/` contains extensive custom server/client/startup scripts that define custom items, blocks, recipes, tags, JEI hiding, world effects, and more. Modifications to mod behavior often go through KubeJS rather than mod configs. Many `.disabled` suffix files exist for features that were turned off.

16. **Hardcore mode enabled**: The server runs in hardcore mode (`hardcore=true`). Players are permanently banned on death (via `banned-players.json`). This cannot be changed after world creation without external tools.

17. **`server.properties` vs `defaultconfigs/server.properties`**: The live config is at `src/modpack/server.properties`. The `defaultconfigs/server.properties` contains the "canonical" Desolate Planet seed config — these are template values that get copied when the world is first created, but the live file may diverge.

18. **Crash reports stored in repo**: `src/modpack/crash-reports/` contains 10 crash logs from April-May 2026. These are needed for debugging server issues.

## Conventions

- **Shell scripts**: `set -e` at top (fail-fast). `$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)` for script-relative paths.
- **Git commits**: Conventional commits (feat:, fix:, refactor:, chore:). PR merges use "Merge pull request #N from user/branch" style.
- **No code comments in source**: Follow existing pattern — minimal comments, focus on "why" not "what".
