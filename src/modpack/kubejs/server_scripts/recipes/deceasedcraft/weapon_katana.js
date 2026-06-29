// Katanas
ServerEvents.recipes(event => {
	let AddKatanaMechcanicalRecipe = (outputItem, mainInput, secondaryInput, thirdInput, specialInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'  XV',
		' ZVX',
		"XVZ ",
		"IX  ",
		], {
		I: secondaryInput,
		V: mainInput,
		X: thirdInput,
		Z: specialInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddKatanaMechcanicalRecipe("apocalypsenow:katana", "deceasedcraft:high_carbon_steel_alloy", "#forge:rods/steel", "minecraft:netherite_scrap", "minecraft:blaze_powder")

	
	// Katana Fire Module
	event.remove({output: 'apocalypsenow:fire_module_katana'})
	event.shapeless('apocalypsenow:fire_module_katana', ['apocalypsenow:katana', 'apocalypsenow:fire_module']).id("deceasedcraft:fire_module_katana")
	
	// Katana Electric Module
	event.remove({output: 'apocalypsenow:electric_module_katana'})
	event.shapeless('apocalypsenow:electric_module_katana', ['apocalypsenow:katana', 'apocalypsenow:electrical_module']).id("deceasedcraft:electric_module_katana")
})
