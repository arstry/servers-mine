// Cutter And Hammer
ServerEvents.recipes(event => {
	let wireCutterRecipe = (input, output) => {
		event.shapeless(output, [
			input,
			'immersiveengineering:wirecutter'
		]).damageIngredient("immersiveengineering:wirecutter", 2)
	}

	let hammerRecipe = (input, output) => {
		event.shapeless(output, [
			input,
			'immersiveengineering:hammer'
		]).damageIngredient("immersiveengineering:hammer", 2)
	}

	wireCutterRecipe('#forge:plates/gold', 'createaddition:gold_wire')
	wireCutterRecipe('#forge:plates/iron', 'createaddition:iron_wire')
	wireCutterRecipe('deceasedcraft:resistant_fabric', '2x deceasedcraft:resistant_fiber')
	hammerRecipe('#forge:ingots/brass', 'create:brass_sheet')
	hammerRecipe('#forge:ingots/zinc', 'createaddition:zinc_sheet')
	hammerRecipe('minecraft:netherite_ingot', '2x minecraft:netherite_scrap')
})

// Vanilla Recipes
ServerEvents.recipes(event => {
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh')
	event.smelting('immersiveengineering:nugget_aluminum', 'apocalypsenow:thincan')
	event.smelting('2x immersiveengineering:nugget_aluminum', 'apocalypsenow:small_can')
	event.smelting('3x immersiveengineering:nugget_aluminum', 'apocalypsenow:can')

	event.shapeless('2x minecraft:string', [
		'#minecraft:wool'
	])
	.id("deceasedcraft:wool")
	
	event.shapeless('9x apocalypsenow:money', [
		'apocalypsenow:money_block'
	])
	.id("deceasedcraft:money_block")
})


// Create Recipes
ServerEvents.recipes(event => {
	event.replaceInput(
		{ input: 'create:electron_tube' },
		'create:electron_tube',
		'immersiveengineering:component_electronic'
	)

	event.remove({ output: 'create:rotation_speed_controller' })
	event.shaped('create:rotation_speed_controller', [
		' X ',
		'IOI'
	  ], {
		I: 'create:brass_casing',
		X: 'create:precision_mechanism',
		O: 'immersiveengineering:component_electronic'
	}).id("deceasedcraft:rotation_speed_controller")
	  
	event.remove({ output: 'create:mechanical_arm' })
	event.shaped('create:mechanical_arm', [
		'IIC',
		'I  ',
		'XOF'
	  ], {
		I: '#forge:plates/brass',
		X: 'create:precision_mechanism',
		O: 'immersiveengineering:component_electronic',
		F: 'create:brass_casing',
		C: 'create:andesite_alloy'
	  }).id("deceasedcraft:mechanical_arm")
	  
	event.remove({ output: 'create:track_station' })
	event.shaped('create:track_station', [
		'IXI',
		'IOI',
		'IFI'
	  ], {
		I: 'create:railway_casing',
		X: 'minecraft:compass',
		O: 'create_sa:steam_engine',
		F: 'create_sa:heat_engine'
	  }).id("deceasedcraft:track_station")

	// Steel
	event.recipes.create.mixing('immersiveengineering:ingot_steel', [
 	 	'#forge:ingots/iron',
		'#forge:dusts/coal_coke'
	]).superheated()
	.id("deceasedcraft:mixing/steel")
	
	// Coke Dusts
	event.recipes.create.milling('immersiveengineering:dust_coke', 'immersiveengineering:coal_coke')
	
  	// Bio Ethanol
	event.recipes.create.mixing(Fluid.of('createaddition:bioethanol', 60),[
		'minecraft:sugar',
	  	'createaddition:biomass'
  	]).id("deceasedcraft:mixing/bio_ethanol")

	// Seed Oil
	// Remove Ethanol from CGD
	event.remove({ id: 'createdieselgenerators:basin_fermenting/fermentable' })
	event.remove({ id: 'createdieselgenerators:basin_fermenting/fermented_spider_eye' })
	event.remove({ id: 'createdieselgenerators:bulk_fermenting/fermentable' })
	
	// Remove CDG Seed Oil Recipe
	event.remove({ id: 'createdieselgenerators:compacting/plant_oil' })
	event.remove({ id: 'createaddition:compacting/seed_oil' })
	event.recipes.create.compacting(Fluid.of('createaddition:seed_oil', 20),[
		'10x #forge:seeds'
  	]).id("deceasedcraft:compacting/seed_oil")

	// Graphite Rod
	event.remove({ id: 'createdieselgenerators:compat/immersiveengineering/graphite_electrode' })

	// Netherrack Alternate Recipe
	event.recipes.create.filling('minecraft:netherrack', [Fluid.of('minecraft:lava'), 'minecraft:gravel'])
	.id("deceasedcraft:netherrack")

	// Electronic Component
	let incomplete_item = 'deceasedcraft:incomplete_component_electronic'
	event.recipes.create.sequenced_assembly([
		Item.of('immersiveengineering:component_electronic').withChance(100.0)
	], '#forge:treated_wood_slab', [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:wires/electrum']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'immersiveengineering:electron_tube']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:dusts/redstone']),
	]).transitionalItem(incomplete_item).loops(1)
	.id("deceasedcraft:component_electronic")

	incomplete_item = 'deceasedcraft:incomplete_component_electronic_adv'
	event.recipes.create.sequenced_assembly([
		Item.of('immersiveengineering:component_electronic_adv').withChance(100.0)
	], 'immersiveengineering:component_electronic', [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:wires/electrum']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'immersiveengineering:electron_tube']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:dusts/redstone']),
	]).transitionalItem(incomplete_item).loops(1)
	.id("deceasedcraft:component_electronic_adv")
})

