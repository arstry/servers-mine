
let colorTypes = [
	"light_grey",
	"grey",
	"lime",
	"cyan",
	"light_blue",
	"magenta",
	"red",
	"blue",
	"green",
	"yellow",
	"black",
	"white",
	"purple",
	"orange",
	"pink",
	"brown"
]

function spawnVehicle(sourcePosition, vehicleType, vehicleName, maxFuel)
{
	let randomFuel = Math.floor(Math.random() * maxFuel)
	let randomHealth = Math.floor(Math.random() * 100)
	let randomColorIndex = Math.floor(Math.random() * colorTypes.length)
	let randomBatteryLevel = Math.floor(Math.random() * 3000)
	let randomRotationX = Math.random() * 360.0
	let randomRotationY = Math.random() * 360.0
	let textureBase = "dragnvehicles:textures/entity/" + vehicleName + "/"

	// A weird bug where lime texture doesn't exist in motorcycle
	if (colorTypes[randomColorIndex] == "lime" && vehicleType == "motorcycle")
	{
		randomColorIndex--;
	}

	Utils.server.runCommandSilent(`summon dragnvehicles:${vehicleType} ${sourcePosition.x()} ${sourcePosition.y()} ${sourcePosition.z()} {Fluid: {Amount: ${randomFuel}, FluidName: "createdieselgenerators:gasoline"}, Texture: "${textureBase}${colorTypes[randomColorIndex]}.png", internalInventory: [{Slot: 1, id: "refueled:battery", Count: 1b, tag: {Energy: ${randomBatteryLevel}}}], Rotation: [${randomRotationX}f, ${randomRotationY}f], Health: ${randomHealth}}`)
	Utils.server.runCommandSilent(`setblock ${sourcePosition.x() - 0.5} ${sourcePosition.y() - 0.5} ${sourcePosition.z() - 0.5} minecraft:air`)
}

ServerEvents.commandRegistry(event => { //command registry event

	const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("spawnCarBike")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			spawnVehicle(ctx.source.position, "motorcycle", "motorcycle", 15.00)
			return 1
		})
    )

    event.register(
        Commands.literal("spawnCarClassic")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			spawnVehicle(ctx.source.position, "classic", "classic", 3000)
			return 1
		})
    )

    event.register(
        Commands.literal("spawnCarModern")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			spawnVehicle(ctx.source.position, "car", "car", 4000)
			return 1
		})
    )
	
    event.register(
        Commands.literal("spawnCarSUV")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			spawnVehicle(ctx.source.position, "suv", "suv", 5000)
			return 1
		})
    )
	
    event.register(
        Commands.literal("spawnCarTruck")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			spawnVehicle(ctx.source.position, "truck", "truck", 5000)
			return 1
		})
    )
	
    event.register(
        Commands.literal("spawnCarSport")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			spawnVehicle(ctx.source.position, "sport_car", "sportcar", 3000)
			return 1
		})
    )
})

ServerEvents.commandRegistry(event => { //command registry event
	const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("spawnCarBikeOrClassic")
		.requires(src => src.hasPermission(2))
		.executes(ctx => {
			if (Math.random() < 0.8)
			{
				spawnVehicle(ctx.source.position, "motorcycle", "motorcycle", 1500)
				return 1
			}
			else
			{
				spawnVehicle(ctx.source.position, "classic", "classic", 3000)
			}
			return 1
		})
    )
})