ServerEvents.recipes(event => {

	// Battery
	let incomplete_item = 'deceasedcraft:incomplete_battery'
	event.remove({output: 'refueled:battery'})
	event.recipes.create.sequenced_assembly([
		Item.of('refueled:battery').withChance(100.0)
	], 'immersiveengineering:storage_lead', [
		event.recipes.createCutting(incomplete_item, incomplete_item),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('immersiveengineering:redstone_acid', 50)]),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('minecraft:water', 50)]),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:wires/electrum']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(2)

	// Engine Piston
	incomplete_item = 'deceasedcraft:incomplete_engine_piston'
	event.remove({output: 'createdieselgenerators:engine_piston'})
	event.recipes.create.sequenced_assembly([
		Item.of('createdieselgenerators:engine_piston').withChance(100.0)
	], 'minecraft:piston', [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:rods/steel']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:rods/steel']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:plates/steel']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)

	// Engine 3 Cylinder
	incomplete_item = 'deceasedcraft:incomplete_diesel_engine'
	event.remove({output: 'createdieselgenerators:diesel_engine'})
	event.recipes.create.sequenced_assembly([
		Item.of('createdieselgenerators:diesel_engine').withChance(100.0)
	], 'immersiveengineering:storage_aluminum', [
		event.recipes.createCutting(incomplete_item, incomplete_item),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('immersiveengineering:redstone_acid', 50)]),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'createdieselgenerators:engine_piston']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'create:precision_mechanism']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:plates/steel']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(3)

	// Engine 6 Cylinder
	incomplete_item = 'deceasedcraft:incomplete_large_diesel_engine'
	event.remove({output: 'createdieselgenerators:large_diesel_engine'})
	event.recipes.create.sequenced_assembly([
		Item.of('createdieselgenerators:large_diesel_engine').withChance(100.0)
	], 'createdieselgenerators:diesel_engine', [
		event.recipes.createCutting(incomplete_item, incomplete_item),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('immersiveengineering:redstone_acid', 50)]),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'createdieselgenerators:engine_piston']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'create:precision_mechanism']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:plates/steel']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(3)
	
	// Engine Truck
	incomplete_item = 'deceasedcraft:incomplete_huge_diesel_engine'
	event.remove({output: 'createdieselgenerators:huge_diesel_engine'})
	event.recipes.create.sequenced_assembly([
		Item.of('createdieselgenerators:huge_diesel_engine').withChance(100.0)
	], 'createdieselgenerators:large_diesel_engine', [
		event.recipes.createCutting(incomplete_item, incomplete_item),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('immersiveengineering:redstone_acid', 50)]),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'createdieselgenerators:engine_piston']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'create:precision_mechanism']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:plates/steel']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(3)

	
	// Wheels
	incomplete_item = 'deceasedcraft:incomplete_wheel'
	event.remove({output: 'dragnvehicles:wheel'})
	event.recipes.create.sequenced_assembly([
		Item.of('dragnvehicles:wheel').withChance(100.0)
	], 'immersiveengineering:storage_aluminum', [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'deceasedcraft:rubber']),
		event.recipes.createPressing(incomplete_item, incomplete_item),
		event.recipes.createCutting(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(3)
	
	// Big Wheels
	incomplete_item = 'deceasedcraft:incomplete_big_wheel'
	event.remove({output: 'deceasedcraft:big_wheel'})
	event.recipes.create.sequenced_assembly([
		Item.of('deceasedcraft:big_wheel').withChance(100.0)
	], 'dragnvehicles:wheel', [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'deceasedcraft:rubber']),
		event.recipes.createPressing(incomplete_item, incomplete_item),
		event.recipes.createCutting(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(3)

	// Sports Wheels
	incomplete_item = 'deceasedcraft:incomplete_sports_wheel'
	event.remove({output: 'dragnvehicles:sports_wheel'})
	event.recipes.create.sequenced_assembly([
		Item.of('dragnvehicles:sports_wheel').withChance(100.0)
	], 'dragnvehicles:wheel', [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'deceasedcraft:resistant_fiber']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'deceasedcraft:rubber']),
		event.recipes.createPressing(incomplete_item, incomplete_item),
		event.recipes.createCutting(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(3)

	// Canister
	event.remove({output: 'refueled:canister'})
	event.shaped('refueled:canister', [
		' XX',
		'X X',
		'XXX'
	  ], {
		X: '#forge:plates/plastic'
	})
	
	// Gas Station
	/*
	event.shaped('car:gas_station', [
		'XYX',
		'XZX',
		'ABA'
	  ], {
		X: '#forge:ingots/iron',
		Y: '#forge:storage_blocks/iron',
		Z: 'immersiveengineering:component_electronic_adv',
		A: 'minecraft:smooth_stone_slab',
		B: 'create:fluid_tank',
	})
	*/
})