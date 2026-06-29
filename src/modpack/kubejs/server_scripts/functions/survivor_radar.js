// priority: 0
console.info('Loaded survivor radar.js')

ItemEvents.rightClicked(event => {
	if (event.player &&
		event.item.id == "deceasedcraft:survivor_radar")
		{
			event.player.tell(Component.translate('deceasedcraft.survivor.signal.message'))
			let survivorLocations = Utils.server.persistentData.survivorLocations
			if (survivorLocations)
				{
				for (let location of survivorLocations)
				{
					event.player.tell(`X: ${location.x}, Y: ${location.y}, Z: ${location.z}`)
				}
			}
			else
			{
				event.player.tell(Component.translate('deceasedcraft.survivor.signal.none'))
			}
		}
});