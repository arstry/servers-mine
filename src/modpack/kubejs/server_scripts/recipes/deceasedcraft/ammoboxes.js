
// Create Recipes
ServerEvents.recipes(event => {

	event.remove({output: 'tacz:ammo_box'})

	// Iron Ammo Box
	var boxNbt = {Level: NBT.i(0)}
	event.shaped(Item.of('tacz:ammo_box', boxNbt), [
		'XXX',
		'XOX',
		'XXX'
	], {
		X: '#forge:plates/aluminum',
		O: '#forge:storage_blocks/iron'
	}).id("deceasedcraft:iron_ammo_box_recipe")
	
	// Gold Ammo Box
	boxNbt = {Level: NBT.i(1)}
	event.shaped(Item.of('tacz:ammo_box', boxNbt), [
		'XXX',
		'XOX',
		'XXX'
	], {
		X: '#forge:plates/aluminum',
		O: '#forge:storage_blocks/gold'
	}).id("deceasedcraft:gold_ammo_box_recipe")
	
	// Diamond Ammo Box
	boxNbt = {Level: NBT.i(2)}
	event.shaped(Item.of('tacz:ammo_box', boxNbt), [
		'XXX',
		'XOX',
		'XXX'
	], {
		X: '#forge:plates/aluminum',
		O: '#forge:storage_blocks/diamond'
	}).id("deceasedcraft:diamond_ammo_box_recipe")
})