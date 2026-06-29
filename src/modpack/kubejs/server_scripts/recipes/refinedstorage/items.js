ServerEvents.recipes(event => {
	// Cable
	let outputItem = '16x refinedstorage:cable'
	event.remove({output: 'refinedstorage:cable'})
	event.shaped(outputItem, [
		'XXX',
		'IYI',
		'XXX'
	  ], {
		I: '#forge:plates/plastic',
		X: '#forge:glass',
		Y: 'createaddition:copper_spool'
	}).id("deceasedcraft:cable")

	// Machine Casing
	outputItem = 'refinedstorage:machine_casing'
	event.remove({output: outputItem})
	event.shaped(outputItem, [
		'XIX',
		'I I',
		'XIX'
	  ], {
		X: '#forge:plates/aluminum',
		I: '#forge:plates/plastic'
	}).id("deceasedcraft:machine_casing")

	// Storage Housing 
	outputItem = 'refinedstorage:storage_housing'
	event.remove({output: outputItem})
	event.shaped(outputItem, [
		'XIX',
		'IYI'
	  ], {
		I: '#forge:plates/aluminum',
		X: '#forge:glass',
		Y: '#forge:plates/plastic'
	}).id("deceasedcraft:storage_housing")

	// Silica Dust
	event.remove({id: "immersiveengineering:crusher/sandstone"})
	event.custom({
		type: 'immersiveengineering:crusher',
		energy: 1600,
		input: {
			tag: "forge:sandstone"
		},
		result: {
			item: 'minecraft:sand',
			count: 2
		},
		secondaries: [
			{
				chance: 0.5,
				output: {
					item: "immersiveengineering:dust_saltpeter"
				}
			},
			{
				chance: 0.5,
				output: {
					item: "deceasedcraft:silica_dust"
				}
			}
		]
	  }).id("deceasedcraft:silica_dust_sandstone")

	// Silica Dust
	event.remove({id: "immersiveengineering:crusher/ore_quartz"})
	event.custom({
		type: 'immersiveengineering:crusher',
		energy: 1600,
		input: {
			tag: "forge:gems/quartz"
		},
		result: {
			item: 'deceasedcraft:silica_dust',
			count: 4
		},
		secondaries: [
			{
				chance: 0.5,
				output: {
					item: "deceasedcraft:silica_dust"
				}
			}
		]
	  }).id("deceasedcraft:silica_dust_gem")


	// Silica Dust Quartz
	event.custom({
		type: 'immersiveengineering:crusher',
		energy: 1600,
		input: {
			item: "minecraft:nether_quartz_ore"
		},
		result: {
			item: 'deceasedcraft:silica_dust',
			count: 4
		},
		secondaries: [
			{
				chance: 0.25,
				output: {
					item: "immersiveengineering:dust_sulfur"
				}
			}
		]
	  }).id("deceasedcraft:silica_dust_nether_quartz")

	  // Coal Coke Silicon
	  event.remove({output: 'refinedstorage:silicon'})
	  event.custom({
		type: "immersiveengineering:arc_furnace",
		additives: [
			{
				item: "immersiveengineering:coal_coke"
			}
		],
		energy: 51200,
		input: {
			item: "deceasedcraft:silica_dust"
		},
		results: [
			{
				item: "refinedstorage:silicon",
				count: 2
			}
		],
		time: 100
	  }).id("deceasedcraft:silicon_coal_coke")

	  // Redstone Acid Alternate Recipe
	  event.recipes.create.mixing(Fluid.of('immersiveengineering:redstone_acid', 250), '#forge:dusts/redstone').heated()

	  // Raw Processors
	  event.remove({output: 'refinedstorage:raw_basic_processor'})
	  event.remove({output: 'refinedstorage:raw_improved_processor'})
	  event.remove({output: 'refinedstorage:raw_advanced_processor'})
	  let processorRecipe = (output, InputMold, outputCount) => {
		event.custom({
			type: 'immersiveengineering:metal_press',
			energy: 2400,
			input: {
				item: "refinedstorage:silicon"
			},
			mold: InputMold,
			result: {
				count: outputCount,
				item: output
			}
		})
	}

	processorRecipe('refinedstorage:raw_basic_processor', 'deceasedcraft:mold_basic_processor', 1);
	processorRecipe('refinedstorage:raw_improved_processor', 'deceasedcraft:mold_improved_processor', 1);
	processorRecipe('refinedstorage:raw_advanced_processor', 'deceasedcraft:mold_advanced_processor', 1);

	event.replaceInput({ not: { id: 'refinedstorage:block_of_quartz_enriched_iron' }, mod: 'refinedstorage' },
		'refinedstorage:quartz_enriched_iron',
		'immersiveengineering:plate_duroplast')

	event.remove({output: 'refinedstorage:basic_processor'})
	event.remove({output: 'refinedstorage:improved_processor'})
	event.remove({output: 'refinedstorage:advanced_processor'})
	let processorSequenceRecipe = (output, input, RecipeId, primary, secondary, incomplete_item) => {
		event.recipes.create.sequenced_assembly(output, input, [
			event.recipes.createDeploying(incomplete_item, [incomplete_item, primary]),
			event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('immersiveengineering:redstone_acid', 100)]),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, secondary]),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:plates/plastic'])
		]).transitionalItem(incomplete_item)
		.loops(1)
		.id('deceasedcraft:' + RecipeId + '_recipe')
	}

	processorSequenceRecipe(
		'refinedstorage:basic_processor',
		'immersiveengineering:circuit_board',
		'basic_processor',
		'refinedstorage:raw_basic_processor',
		'#forge:wires/iron',
		'deceasedcraft:incomplete_basic_processor'
	)
	
	processorSequenceRecipe(
		'refinedstorage:improved_processor',
		'immersiveengineering:circuit_board',
		'improved_processor',
		'refinedstorage:raw_improved_processor',
		'#forge:wires/gold',
		'deceasedcraft:incomplete_improved_processor'
	)
	
	processorSequenceRecipe(
		'refinedstorage:advanced_processor',
		'immersiveengineering:circuit_board',
		'advanced_processor',
		'refinedstorage:raw_advanced_processor',
		'#forge:wires/aluminum',
		'deceasedcraft:incomplete_advanced_processor'
	)

	let storageSequenceRecipe = (output, input, RecipeId, primary, incomplete_item) => {
		event.recipes.create.sequenced_assembly(output, input, [
			event.recipes.createDeploying(incomplete_item, [incomplete_item, primary]),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:wires/gold']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, 'refinedstorage:silicon']),
			event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('immersiveengineering:redstone_acid', 100)]),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:plates/plastic'])
		]).transitionalItem(incomplete_item)
		.loops(3)
		.id('deceasedcraft:' + RecipeId + '_recipe')
	}
	event.remove({output: 'refinedstorage:1k_storage_part'})
	storageSequenceRecipe(
		'refinedstorage:1k_storage_part',
		'immersiveengineering:circuit_board',
		'1k_storage_part',
		'#forge:chests',
		'deceasedcraft:incomplete_1k_storage_part'
	)
	
	event.remove({output: 'refinedstorage:4k_storage_part'})
	storageSequenceRecipe(
		'refinedstorage:4k_storage_part',
		'immersiveengineering:circuit_board',
		'4k_storage_part',
		'refinedstorage:1k_storage_part',
		'deceasedcraft:incomplete_4k_storage_part'
	)
	
	event.remove({output: 'refinedstorage:16k_storage_part'})
	storageSequenceRecipe(
		'refinedstorage:16k_storage_part',
		'immersiveengineering:circuit_board',
		'16k_storage_part',
		'refinedstorage:4k_storage_part',
		'deceasedcraft:incomplete_16k_storage_part'
	)
	
	event.remove({output: 'refinedstorage:64k_storage_part'})
	storageSequenceRecipe(
		'refinedstorage:64k_storage_part',
		'immersiveengineering:circuit_board',
		'64k_storage_part',
		'refinedstorage:16k_storage_part',
		'deceasedcraft:incomplete_64k_storage_part'
	)
	
	event.remove({output: 'refinedstorage:64k_fluid_storage_part'})
	storageSequenceRecipe(
		'refinedstorage:64k_fluid_storage_part',
		'immersiveengineering:circuit_board',
		'64k_fluid_storage_part',
		'minecraft:bucket',
		'deceasedcraft:incomplete_64k_fluid_storage_part'
	)
	
	event.remove({output: 'refinedstorage:256k_fluid_storage_part'})
	storageSequenceRecipe(
		'refinedstorage:256k_fluid_storage_part',
		'immersiveengineering:circuit_board',
		'256k_fluid_storage_part',
		'refinedstorage:64k_fluid_storage_part',
		'deceasedcraft:incomplete_256k_fluid_storage_part'
	)
	
	event.remove({output: 'refinedstorage:1024k_fluid_storage_part'})
	storageSequenceRecipe(
		'refinedstorage:1024k_fluid_storage_part',
		'immersiveengineering:circuit_board',
		'1024k_fluid_storage_part',
		'refinedstorage:256k_fluid_storage_part',
		'deceasedcraft:incomplete_1024k_fluid_storage_part'
	)
	
	event.remove({output: 'refinedstorage:4096k_fluid_storage_part'})
	storageSequenceRecipe(
		'refinedstorage:4096k_fluid_storage_part',
		'immersiveengineering:circuit_board',
		'4096k_fluid_storage_part',
		'refinedstorage:1024k_fluid_storage_part',
		'deceasedcraft:incomplete_4096k_fluid_storage_part'
	)
})