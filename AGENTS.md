# Server-Mine Agent Guidelines

## Server Environment
- **Type**: Forge Minecraft Server (1.19.2/1.20.1)
- **Location**: `/home/arst/temp-use/server-mine/`
- **Main Worlds**: `server-dps/`, `server-litv3/`

## Installed Components
- **Core Loaders**: Forge, KubeJS, ModernFix
- **Key Mods**: Create, MineColonies, Alex's Mobs, Jade, Farmer's Delight, Theurgy
- **Performance Mods**: FastSuite, FastWorkbench, Lithium-style

## Configuration Paths
| Directory | Purpose |
|-----------|---------|
| `config/` | Server-side mod configurations |
| `worlds/` | World data and player profiles |
| `serverconfigs/` | World-specific configurations |
| `mods/` | Mod JAR files |
| `crash-reports/` | Crash reports (see below) |

## Known Issues
- **Recent Crashes**: April 10, 2026 00:02:56 and 00:13:02
  - Reports in `/crash-reports/crash-2026-04-10_*.txt`
  - Action: Analyze crash logs before deployment

## Data Management
- **MineColonies Backups**: 5000+ `.zip` files in `/world/minecolonies/`
- **Registered Players**: 8 account UUIDs in `server-dps/` and `server-litv3/`
- **Recommended**: Implement log/backup rotation policy

## Maintenance Commands
```bash
# Server restart
systemctl restart server_mine

# Check logs
tail -f /home/arst/temp-use/server-mine/logs/latest.log

# Review crash reports
ls -t crash-reports/*.txt | head -5

# Backup world directory
tar -czf backup-$(date +%Y%m%d-%H%M).tar.gz server-dps/
```

## Action Priorities
1. Review crash reports from April 10
2. Clean up accumulated MineColonies backups
3. Verify config consistency between `config/` and `worlds/*/config/`
4. Monitor disk usage for log rotation
