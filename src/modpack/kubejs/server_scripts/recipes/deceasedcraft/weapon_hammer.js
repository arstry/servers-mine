// Hammers
ServerEvents.recipes(event => {
	let AddHammerRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'VV ',
		' I '
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddSteelHammerMechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput, specialInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'VV ',
		'VIX',
		"  I"
		], {
		V: mainInput,
		I: secondaryInput,
		X: thirdInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddHammerRecipe("apocalypsenow:rubber_hammer", "deceasedcraft:rubber", "#forge:rods/iron")
	AddHammerRecipe("apocalypsenow:hammer", "#forge:ingots/iron", "#forge:rods/iron")
	AddHammerRecipe("apocalypsenow:improvised_hammer", "#forge:ingots/iron", "#forge:rods/iron")
	AddHammerRecipe("apocalypsenow:premium_hammer", "#forge:ingots/iron", "#forge:rods/iron")
	AddHammerRecipe("apocalypsenow:ballpeen_hammer", "#forge:ingots/iron", "#forge:rods/iron")

	AddSteelHammerMechcanicalRecipe("apocalypsenow:meat_hammer", "#forge:ingots/steel", "#forge:rods/steel")
	AddSteelHammerMechcanicalRecipe("apocalypsenow:sledge_hammer", "minecraft:netherite_scrap", "#forge:rods/steel", "#forge:dyes/black")
})
