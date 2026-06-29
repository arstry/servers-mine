// Knives
ServerEvents.recipes(event => {
	let AddKnifeRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'V  ',
		' I '
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddNetheriteKnifeMechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput, specialInput, dyeInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'VX ',
		'XZD',
		" ZI"
		], {
		V: mainInput,
		I: secondaryInput,
		X: thirdInput,
		Z: specialInput,
		D: dyeInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddKnifeRecipe("apocalypsenow:bread_knife", "#forge:nuggets/iron", "#forge:nuggets/iron")
	AddKnifeRecipe("apocalypsenow:cutter_knife", "#forge:nuggets/iron", "#forge:nuggets/iron")
	AddKnifeRecipe("apocalypsenow:scissors", "#forge:nuggets/iron", "#forge:ingots/iron")
	AddKnifeRecipe("apocalypsenow:scissorst", "#forge:nuggets/iron", "#forge:ingots/iron")
	AddKnifeRecipe("apocalypsenow:shiv", "#forge:nuggets/iron", "#forge:ingots/iron")
	AddKnifeRecipe("apocalypsenow:scalpel", "#forge:nuggets/iron", "#forge:ingots/iron")

	AddKnifeRecipe("apocalypsenow:switch_knife", "#forge:nuggets/steel", "#forge:ingots/steel")
	AddKnifeRecipe("apocalypsenow:knife", "#forge:ingots/steel", "#forge:ingots/steel")
	AddKnifeRecipe("apocalypsenow:chefs_knife", "#forge:ingots/steel", "#forge:ingots/steel")
	AddKnifeRecipe("apocalypsenow:kitchen_knife", "#forge:ingots/steel", "#forge:ingots/steel")
	AddKnifeRecipe("apocalypsenow:hunting_knife", "#forge:ingots/steel", "#forge:ingots/steel")
	AddKnifeRecipe("apocalypsenow:long_knife", "#forge:ingots/steel", "#forge:ingots/steel")
	AddKnifeRecipe("apocalypsenow:expedition_knife", "#forge:ingots/steel", "#forge:ingots/steel")
	AddKnifeRecipe("apocalypsenow:stilettoknife", "#forge:ingots/steel", "#forge:ingots/steel")
	AddKnifeRecipe("apocalypsenow:mk_knife", "#forge:ingots/steel", "#forge:ingots/steel")
	AddKnifeRecipe("apocalypsenow:english_punch_knife", "#forge:ingots/steel", "#forge:ingots/steel")

	AddNetheriteKnifeMechcanicalRecipe("apocalypsenow:combat_survival_knife", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:ingots/steel", "#forge:dyes/brown")
	AddNetheriteKnifeMechcanicalRecipe("apocalypsenow:combat_knife", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:ingots/steel", "#forge:dyes/green")
	AddNetheriteKnifeMechcanicalRecipe("apocalypsenow:dagger", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:ingots/steel", "#forge:dyes/black")
	AddNetheriteKnifeMechcanicalRecipe("apocalypsenow:butterfly_knife", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:ingots/steel", "#forge:dyes/red")
	AddNetheriteKnifeMechcanicalRecipe("apocalypsenow:military_knife", "deceasedcraft:high_carbon_steel_alloy", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:ingots/steel", "#forge:dyes/lime")
	AddNetheriteKnifeMechcanicalRecipe("apocalypsenow:tactical_knife", "deceasedcraft:high_carbon_steel_alloy", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:ingots/steel", "#forge:dyes/green")
})
