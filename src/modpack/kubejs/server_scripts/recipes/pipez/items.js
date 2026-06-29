ServerEvents.recipes(event => {
	let pipeRecipe = (output, primaryInput, secondaryInput) => {
	  event.shaped(output, [
		'XIX',
		'III',
		'XIX'
	  ], {
		I: primaryInput,
		X: secondaryInput
	  })
	}

	let itemPipeRecipe = (output, primaryInput, secondaryInput, thirdInput) => {
		event.shaped(output, [
		  'XIX',
		  'IVI',
		  'XIX'
		], {
		  I: primaryInput,
		  X: secondaryInput,
		  V: thirdInput
		})
	}
	
	event.remove({output: 'pipez:energy_pipe'})
	event.remove({output: 'pipez:fluid_pipe'})
	event.remove({output: 'pipez:item_pipe'})
	event.remove({output: 'pipez:universal_pipe'})
	event.remove({output: 'pipez:basic_upgrade'})
	event.remove({output: 'pipez:improved_upgrade'})
	event.remove({output: 'pipez:advanced_upgrade'})
	event.remove({output: 'pipez:ultimate_upgrade'})

	event.shaped('pipez:universal_pipe', [
		'IXV',
		'AAA',
		'IXV'
	  ], {
		I: 'pipez:item_pipe',
		X: 'pipez:energy_pipe',
		V: 'pipez:fluid_pipe',
		A: 'refinedstorage:advanced_processor'
	  })
  
	pipeRecipe('32x pipez:energy_pipe', '#forge:ingots/electrum', 'deceasedcraft:rubber')
	pipeRecipe('32x pipez:fluid_pipe', 'create:fluid_pipe', 'deceasedcraft:rubber')
	pipeRecipe('16x pipez:energy_pipe', '#forge:ingots/electrum', '#forge:plates/plastic')
	pipeRecipe('16x pipez:fluid_pipe', 'create:fluid_pipe', '#forge:plates/plastic')

	itemPipeRecipe('32x pipez:item_pipe', 'refinedstorage:cable', 'deceasedcraft:rubber', 'refinedstorage:basic_processor')
	itemPipeRecipe('16x pipez:item_pipe', 'refinedstorage:cable', '#forge:plates/plastic', 'refinedstorage:basic_processor')

	itemPipeRecipe('pipez:basic_upgrade', 'refinedstorage:basic_processor', '#forge:plates/nickel', '#forge:plates/plastic')
	itemPipeRecipe('pipez:improved_upgrade', 'refinedstorage:improved_processor', '#forge:plates/electrum', 'pipez:basic_upgrade')
	itemPipeRecipe('pipez:advanced_upgrade', 'refinedstorage:advanced_processor', '#forge:plates/aluminum', 'pipez:improved_upgrade')
	itemPipeRecipe('pipez:ultimate_upgrade', 'minecraft:ender_pearl', 'minecraft:netherite_ingot', 'pipez:advanced_upgrade')

})