ServerEvents.recipes(event => {
	let armorPartRecipe = (input, output, firstMaterial, secondMaterial, thirdMaterial, blueprint) => {
		let slicedOutputName = output.split(":")[1]
		let incomplete_item = 'deceasedcraft:incomplete_' + slicedOutputName
		event.recipes.create.sequenced_assembly([
			Item.of(output).withChance(100.0)
		], input, [
			event.recipes.createDeploying(incomplete_item, [incomplete_item, blueprint]).keepHeldItem(),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, firstMaterial]),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, secondMaterial]),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, thirdMaterial])
		]).transitionalItem(incomplete_item)
		.loops(4)
		.id('deceasedcraft:' + slicedOutputName + '_recipe')
	}

	armorPartRecipe('immersiveengineering:sheetmetal_iron', 'deceasedcraft:basic_armor_component', '#forge:ingots/copper', '#forge:rods/iron', '#forge:plates/iron', 'deceasedcraft:basic_armor_component_blueprint')
	armorPartRecipe('deceasedcraft:basic_armor_component', 'deceasedcraft:intermediate_armor_component', '#forge:ingots/gold', '#forge:rods/steel', '#forge:plates/steel', 'deceasedcraft:intermediate_armor_component_blueprint')
	armorPartRecipe('deceasedcraft:intermediate_armor_component', 'deceasedcraft:advanced_armor_component', '#forge:ingots/nickel', 'minecraft:netherite_scrap', '#forge:plates/steel', 'deceasedcraft:advanced_armor_component_blueprint')
})