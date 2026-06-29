priority: 1

ServerEvents.tags('item', event => {
	event.add('forge:material/cereal', '#forge:crops/wheat')
	event.add('forge:material/cereal', '#forge:crops/rice')
})

ServerEvents.recipes(event => {

	// MRE
	event.remove({output: 'apocalypsenow:mre'})
	event.shaped('apocalypsenow:mre', [
		' B ', 
		'DAC',
		'AAA'
	  ], {
		A: '#forge:plates/plastic', 
		B: '#forge:mre/desert',
		C: '#forge:mre/drinks',
		D: '#forge:mre/main_course',
	  }
	)

	let incomplete_item = ''
	let baseIngredient = 'immersiveengineering:plate_duroplast'

	// Nutrition Bar
	incomplete_item = 'deceasedcraft:incomplete_nutrition_bar'
	event.remove({output: 'apocalypsenow:nutrition_bar'})
	event.recipes.create.sequenced_assembly([
		Item.of('2x apocalypsenow:nutrition_bar').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:berries']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:crops/wheat']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:seeds']),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('create:honey', 25)]),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)

	// Coffee
	incomplete_item = 'deceasedcraft:incomplete_coffee'
	event.remove({output: 'apocalypsenow:coffee'})
	event.recipes.create.sequenced_assembly([
		Item.of('2x apocalypsenow:coffee').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:cocoa_beans']),
		event.recipes.createPressing(incomplete_item, incomplete_item),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('create_central_kitchen:hot_cocoa', 25)]),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)
	
	// Apple Juice
	incomplete_item = 'deceasedcraft:incomplete_apple_juice_box'
	event.remove({output: 'apocalypsenow:applejuicebox'})
	event.recipes.create.sequenced_assembly([
		Item.of('2x apocalypsenow:applejuicebox').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:apple']),
		event.recipes.createPressing(incomplete_item, incomplete_item),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('create:honey', 25)]),
	]).transitionalItem(incomplete_item).loops(1)

	// Milk
	incomplete_item = 'deceasedcraft:incomplete_milk'
	event.remove({output: 'apocalypsenow:milk'})
	event.recipes.create.sequenced_assembly([
		Item.of('2x apocalypsenow:milk').withChance(100.0)
	], baseIngredient, [
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('minecraft:milk', 25)]),
		event.recipes.createPressing(incomplete_item, incomplete_item),
	]).transitionalItem(incomplete_item).loops(1)


	// Chips
	incomplete_item = 'deceasedcraft:incomplete_chips'
	event.remove({output: 'apocalypsenow:chips'})
	event.recipes.create.sequenced_assembly([
		Item.of('2x apocalypsenow:chips').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:crops/potato']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:crops/potato']),
		event.recipes.createCutting(incomplete_item, incomplete_item),
		event.recipes.createFilling(incomplete_item, [incomplete_item, {fluidTag: "forge:seed_oil", amount:25}]),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)

	// Cereal
	incomplete_item = 'deceasedcraft:incomplete_cereal'
	event.remove({output: 'apocalypsenow:cereal'})
	event.recipes.create.sequenced_assembly([
		Item.of('2x apocalypsenow:cereal').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:material/cereal']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:material/cereal']),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('create:honey', 25)]),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)

	// Cream Cracker
	incomplete_item = 'deceasedcraft:incomplete_cream_cracker'
	event.remove({output: 'apocalypsenow:cream_cracker'})
	event.recipes.create.sequenced_assembly([
		Item.of('8x apocalypsenow:cream_cracker').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:dough']),
		event.recipes.createFilling(incomplete_item, [incomplete_item, {fluidTag: "forge:seed_oil", amount:25}]),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'bakery:yeast']),
		event.recipes.createCutting(incomplete_item, incomplete_item),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)

	// Mac and Cheese
	incomplete_item = 'deceasedcraft:incomplete_macandcheese'
	event.remove({output: 'apocalypsenow:macandcheese'})
	event.recipes.create.sequenced_assembly([
		Item.of('2x apocalypsenow:macandcheese').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'farmersdelight:raw_pasta']),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('minecraft:milk', 25)]),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:flour']),
		event.recipes.createCutting(incomplete_item, incomplete_item),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)

	// Porpsi
	incomplete_item = 'deceasedcraft:incomplete_porpsi'
	baseIngredient = 'apocalypsenow:can'
	event.remove({output: 'apocalypsenow:porpsi'})
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:porpsi').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:nether_wart']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:sugar']),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('minecraft:water', 25)]),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)

	// Coke
	incomplete_item = 'deceasedcraft:incomplete_coke'
	event.remove({output: 'apocalypsenow:coke'})
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:coke').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:blaze_powder']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:sugar']),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('minecraft:water', 25)]),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)
	
	// Energy Drink
	incomplete_item = 'deceasedcraft:incomplete_energy_drink'
	event.remove({output: 'apocalypsenow:energy_drink'})
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:energy_drink').withChance(100.0)
	], baseIngredient, [
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('create:honey', 25)]),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:blaze_powder']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:nether_wart']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:sugar']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)
	
	// Canned Beetroot
	incomplete_item = 'deceasedcraft:incomplete_canned_beetroot'
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:canned_beetroot').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:crops/beetroot']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:crops/beetroot']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)

	// Canned Carrot
	incomplete_item = 'deceasedcraft:incomplete_canned_carrot'
	event.remove({id: 'apocalypsenow:carrotcanned'})
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:canned_carrot').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:crops/carrot']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:crops/carrot']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)
	
	// Canned Strawberry
	incomplete_item = 'deceasedcraft:incomplete_canned_strawberry'
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:canned_strawberry').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:fruits/strawberries']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:fruits/strawberries']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)
	
	// Canned Melon
	incomplete_item = 'deceasedcraft:incomplete_canned_melon'
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:canned_melon').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:melon_slice']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:melon_slice']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)
	
	// Canned Tomato
	incomplete_item = 'deceasedcraft:incomplete_canned_tomatos'
	event.remove({id: 'apocalypsenow:porkcanned'})
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:canned_tomatos').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:crops/tomato']),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:crops/tomato']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)
	
	// Canned Pork
	incomplete_item = 'deceasedcraft:incomplete_canned_pork'
	event.remove({id: 'apocalypsenow:unpackofpork'})
	event.remove({id: 'apocalypsenow:porkcanned'})
	event.shapeless('9x apocalypsenow:canned_pork', [
		'apocalypsenow:pack_of_canned_pork'
	])
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:canned_pork').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:porkchop']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)
	
	// Canned Rabbit Soup
	incomplete_item = 'deceasedcraft:incomplete_canned_rabbit_soup'
	event.remove({id: 'apocalypsenow:rabbitsoupcanned'})
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:canned_rabbit_soup').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:rabbit']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)

	// Canned Fish
	incomplete_item = 'deceasedcraft:incomplete_canned_fish'
	event.recipes.create.sequenced_assembly([
		Item.of('apocalypsenow:canned_fish').withChance(100.0)
	], baseIngredient, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:raw_fishes']),
		event.recipes.createPressing(incomplete_item, incomplete_item)
	]).transitionalItem(incomplete_item).loops(1)

})