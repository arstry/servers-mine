// Bats
ServerEvents.recipes(event => {
	let AddBatRecipe = (outputItem, mainInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'IV ',
		'VI ',
		"  I"
		], {
		I: secondaryInput,
		V: mainInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}

	let AddT2MechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'XV ',
		'VI ',
		"  I"
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}

	let AddT3MechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput, specialInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'IV ',
		'VIX',
		"XIZ",
		" ZI",
		"  I"
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput,
		Z: specialInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddBatRecipe("apocalypsenow:baseball_bat", "#minecraft:planks", "#minecraft:planks")
	AddBatRecipe("apocalypsenow:spiked_baseball_bat", "#forge:ingots/iron", "#minecraft:planks")
	AddBatRecipe("apocalypsenow:wrapped_baseball_bat", "apocalypsenow:cloth", "#minecraft:planks")
	AddBatRecipe("apocalypsenow:wired_baseball_bat", "#forge:wires/iron", "#minecraft:planks")
	AddBatRecipe("apocalypsenow:saw_baseball_bat", "immersiveengineering:sawblade", "#minecraft:planks")
	AddBatRecipe("apocalypsenow:electrical_baseball_bat", "apocalypsenow:electrical_module", "#minecraft:planks")
	
	AddBatRecipe("apocalypsenow:iron_baseball_bat", "#forge:ingots/iron", "#forge:rods/iron")

	AddT2MechcanicalRecipe("apocalypsenow:spiked_iron_baseball_bat", "#forge:plates/steel", "#forge:rods/steel", "#forge:ingots/steel")
	AddT3MechcanicalRecipe("apocalypsenow:laminated_iron_baseball_bat", "#forge:plates/steel", "#forge:rods/steel", "minecraft:netherite_scrap", "#forge:plates/steel")
	
	// Fire Module Bat
	event.remove({output: 'apocalypsenow:flame_module_iron_baseball_bat'})
	event.shapeless('apocalypsenow:flame_module_iron_baseball_bat', ['apocalypsenow:laminated_iron_baseball_bat', 'apocalypsenow:fire_module']).id("deceasedcraft:flame_module_iron_baseball_bat")
})
