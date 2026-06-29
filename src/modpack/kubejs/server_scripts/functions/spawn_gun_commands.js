ServerEvents.commandRegistry(event => { //command registry event
    const { commands: Commands, arguments: Arguments } = event;

    event.register(
        Commands.literal("spawnRandomDecentPistol")
		.requires(src => src.hasPermission(2))
		.then(Commands.argument('direction', Arguments.INTEGER.create(event))
		.then(Commands.argument('rotation', Arguments.STRING.create(event)).executes(ctx => {
				let availablePistolIds = [
					'tacz:deagle',
					'tacz:p320',
					'tacz:m1911',
					'tacz:deagle_golden',
					'tacz:cz75',
					'bf1:sw_model3',
					'suffuse:python'
				];
				return spawnGun(ctx, availablePistolIds, "SEMI")
		})))
    )
	event.register(
        Commands.literal("spawnRandomDecentRifle")
		.requires(src => src.hasPermission(2))
		.then(Commands.argument('direction', Arguments.INTEGER.create(event))
		.then(Commands.argument('rotation', Arguments.STRING.create(event)).executes(ctx => {
				let availableRifleIds = [
					'gz:military_p416',
					'gz:lvoa_c',
					'suffuse:qbz192',
					'suffuse:n4',
					'suffuse:aks74u',
					'tacz:ak47',
					'tacz:type_81',
					'tacz:m16a1'
				];
				return spawnGun(ctx, availableRifleIds, "AUTO")
		})))
    )

	let spawnGun = (ctx, availableGuns, mode) => {
		const sourcePosition = ctx.source.position
		const facingDirection = Arguments.INTEGER.getResult(ctx, 'direction')
		const randomRotation = Arguments.STRING.getResult(ctx, 'rotation')
		let rotation = "ItemRotation:"
		if (randomRotation == "random")
		{
			rotation += Math.floor(Math.random() * 8) + "b, "
		}
		else
		{
			rotation += randomRotation + "b, "
		}

		let randomIndex = Math.floor(Math.random() * availableGuns.length)
		let fullNBT = `{Facing: ` + facingDirection + `b, ` + rotation + `Item:{id:"tacz:modern_kinetic_gun", tag: {GunId: "` + availableGuns[randomIndex] + `", GunFireMode: "` + mode + `", GunCurrentAmmoCount: 0, HasBulletInBarrel: 0b}, Count:1b}, Invisible:0b}`
		Utils.server.runCommandSilent(`summon quark:glass_frame ${sourcePosition.x()} ${sourcePosition.y()} ${sourcePosition.z()} ` + fullNBT)
		Utils.server.runCommandSilent(`setblock ${sourcePosition.x() - 0.5} ${sourcePosition.y() - 0.5} ${sourcePosition.z() - 0.5} minecraft:air`)
		return 1
	}
})