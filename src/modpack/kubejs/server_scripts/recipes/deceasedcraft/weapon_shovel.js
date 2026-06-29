// Shovels
ServerEvents.recipes(event => {
	let AddShovelRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		' V ',
		' I ',
		" I "
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddShovelMechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'XVX',
		' I ',
		" I ",
		" I "
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddShovelRecipe("minecraft:iron_shovel", "#forge:ingots/iron", "#forge:rods/iron")
	AddShovelRecipe("apocalypsenow:construction_shovel", "#forge:ingots/iron", "#forge:rods/iron")
	
	AddShovelRecipe("immersiveengineering:shovel_steel", "#forge:ingots/steel", "#forge:rods/steel")
	AddShovelRecipe("apocalypsenow:snow_shovel", "#forge:ingots/steel", "#forge:rods/steel")

	AddShovelMechcanicalRecipe("minecraft:diamond_shovel", "#forge:ingots/steel", "#forge:rods/steel", "createaddition:diamond_grit")
	AddShovelMechcanicalRecipe("create_sa:rose_quartz_shovel", "#forge:ingots/steel", "#forge:rods/steel", "create:polished_rose_quartz")
	AddShovelMechcanicalRecipe("create_sa:blazing_shovel", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:blaze_powder")
	AddShovelMechcanicalRecipe("minecraft:netherite_shovel", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap")
	AddShovelMechcanicalRecipe("apocalypsenow:military_shovel", "deceasedcraft:high_carbon_steel_alloy", "#forge:rods/steel", "minecraft:netherite_scrap")
})
