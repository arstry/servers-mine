ServerEvents.recipes(event => {

	let gunPartRecipe = (input, output, specialMaterial, blueprint) => {
		let slicedOutputName = output.split(":")[1]
		let incomplete_item = 'deceasedcraft:incomplete_' + slicedOutputName
		event.recipes.create.sequenced_assembly([
			Item.of(output).withChance(100.0)
		], input, [
			event.recipes.createDeploying(incomplete_item, [incomplete_item, blueprint]).keepHeldItem(),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:rods/steel']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:plates/steel']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, 'createbigcannons:recoil_spring']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, 'immersiveengineering:component_steel']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, specialMaterial])
		]).transitionalItem(incomplete_item)
		.loops(4)
		.id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let attachmentRecipe = (input, output, specialMaterial, blueprint) => {
		let slicedOutputName = output.split(":")[1]
		let incomplete_item = 'deceasedcraft:incomplete_' + slicedOutputName
		event.recipes.create.sequenced_assembly([
			Item.of(output).withChance(100.0)
		], input, [
			event.recipes.createDeploying(incomplete_item, [incomplete_item, blueprint]).keepHeldItem(),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:rods/steel']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:plates/steel']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, 'immersiveengineering:component_steel']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, specialMaterial])
		]).transitionalItem(incomplete_item)
		.loops(1)
		.id('deceasedcraft:' + slicedOutputName + '_recipe')
	}

	gunPartRecipe('apocalypsenow:cardboard_box', 'deceasedcraft:pistol_assembly_parts', '#forge:ingots/iron', 'deceasedcraft:pistol_assembly_parts_blueprint')
	gunPartRecipe('apocalypsenow:cardboard_box', 'deceasedcraft:smg_assembly_parts', '#forge:ingots/iron', 'deceasedcraft:smg_assembly_parts_blueprint')
	gunPartRecipe('apocalypsenow:cardboard_box', 'deceasedcraft:shotgun_assembly_parts', '#forge:ingots/steel', 'deceasedcraft:shotgun_assembly_parts_blueprint')
	gunPartRecipe('apocalypsenow:cardboard_box', 'deceasedcraft:rifle_assembly_parts', '#forge:ingots/steel', 'deceasedcraft:rifle_assembly_parts_blueprint')
	gunPartRecipe('apocalypsenow:cardboard_box', 'deceasedcraft:sniper_assembly_parts', 'minecraft:netherite_scrap', 'deceasedcraft:sniper_assembly_parts_blueprint')
	gunPartRecipe('apocalypsenow:cardboard_box', 'deceasedcraft:hmg_assembly_parts', 'minecraft:netherite_scrap', 'deceasedcraft:hmg_assembly_parts_blueprint')
	gunPartRecipe('apocalypsenow:cardboard_box', 'deceasedcraft:special_assembly_parts', 'minecraft:netherite_scrap', 'deceasedcraft:special_assembly_parts_blueprint')

	attachmentRecipe('apocalypsenow:cardboard_box', 'deceasedcraft:attachment_assembly_parts', 'deceasedcraft:rubber', 'deceasedcraft:attachment_assembly_parts_blueprint')
})