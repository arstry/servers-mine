var maxNPCs = 1
var spawnChance = 0.35

EntityEvents.spawned(event => {
    const { entity } = event
    if (entity.type == "customnpcs:customnpc")
    {
        entity.mergeNbt(`{StartPosNew:[I;${Math.floor(entity.x)},${Math.floor(entity.y)},${Math.floor(entity.z)}]}`)
    }
});

function registerNewSurvivorLocation(sourcePosition)
{
	if (!Utils.server.persistentData.survivorLocations)
	{
		Utils.server.persistentData.survivorLocations = []
	}
	let fullLocation = { x: sourcePosition.x(), y: sourcePosition.y(), z: sourcePosition.z() }
	Utils.server.persistentData.survivorLocations.push(fullLocation)
}

ServerEvents.commandRegistry(event => { //command registry event
    const { commands: Commands, arguments: Arguments } = event;

	event.register(
        Commands.literal("spawnGrampsBartleyNPC")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			const sourcePosition = ctx.source.position
			const x = Math.floor(sourcePosition.x());
            const y = Math.floor(sourcePosition.y()) + 1;
            const z = Math.floor(sourcePosition.z());

			if (!Utils.server.persistentData.gramps)
			{
				Utils.server.persistentData.gramps = 0
			}
			if (Utils.server.persistentData.gramps >= maxNPCs)
			{
				let randomSpawnChance = Math.random(); 
				if (randomSpawnChance > spawnChance)
				{
					Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
					return 1;
				}
			}
			registerNewSurvivorLocation(sourcePosition)
			Utils.server.persistentData.gramps++
			Utils.server.runCommandSilent(`noppes clone spawn GrampsBartley 2 ${x} ${y} ${z}`)
			Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
			return 1
		})
    )

	event.register(
        Commands.literal("spawnEmilyCarterNPC")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			const sourcePosition = ctx.source.position
			const x = Math.floor(sourcePosition.x());
            const y = Math.floor(sourcePosition.y()) + 1;
            const z = Math.floor(sourcePosition.z());

			if (!Utils.server.persistentData.emily) {
				Utils.server.persistentData.emily = 0
			}
			if (Utils.server.persistentData.emily >= maxNPCs) {
				let randomSpawnChance = Math.random(); 
				if (randomSpawnChance > spawnChance)
				{
					Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
					return 1;
				}
			}
			registerNewSurvivorLocation(sourcePosition)
			Utils.server.persistentData.emily++
			Utils.server.runCommandSilent(`noppes clone spawn EmilyCarter 2 ${x} ${y} ${z}`)
			Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
			return 1
		})
    )

    event.register(
        Commands.literal("spawnTybergheinNPC")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			const sourcePosition = ctx.source.position
			const x = Math.floor(sourcePosition.x());
            const y = Math.floor(sourcePosition.y()) + 1;
            const z = Math.floor(sourcePosition.z());

			if (!Utils.server.persistentData.doctor)
			{
				Utils.server.persistentData.doctor = 0
			}
			if (Utils.server.persistentData.doctor >= maxNPCs)
			{
				let randomSpawnChance = Math.random(); 
				if (randomSpawnChance > spawnChance)
				{
					Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
					return 1;
				}
			}
			registerNewSurvivorLocation(sourcePosition)
			Utils.server.persistentData.doctor++
			Utils.server.runCommandSilent(`noppes clone spawn Dr.Tyberghein 2 ${x} ${y} ${z}`)
			Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
			return 1
		})
    )

    event.register(
        Commands.literal("spawnChuckNPC")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			const sourcePosition = ctx.source.position
			const x = Math.floor(sourcePosition.x());
            const y = Math.floor(sourcePosition.y()) + 1;
            const z = Math.floor(sourcePosition.z());

			if (!Utils.server.persistentData.chuck)
			{
				Utils.server.persistentData.chuck = 0
			}
			if (Utils.server.persistentData.chuck >= maxNPCs)
			{
				let randomSpawnChance = Math.random(); 
				if (randomSpawnChance > spawnChance)
				{
					Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
					return 1;
				}
			}

			registerNewSurvivorLocation(sourcePosition)
			Utils.server.persistentData.chuck++
			Utils.server.runCommandSilent(`noppes clone spawn Mr.Chuck 2 ${x} ${y} ${z}`)
			Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
			return 1
		})
    )

	event.register(
        Commands.literal("spawnCharlieNPC")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			const sourcePosition = ctx.source.position
			const x = Math.floor(sourcePosition.x());
            const y = Math.floor(sourcePosition.y()) + 1;
            const z = Math.floor(sourcePosition.z());

			if (!Utils.server.persistentData.charlie)
			{
				Utils.server.persistentData.charlie = 0
			}
			if (Utils.server.persistentData.charlie >= maxNPCs)
			{
				let randomSpawnChance = Math.random(); 
				if (randomSpawnChance > spawnChance)
				{
					Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
					return 1;
				}
			}
			registerNewSurvivorLocation(sourcePosition)
			Utils.server.persistentData.charlie++
			Utils.server.runCommandSilent(`noppes clone spawn Charlie 2 ${x} ${y} ${z}`)
			Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
			return 1
		})
    )

	event.register(
        Commands.literal("spawnJohnNPC")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			const sourcePosition = ctx.source.position
			const x = Math.floor(sourcePosition.x());
            const y = Math.floor(sourcePosition.y()) + 1;
            const z = Math.floor(sourcePosition.z());

			if (!Utils.server.persistentData.john)
			{
				Utils.server.persistentData.john = 0
			}
			if (Utils.server.persistentData.john >= maxNPCs)
			{
				let randomSpawnChance = Math.random(); 
				if (randomSpawnChance > spawnChance)
				{
					Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
					return 1;
				}
			}
			registerNewSurvivorLocation(sourcePosition)
			Utils.server.persistentData.john++
			Utils.server.runCommandSilent(`noppes clone spawn JohnMaroon 2 ${x} ${y} ${z}`)
			Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
			return 1
		})
    )

	
	event.register(
        Commands.literal("spawnBlakeNPC")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			const sourcePosition = ctx.source.position
			const x = Math.floor(sourcePosition.x());
            const y = Math.floor(sourcePosition.y()) + 1;
            const z = Math.floor(sourcePosition.z());

			if (!Utils.server.persistentData.blake)
			{
				Utils.server.persistentData.blake = 0
			}
			if (Utils.server.persistentData.blake >= maxNPCs)
			{
				let randomSpawnChance = Math.random(); 
				if (randomSpawnChance > spawnChance)
				{
					Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
					return 1;
				}
			}
			registerNewSurvivorLocation(sourcePosition)
			Utils.server.persistentData.blake++
			Utils.server.runCommandSilent(`noppes clone spawn Blake 2 ${x} ${y} ${z}`)
			Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
			return 1
		})
    )

	
	event.register(
        Commands.literal("spawnFordNPC")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			const sourcePosition = ctx.source.position
			const x = Math.floor(sourcePosition.x());
            const y = Math.floor(sourcePosition.y()) + 1;
            const z = Math.floor(sourcePosition.z());

			if (!Utils.server.persistentData.ford)
			{
				Utils.server.persistentData.ford = 0
			}
			if (Utils.server.persistentData.ford >= maxNPCs)
			{
				let randomSpawnChance = Math.random(); 
				if (randomSpawnChance > spawnChance)
				{
					Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
					return 1;
				}
			}
			registerNewSurvivorLocation(sourcePosition)
			Utils.server.persistentData.ford++
			Utils.server.runCommandSilent(`noppes clone spawn Ford 2 ${x} ${y} ${z}`)
			Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
			return 1
		})
    )
	
	event.register(
        Commands.literal("spawnJacksonNPC")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			const sourcePosition = ctx.source.position
			const x = Math.floor(sourcePosition.x());
            const y = Math.floor(sourcePosition.y()) + 1;
            const z = Math.floor(sourcePosition.z());

			if (!Utils.server.persistentData.jackson)
			{
				Utils.server.persistentData.jackson = 0
			}
			if (Utils.server.persistentData.jackson >= maxNPCs)
			{
				let randomSpawnChance = Math.random(); 
				if (randomSpawnChance > spawnChance)
				{
					Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
					return 1;
				}
			}
			registerNewSurvivorLocation(sourcePosition)
			Utils.server.persistentData.jackson++
			Utils.server.runCommandSilent(`noppes clone spawn Jackson 2 ${x} ${y} ${z}`)
			Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} minecraft:air`)
			return 1
		})
    )
})