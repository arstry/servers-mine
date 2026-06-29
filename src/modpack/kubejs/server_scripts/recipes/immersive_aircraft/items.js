ServerEvents.recipes(event => {

	// Engine Base
	let incomplete_item = 'deceasedcraft:incomplete_aircraft_engine'
	event.remove({output: 'immersive_aircraft:engine'})
	event.recipes.create.sequenced_assembly([
		Item.of('immersive_aircraft:engine').withChance(100.0)
	], 'immersiveengineering:storage_aluminum', [
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('immersiveengineering:redstone_acid', 50)]),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'immersiveengineering:component_electronic']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'create:precision_mechanism']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:wires/electrum']),
		event.recipes.createPressing(incomplete_item, incomplete_item),
		event.recipes.createCutting(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(4).id("deceasedcraft:immersive_aircraft/aircraft_engine")

	// Eco Engine
	event.remove({output: 'immersive_aircraft:eco_engine'})
	event.recipes.create.mechanical_crafting('immersive_aircraft:eco_engine', [
		'III',
		'XOX',
		'VVV'
	  ], {
		I: '#forge:plates/constantan',
		X: '#forge:wires/electrum',
		O: 'immersive_aircraft:engine',
		V: '#forge:ingots/brick'
	  }).id("deceasedcraft:immersive_aircraft/eco_engine")
	  
	// Nether Engine
	event.remove({output: 'immersive_aircraft:nether_engine'})
	event.recipes.create.mechanical_crafting('immersive_aircraft:nether_engine', [
		'III',
		'XOX',
		'VVV'
	  ], {
		I: '#forge:plates/constantan',
		X: '#forge:wires/electrum',
		O: 'immersive_aircraft:engine',
		V: 'minecraft:netherite_scrap'
	  }).id("deceasedcraft:immersive_aircraft/nether_engine")

	// Steel Boiler
	event.remove({output: 'immersive_aircraft:steel_boiler'})
	event.recipes.create.mechanical_crafting('immersive_aircraft:steel_boiler', [
		'OOO',
		'OBO',
		'OXO',
	  ], {
		O: '#forge:ingots/steel',
		B: 'immersive_aircraft:boiler',
		X: 'minecraft:blast_furnace'
	}).id("deceasedcraft:immersive_aircraft/steel_boiler")

	// Hull
	event.remove({output: 'immersive_aircraft:hull'})
	event.shaped('immersive_aircraft:hull', [
		'XXX',
		'III',
		'XXX'
	], {
		I: '#forge:plates/iron',
		X: '#minecraft:planks'
	}).id("deceasedcraft:immersive_aircraft/hull")

	// Hull Reinforcement
	event.remove({output: 'immersive_aircraft:hull_reinforcement'})
	event.shaped('immersive_aircraft:hull_reinforcement', [
		'XXX',
		'III',
		'XXX'
	], {
		I: 'immersive_aircraft:hull',
		X: '#forge:plates/lead'
	}).id("deceasedcraft:immersive_aircraft/hull_reinforcement")
	
	// Sail
	event.remove({output: 'immersive_aircraft:sail'})
	event.shaped('immersive_aircraft:sail', [
		'XXI',
		'XXI',
		'XXI'
	], {
		I: '#forge:string',
		X: 'immersiveengineering:hemp_fabric'
	}).id("deceasedcraft:immersive_aircraft/sail")

	// Industrial Gears
	event.remove({output: 'immersive_aircraft:industrial_gears'})
	event.shaped('immersive_aircraft:industrial_gears', [
		'  I',
		'OXV',
		'I  '
	], {
		I: 'create:cogwheel',
		X: 'create:large_cogwheel',
		O: '#forge:plates/iron',
		V: '#forge:plates/copper'
	}).id("deceasedcraft:immersive_aircraft/industrial_gears")

	// Improved Landing Gear
	event.remove({output: 'immersive_aircraft:improved_landing_gear'})
	event.shaped('immersive_aircraft:improved_landing_gear', [
		' V',
		'O '
	], {
		O: 'dragnvehicles:wheel',
		V: '#forge:rods/steel'
	}).id("deceasedcraft:immersive_aircraft/improved_landing_gear")

	// Propeller
	event.remove({output: 'immersive_aircraft:propeller'})
	event.recipes.create.mechanical_crafting('immersive_aircraft:propeller', [
		' O ',
		'OBO',
		' O ',
	  ], {
		O: '#forge:plates/aluminum',
		B: '#create:casing'
	}).id("deceasedcraft:immersive_aircraft/propeller")

	// Enhanced Propeller
	event.remove({output: 'immersive_aircraft:enhanced_propeller'})
	event.recipes.create.mechanical_crafting('immersive_aircraft:enhanced_propeller', [
		'  O  ',
		'  X  ',
		'OXBXO',
		'  X  ',
		'  O  ',
	  ], {
		O: '#forge:plates/aluminum',
		B: 'immersive_aircraft:propeller',
		X: '#forge:wires/electrum'
	}).id("deceasedcraft:immersive_aircraft/enhanced_propeller")

	// Airship
	event.remove({output: 'immersive_aircraft:airship'})
	event.recipes.create.mechanical_crafting('immersive_aircraft:airship', [
		'OOO',
		'OOO',
		'BBX',
	  ], {
		O: 'immersive_aircraft:sail',
		B: 'immersive_aircraft:hull',
		X: 'immersive_aircraft:engine'
	}).id("deceasedcraft:immersive_aircraft/airship")
	
	// Cargo Airship
	event.remove({output: 'immersive_aircraft:cargo_airship'})
	event.recipes.create.mechanical_crafting('immersive_aircraft:cargo_airship', [
		'OOOOO',
		'OOOOO',
		'BCXCB',
		'BBBBB',
	  ], {
		O: 'immersive_aircraft:sail',
		B: 'immersive_aircraft:hull',
		C: '#forge:chests',
		X: 'immersive_aircraft:engine'
	}).id("deceasedcraft:immersive_aircraft/cargo_airship")
	
	// Warship
	event.remove({output: 'immersive_aircraft:warship'})
	event.recipes.create.mechanical_crafting('immersive_aircraft:warship', [
		'POOOOO',
		'POOOOO',
		'POOOOO',
		'TC  CT',
		'PCXXCB',
		'BBGGBB',
	  ], {
		O: 'immersive_aircraft:sail',
		B: 'immersive_aircraft:hull_reinforcement',
		C: '#forge:chests',
		X: 'immersive_aircraft:engine',
		P: 'immersive_aircraft:propeller',
		T: 'immersiveengineering:hemp_fabric',
		G: 'immersive_aircraft:industrial_gears'
	}).id("deceasedcraft:immersive_aircraft/warship")
	
	// Biplane
	event.remove({output: 'immersive_aircraft:biplane'})
	event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
		'   B ',
		'   B ',
		'BBGXP',
		'   B ',
		'   B ',
	  ], {
		B: 'immersive_aircraft:hull',
		X: 'immersive_aircraft:engine',
		P: 'immersive_aircraft:propeller',
		G: 'immersive_aircraft:industrial_gears'
	}).id("deceasedcraft:immersive_aircraft/biplane")
	
	// Gyrodyne
	event.remove({output: 'immersive_aircraft:gyrodyne'})
	
	// Quadrocopter
	event.remove({output: 'immersive_aircraft:quadrocopter'})
	event.recipes.create.mechanical_crafting('immersive_aircraft:quadrocopter', [
		'P  P',
		'BGXB',
		'BBBB',
		'P  P'
	  ], {
		B: 'minecraft:bamboo',
		P: 'immersive_aircraft:propeller',
		G: 'immersive_aircraft:sail',
		X: 'immersive_aircraft:engine'
	}).id("deceasedcraft:immersive_aircraft/quadrocopter")
})