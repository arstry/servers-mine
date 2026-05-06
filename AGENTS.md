# Server-Mine Agent Guidelines

## Server Environment
- **Type**: Forge Minecraft Server (1.19.2/1.20.1)
- **Working Directory**: `/home/arst/temp-use/server-mine/`
- **Main Worlds**: 
  - `server-dps/` (~500MB, "Desolate Planet Survival" modpack)
  - `server-litv3/` (~2.2GB, "Life In The Village 3" modpack)
- **Disk Status**: 92% disk usage (405GB used / 468G total) - monitor closely

## Git History
Latest commits:
```
6fe4f90 feat: add server maintenance documentation and agent config
f30bf96 feat: create service to handle server autoexec
b3a4be4 feat: add modpack Life In The Village 3
5bbbcd9 feat: add modpack Desolate Planet Survival
bf3386e chore: add the worlds to .gitignore
4c82641 Initial commit
```

## Active Services
```bash
systemctl status server_mine      # Main service
systemctl status server-dps       # DPS server instance
```

## File Structure
- `server-dps/` - Desolate Planet Survival world data
- `server-litv3/` - Life In The Village 3 world data
- `server_mine.service` - Systemd service for autoexec
- `server-dps.service` - Systemd service for DPS world
- `mise.toml` - mise/rust toolchain configuration
- `.gitignore` - Git ignore rules

## Maintenance Commands
```bash
# Server restart
systemctl restart server_mine

# Check server status
systemctl status server_mine

# View server logs
journalctl -u server_mine -f
tail -f logs/latest.log

# Check disk usage
df -h /home/arst/temp-use/server-mine
du -sh * --max-depth=1

# Review git changes
git log --oneline
git status
```

## Disk Space Management (High Priority)
Current disk usage at 92% - critical. Actions:
1. Delete old crash reports: `rm -f crash-reports/*.txt`
2. Archive and compress large world directories
3. Implement log rotation for `logs/` directory
4. Consider offboarding older world snapshots

## Server Logs
- **Log location**: `logs/latest.log` (via Tail command in `server_mine.service`)
- **Crash reports**: `crash-reports/` directory (if crash-4.10.26 reports exist)

## Data Management
- **MineColonies Backups**: 5000+ `.zip` files may accumulate in world directories
- **Player Data**: Stored in world folders
- **Recommended**: Implement automated rotation for backups/logs

## Action Priorities
1. **Immediate**: Address disk space (<50GB free)
2. Clean up accumulated logs and backups
3. Implement rotation policy for:
   - Server logs (`logs/latest.log`)
   - Crash reports (`crash-reports/`)
   - MineColonies backups (if active)
4. Monitor for new crashes or performance issues

## Known Issues
- No active issue reports from recent crashes
- Disk space is the current critical bottleneck

## Next Session Context
- Latest state: 6fe4f90 - Documentation and agent config added
- Both server instances deployed but disk space critical
- No additional mod configurations or crash patterns identified yet
- Systemd services handle auto-start functionality