// Rubber
ServerEvents.recipes(event => {
  	// Rubber Base
	event.recipes.create.mixing("deceasedcraft:rubber_base",[
		Fluid.of('immersiveengineering:phenolic_resin', 250),
		{fluidTag: "forge:seed_oil", amount: 250}
  	]).heated()
	.id("deceasedcraft:mixing/rubber_base")

	event.recipes.create.mixing("deceasedcraft:rubber",[
		"deceasedcraft:rubber_base",
		Fluid.of('immersiveengineering:redstone_acid', 500)
  	]).heated()
	.id("deceasedcraft:mixing/rubber")
})

// High Resistance Fabric
ServerEvents.recipes(event => {
	// Resistance Fiber
  event.recipes.create.mixing("deceasedcraft:resistant_fiber",[
	  Fluid.of('immersiveengineering:phenolic_resin', 62),
	  Fluid.of('createbigcannons:molten_nethersteel', 180)
	]).superheated()
	.id("deceasedcraft:mixing/resistant_fiber")

	event.shapeless('deceasedcraft:resistant_fabric', [
		'deceasedcraft:resistant_fiber', 'deceasedcraft:resistant_fiber', 'deceasedcraft:resistant_fiber', 'deceasedcraft:resistant_fiber'])
	.id("deceasedcraft:resistant_fabric")
})

// Weapon Modules
ServerEvents.recipes(event => {
	event.remove({ output: 'apocalypsenow:electrical_module' })
	event.shaped('apocalypsenow:electrical_module', [
		'OX',
		'XI'
	  ], {
		I: 'refueled:battery',
		X: '#forge:wires/copper',
		O: 'immersiveengineering:component_electronic'
	})
	.id("deceasedcraft:electrical_module")

	event.remove({ output: 'apocalypsenow:fire_module' })
	event.shaped('apocalypsenow:fire_module', [
		'OX',
		'KI'
	  ], {
		I: 'refueled:canister',
		X: 'pipez:fluid_pipe',
		K: 'createdieselgenerators:gasoline_bucket',
		O: 'immersiveengineering:component_electronic'
	})
	.id("deceasedcraft:fire_module")
})

