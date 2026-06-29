// Machetes
ServerEvents.recipes(event => {
	let AddMacheteRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'V  ',
		'VI ',
		" VI"
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddNetheriteMacheteMechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput, specialInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'V  ',
		'XI ',
		"XI ",
		" XI",
		" ZI"
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput,
		Z: specialInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddMacheteRecipe("apocalypsenow:machete", "#forge:ingots/iron", "#forge:rods/iron")
	AddMacheteRecipe("apocalypsenow:cleaver", "#forge:ingots/iron", "#forge:rods/iron")
	AddMacheteRecipe("apocalypsenow:black_cleaver", "#forge:ingots/iron", "#forge:rods/iron")
	AddMacheteRecipe("apocalypsenow:serrated_machete", "#forge:ingots/iron", "#forge:rods/iron")
	AddMacheteRecipe("apocalypsenow:hawkbill_machete", "#forge:ingots/iron", "#forge:rods/iron")
	AddMacheteRecipe("apocalypsenow:taiga_1_survival_machete", "#forge:ingots/steel", "#forge:rods/wooden")
	AddMacheteRecipe("apocalypsenow:heavy_machete", "#forge:ingots/steel", "#forge:rods/steel")
	AddMacheteRecipe("apocalypsenow:bowie_machete", "#forge:ingots/steel", "#forge:rods/steel")

	AddNetheriteMacheteMechcanicalRecipe("apocalypsenow:tactical_machete", "deceasedcraft:high_carbon_steel_alloy", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:ingots/steel")
	AddNetheriteMacheteMechcanicalRecipe("apocalypsenow:kukri_machete", "deceasedcraft:high_carbon_steel_alloy", "#forge:plates/steel", "minecraft:netherite_scrap", "#forge:ingots/steel")
	
	// Fire Module Machete
	event.remove({output: 'apocalypsenow:fire_module_machete'})
	event.shapeless('apocalypsenow:fire_module_machete', ['apocalypsenow:combat_axe', 'apocalypsenow:fire_module']).id("deceasedcraft:fire_module_machete")
})
