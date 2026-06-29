ServerEvents.recipes(event => {
	event.remove({ output: 'deceasedcraft:horde_calendar' })
	event.shaped('deceasedcraft:horde_calendar', [
		'XX',
		'VI'
	  ], {
		V: '#forge:leather',
		X: 'minecraft:paper',
		I: 'minecraft:rotten_flesh'
	})
	
	event.shaped('minecraft:chest', [
		'XXX',
		'X X',
		'XXX'
	  ], {
		X: '#minecraft:planks'
	})
	
	event.shapeless('9x minecraft:golden_apple', [
		'quark:golden_apple_crate'
	])
	.id("deceasedcraft:golden_apple_crate")

	event.remove({ output: 'xpbook:xp_tome' })
	event.shaped('xpbook:xp_tome', [
		'WX',
		'Y '
	  ], {
		W: 'minecraft:book',
		X: '#forge:dyes',
		Y: 'apocalypsenow:letter_opener'
	})
	
	event.remove({ output: 'pipez:wrench' })
	event.shaped('pipez:wrench', [
		' X ',
		'YXX',
		'ZY '
	  ], {
		X: '#forge:ingots/gold',
		Y: 'minecraft:string',
		Z: '#forge:leather'
	})
	
	event.remove({ output: 'refueled:road_marker' })
	event.shaped('refueled:road_marker', [
		'XXX',
		'ZY '
	  ], {
		X: '#forge:ingots/iron',
		Y: 'minecraft:white_dye',
		Z: 'minecraft:bucket'
	})
	
	let incomplete_item = 'deceasedcraft:incomplete_ender_pearl'
	event.recipes.create.sequenced_assembly([
		Item.of('minecraft:ender_pearl').withChance(100.0)
	], "minecraft:obsidian", [
		event.recipes.createCutting(incomplete_item, incomplete_item),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('minecraft:water', 25)]),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('minecraft:lava', 25)])
	]).transitionalItem(incomplete_item)
	.loops(4)
	.id('deceasedcraft:ender_pearl')
})