// Immersive Engineering Components
ServerEvents.recipes(event => {
	event.remove({ output: 'immersiveengineering:screwdriver' })
	event.shaped('immersiveengineering:screwdriver', [
		' O',
		'I '
	  ], {
		I: '#forge:rods/wooden',
		O: '#forge:rods/iron'
	}).id("deceasedcraft:screwdriver")
	
	event.remove({ id: 'immersiveengineering:crafting/stick_iron' })
	event.shaped('immersiveengineering:stick_iron', [
		'IO'
	  ], {
		I: '#forge:ingots/iron',
		O: 'immersiveengineering:wirecutter'
	}).id("deceasedcraft:crafting/iron_rod")
	
	event.remove({ id: 'immersiveengineering:crafting/stick_steel' })
	event.shaped('immersiveengineering:stick_steel', [
		'IO'
	  ], {
		I: '#forge:ingots/steel',
		O: 'immersiveengineering:wirecutter'
	}).id("deceasedcraft:crafting/steel_rod")
	
	event.remove({ id: 'immersiveengineering:crafting/stick_aluminum' })
	event.shaped('immersiveengineering:stick_aluminum', [
		'IO'
	  ], {
		I: '#forge:ingots/aluminum',
		O: 'immersiveengineering:wirecutter'
	}).id("deceasedcraft:crafting/aluminum_rod")
	
	event.remove({ output: 'immersiveengineering:storage_uranium' })
	event.shaped('immersiveengineering:storage_uranium', [
		'XXX',
		'XXX',
		'XXX'
	  ], {
		X: '#forge:ingots/uranium'
	}).id("deceasedcraft:crafting/uranium_block")

	event.remove({ output: 'immersiveengineering:strip_curtain' })
	event.shaped('immersiveengineering:strip_curtain', [
		'ZZZ',
		'XXX',
		'XXX'
	  ], {
		Z: '#forge:rods/all_metal',
		X: 'immersiveengineering:hemp_fabric'
	}).id("deceasedcraft:crafting/strip_curtain")
})

// Create Stuff and Additions
ServerEvents.recipes(event => {
	let outputItem = 'createaddition:alternator'
	event.remove({output: outputItem})
	event.recipes.create.mechanical_crafting(outputItem, [
		"  A  ",
		" ISI ",
		"ISRSI",
		" ICI ",
		"  A  "
	], {
		"C": {
		"item": "createaddition:capacitor"
		},
		"I": {
		"tag": "forge:plates/iron"
		},
		"R": {
		"tag": "forge:rods/iron"
		},
		"S": {
		"tag": "forge:coils/copper"
		},
		"A": {
		"item": "create:andesite_alloy"
		}
	}).id("deceasedcraft:alternator_recipe")
	
	outputItem = 'createaddition:electric_motor'
	event.remove({output: outputItem})
	event.recipes.create.mechanical_crafting(outputItem, [
		"  A  ",
		" BSB ",
		"BSRSB",
		" BCB ",
		"  A  "
	], {
		"A": {
		"item": "create:andesite_alloy"
		},
		"C": {
		"item": "createaddition:capacitor"
		},
		"B": {
		"tag": "forge:plates/brass"
		},
		"R": {
		"tag": "forge:rods/iron"
		},
		"S": {
		"item": "createaddition:copper_spool"
		}
	}).id("deceasedcraft:electric_motor_recipe")
})

// Create Big Cannons - Gunpowders
ServerEvents.recipes(event => {
	event.remove({id: "createbigcannons:gunpowder_pinch"})
	event.shapeless('minecraft:gunpowder', [
		'createbigcannons:gunpowder_pinch', 'createbigcannons:gunpowder_pinch', 'createbigcannons:gunpowder_pinch', 'createbigcannons:gunpowder_pinch'
	]).id("deceasedcraft:gunpowder_from_pinch")
	
	event.remove({id: "createbigcannons:gunpowder_from_pinches"})
	event.shapeless('4x createbigcannons:gunpowder_pinch', [
		'minecraft:gunpowder'
	]).id("deceasedcraft:gunpowder_to_pinch")
})

// Legendary Survival Overhaul
ServerEvents.recipes(event => {
	event.replaceInput(
		{ mod: 'legendarysurvivaloverhaul', input: 'minecraft:end_rod' },
		'minecraft:end_rod',
		'immersiveengineering:stick_aluminum'
	)
	
	event.replaceInput(
		{ mod: 'legendarysurvivaloverhaul', input: 'minecraft:netherite_ingot' },
		'minecraft:netherite_ingot',
		'deceasedcraft:resistant_fiber'
	)
	
	event.replaceInput(
		{ mod: 'legendarysurvivaloverhaul', input: 'minecraft:blaze_rod' },
		'minecraft:blaze_rod',
		'minecraft:blaze_powder'
	)

})