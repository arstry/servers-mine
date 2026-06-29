// Pickaxes
ServerEvents.recipes(event => {
	let AddPickaxeRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'VVV',
		' I ',
		" I "
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddMechanicalPickaxeRecipe = (outputItem, mainInput, secondaryInput, thirdInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'XVX',
		' I ',
		" I "
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	let AddNetheritePickaxeMechcanicalRecipe = (outputItem, mainInput, secondaryInput, specialInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'KVVVK',
		'  I  ',
		"  I  ",
		"  I  "
		], {
		I: secondaryInput,
		V: mainInput,
		K: specialInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddPickaxeRecipe("minecraft:iron_pickaxe", "#forge:ingots/iron", "#forge:rods/iron")
	AddMechanicalPickaxeRecipe("immersiveengineering:pickaxe_steel", "#forge:ingots/iron", "#forge:rods/iron", "#forge:ingots/steel")
	AddMechanicalPickaxeRecipe("minecraft:diamond_pickaxe", "#forge:ingots/steel", "#forge:rods/steel", "createaddition:diamond_grit")

	AddNetheritePickaxeMechcanicalRecipe("minecraft:netherite_pickaxe", "#forge:ingots/steel", "#forge:rods/steel", "minecraft:netherite_scrap")
})
