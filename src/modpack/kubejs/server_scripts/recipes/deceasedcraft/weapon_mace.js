// Maces
ServerEvents.recipes(event => {
	let AddMaceRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'V  ',
		'VI ',
		"  I"
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddMaceMechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput, specialInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'ZX  ',
		'VI  ',
		"X I ",
		"   I",
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput,
		Z: specialInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddMaceRecipe("apocalypsenow:club", "#minecraft:planks", "#minecraft:planks")
	AddMaceRecipe("apocalypsenow:club_with_saw", "immersiveengineering:sawblade", "#minecraft:planks")
	AddMaceRecipe("apocalypsenow:nailed_club", "#forge:ingots/iron", "#minecraft:planks")
	AddMaceRecipe("apocalypsenow:pipe", "#forge:ingots/iron", "#forge:rods/iron")
	AddMaceRecipe("apocalypsenow:pipe_wrench", "#forge:ingots/iron", "#forge:rods/iron")
	AddMaceRecipe("apocalypsenow:mace", "#forge:ingots/steel", "#forge:rods/steel")

	AddMaceMechcanicalRecipe("apocalypsenow:tatical_mace", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap", "deceasedcraft:high_carbon_steel_alloy")
	
	// Electric Module Mace
	event.remove({output: 'apocalypsenow:electrical_tactical_mace'})
	event.shapeless('apocalypsenow:electrical_tactical_mace', ['apocalypsenow:tatical_mace', 'apocalypsenow:electrical_module']).id("deceasedcraft:electrical_tactical_mace")
})
