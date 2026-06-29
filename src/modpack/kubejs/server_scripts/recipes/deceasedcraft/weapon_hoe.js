// Hoes
ServerEvents.recipes(event => {
	let AddHoeRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'VV ',
		' I ',
		" I "
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddHoeMechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'VVX',
		'XI ',
		" I ",
		" I ",
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddHoeRecipe("minecraft:iron_hoe", "#forge:ingots/iron", "#forge:rods/iron")
	AddHoeRecipe("immersiveengineering:hoe_steel", "#forge:ingots/steel", "#forge:rods/steel")

	AddHoeMechcanicalRecipe("minecraft:diamond_hoe", "#forge:ingots/steel", "#forge:rods/steel", "createaddition:diamond_grit")
	AddHoeMechcanicalRecipe("minecraft:netherite_hoe", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap")
})
