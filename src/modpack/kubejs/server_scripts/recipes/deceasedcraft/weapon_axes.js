// Axes
ServerEvents.recipes(event => {
	let AddAxeRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'VV ',
		'VI ',
		" I "
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddAxeMechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'VX ',
		'XI ',
		" I "
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddNetheriteAxeMechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput, specialInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'VXZ',
		'XI ',
		"XI ",
		" I ",
		" I "
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput,
		Z: specialInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddAxeRecipe("minecraft:iron_axe", "#forge:ingots/iron", "#forge:rods/iron")
	AddAxeRecipe("apocalypsenow:hand_axe", "#forge:ingots/iron", "#forge:rods/iron")
	AddAxeRecipe("apocalypsenow:survival_axe", "#forge:ingots/iron", "#forge:rods/iron")
	AddAxeRecipe("apocalypsenow:tourist_axe", "#forge:ingots/iron", "#forge:rods/iron")
	AddAxeRecipe("apocalypsenow:ice_axe", "#forge:ingots/iron", "#forge:rods/iron")
	AddAxeRecipe("apocalypsenow:gardening_axe", "#forge:ingots/iron", "#forge:rods/iron")
	AddAxeRecipe("apocalypsenow:wooden_fire_axe", "#forge:ingots/steel", "#forge:rods/wooden")
	AddAxeRecipe("apocalypsenow:lumber_jack_axe", "#forge:ingots/steel", "#forge:rods/wooden")
	AddAxeRecipe("apocalypsenow:red_lumberjack_axe", "#forge:ingots/steel", "#forge:rods/wooden")
	AddAxeRecipe("apocalypsenow:fire_axe", "#forge:ingots/steel", "#forge:rods/steel")
	AddAxeRecipe("apocalypsenow:emergency_axe", "#forge:ingots/steel", "#forge:rods/steel")
	AddAxeRecipe("immersiveengineering:axe_steel", "#forge:ingots/steel", "#forge:rods/steel")

	AddAxeMechcanicalRecipe("minecraft:diamond_axe", "#forge:ingots/steel", "#forge:rods/steel", "createaddition:diamond_grit")
	AddAxeMechcanicalRecipe("create_sa:rose_quartz_axe", "#forge:ingots/steel", "#forge:rods/steel", "create:polished_rose_quartz")

	AddNetheriteAxeMechcanicalRecipe("minecraft:netherite_axe", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:ingots/steel")
	AddNetheriteAxeMechcanicalRecipe("apocalypsenow:combat_axe", "deceasedcraft:high_carbon_steel_alloy", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:ingots/steel")

	// Electrical Module Combat Axe
	event.remove({output: 'apocalypsenow:electrical_combat_axe'})
	event.shapeless('apocalypsenow:electrical_combat_axe', ['apocalypsenow:combat_axe', 'apocalypsenow:electrical_module']).id("deceasedcraft:electrical_combat_axe")
})
