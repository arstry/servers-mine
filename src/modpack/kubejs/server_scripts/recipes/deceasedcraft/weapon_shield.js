// Shields
ServerEvents.recipes(event => {
	let AddShieldRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'VVV',
		'VIV',
		" V "
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddShieldMechcanicalRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'VVV',
		'VIV',
		" V "
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddShieldRecipe("apocalypsenow:stopsign_shield", "#forge:plates/iron", "#forge:dyes/red")
	AddShieldRecipe("apocalypsenow:trash_shield", "#forge:plates/iron", "#forge:plates/iron")

	AddShieldMechcanicalRecipe("apocalypsenow:police_shield", "#forge:plates/steel", "#forge:plates/plastic")
	AddShieldMechcanicalRecipe("apocalypsenow:riot_shield", "#forge:plates/plastic", "#forge:plates/steel")
	AddShieldMechcanicalRecipe("immersiveengineering:shield", "#forge:plates/steel", "#forge:plates/steel")
	AddShieldMechcanicalRecipe("apocalypsenow:ballistic_shield", "minecraft:netherite_scrap", "#forge:plates/plastic")
})
