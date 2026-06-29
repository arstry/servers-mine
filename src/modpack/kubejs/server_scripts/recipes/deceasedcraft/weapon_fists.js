// Axes
ServerEvents.recipes(event => {
	let AddFistRecipe = (outputItem, mainInput, secondaryInput, thirdInput, dye) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'XY',
		'VI'
		], {
		V: mainInput,
		I: secondaryInput,
		X: thirdInput,
		Y: dye
		}).id('deceasedcraft:' + slicedOutputName + '_recipe')
	}
	
	AddFistRecipe('apocalypsenow:red_boxing_gloves', 'apocalypsenow:cloth', 'minecraft:string', '#minecraft:wool', "#forge:dyes/red")
	AddFistRecipe('apocalypsenow:blue_boxing_gloves', 'apocalypsenow:cloth', 'minecraft:string', '#minecraft:wool', "#forge:dyes/blue")
	
	AddFistRecipe('apocalypsenow:reinforced_red_boxing_gloves', 'apocalypsenow:cloth', 'minecraft:string', '#forge:plates/iron', "#forge:dyes/red")
	AddFistRecipe('apocalypsenow:reinforced_blue_boxing_gloves', 'apocalypsenow:cloth', 'minecraft:string', '#forge:plates/iron', "#forge:dyes/blue")
	
	AddFistRecipe('apocalypsenow:brass_knuckles', 'apocalypsenow:cloth', '#forge:plates/steel', '#forge:plates/brass', "minecraft:string")
})
