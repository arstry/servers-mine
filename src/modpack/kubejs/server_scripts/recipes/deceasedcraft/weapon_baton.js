// Batons
ServerEvents.recipes(event => {
	let AddBatonRecipe = (outputItem, mainInput, secondaryInput, specialInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'Z  ',
		' V ',
		"  I"
		], {
		I: secondaryInput,
		V: mainInput,
		Z: specialInput
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddBatonRecipe("apocalypsenow:night_stick", "#forge:rods/iron", "#forge:rods/iron", "#forge:rods/iron")
	AddBatonRecipe("apocalypsenow:stun_baton", "#forge:ingots/steel", "#forge:rods/steel", "#forge:rods/steel")
	AddBatonRecipe("apocalypsenow:electric_baton", "#forge:ingots/steel", "#forge:rods/steel", "apocalypsenow:electrical_module")
})
