// Swords
ServerEvents.recipes(event => {
	let AddSwordRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		' V ',
		' V ',
		" I "
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddSwordMechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput, specialInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		' V ',
		'XZX',
		" V ",
		" I ",
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput,
		Z: specialInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddSwordRecipe("minecraft:iron_sword", "#forge:ingots/iron", "#forge:rods/iron")
	AddSwordRecipe("immersiveengineering:sword_steel", "#forge:ingots/steel", "#forge:rods/steel")

	AddSwordMechcanicalRecipe("minecraft:diamond_sword", "#forge:ingots/steel", "#forge:rods/steel", "createaddition:diamond_grit", "#forge:ingots/steel")
	AddSwordMechcanicalRecipe("minecraft:netherite_sword", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:ingots/steel")
	AddSwordMechcanicalRecipe("create_sa:rose_quartz_sword", "#forge:ingots/steel", "#forge:rods/steel", "create:polished_rose_quartz", "#forge:ingots/steel")
	AddSwordMechcanicalRecipe("apocalypsenow:tactical_sword", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap", "deceasedcraft:high_carbon_steel_alloy")
	AddSwordMechcanicalRecipe("apocalypsenow:tactical_saber", "#forge:ingots/steel", "#forge:rods/iron", "minecraft:netherite_scrap", "deceasedcraft:high_carbon_steel_alloy")
})
