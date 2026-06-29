ServerEvents.recipes(event => {
	event.remove({ output: 'legendarysurvivaloverhaul:healing_herbs' })
	event.shapeless('2x legendarysurvivaloverhaul:healing_herbs', [
		'legendarysurvivaloverhaul:ice_fern_leaf','legendarysurvivaloverhaul:sun_fern_leaf'
	]).id("deceasedcraft:healing_herbs")

	event.remove({ output: 'legendarysurvivaloverhaul:tonic' })
	event.shaped('legendarysurvivaloverhaul:tonic', [
		' X ',
		' X ',
		' Y '
	  ], {
		X: 'legendarysurvivaloverhaul:healing_herbs',
		Y: 'minecraft:glass_bottle'
	}).id("deceasedcraft:tonic")

	event.remove({ output: 'legendarysurvivaloverhaul:medkit' })
	event.shaped('legendarysurvivaloverhaul:medkit', [
		'ZYZ',
		'AXA',
		'CCC'
	  ], {
		Z: 'apocalypsenow:cloth',
		Y: 'legendarysurvivaloverhaul:tonic',
		A: 'minecraft:paper',
		X: 'legendarysurvivaloverhaul:bandage',
		C: '#minecraft:wool'
	}).id("deceasedcraft:medkit")
})
