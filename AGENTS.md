# Server-Mine Agent Guidelines

## Server Environment
- **Type**: Forge Minecraft Server (1.19.2/1.20.1)
- **Working Directory**: `/home/arst/temp-use/server-mine/`
- **Main Worlds**: None (worlds removed in recent refactor)
- **Disk Status**: 92% disk usage (405GB used / 468G total) - monitor closely
- **Service User**: Configurable at setup (defaults to `arstry`)

## Git History
Latest commits:
```
3e8adcc refactor: remove modcpak server files
5615289 chore: remove useless backups
7e75de8 refactor: ai refactor to descrease size
b55da89 feat: update AGENTS.md
6fe4f90 feat: add server maintenance documentation and agent config
```

## Disk Space Management (High Priority)
**Action**: Continue managing disk space - world directories (`server-dps/`, `server-litv3/`) have been removed.

Current actions taken:
1. Removed modpack world directories
2. Cleaned up backup archives (~5000+ .zip files)
3. Removed unused config files

**Remaining Actions**:
1. Delete old crash reports: `rm -f crash-reports/*.txt`
2. Implement log rotation for `logs/` directory
3. Consider offboarding older snapshots

## Active Services
No server instances currently active.

## File Structure
- `server_mine.service` - Systemd service for autoexec (templates in `src/service/`)
- `mise.toml` - mise/rust toolchain configuration
- `.gitignore` - Git ignore rules
- `src/` - Application source code
- `setup.sh` - Installation script (prompts for service user)
- `README.md` - Project documentation

## Maintenance Commands
```bash
# View current directory structure
ls -la /home/arst/temp-use/server-mine/
du -sh * --max-depth=1

# Review git changes
git log --oneline
git status
git diff HEAD~5

# Check disk usage
df -h /home/arst/temp-use/server-mine

# Clean up crash reports
rm -f crash-reports/*.txt

# Implement log rotation
logrotate -f /etc/logrotate.conf logs/latest.log
```

## Server Logs
- **Log location**: `logs/latest.log` (via Tail command in `server_mine.service`)
- **Crash reports**: `crash-reports/` directory (if crash-4.10.26 reports exist)

## Data Management
- **MineColonies Backups**: ~5000+ `.zip` files removed
- **Player Data**: World data removed
- **Next Steps**: Consider recreating worlds if server restart required

## Action Priorities
1. **Immediate**: Address disk space (<95GB free)
2. Clean accumulated logs and crash reports
3. Implement rotation policy for:
   - Server logs (`logs/latest.log`)
   - Crash reports (`crash-reports/`)
4. Monitor disk usage trends

## Known Issues
- No active issue reports from recent crashes
- Disk space is the current critical bottleneck
- World data removed - servers not operational

## Next Session Context
- Latest state: 3e8adcc - Major cleanup committed
- Server instances removed from repository
- Disk space reduction in progress
- Systemd services exist but no active worlds
