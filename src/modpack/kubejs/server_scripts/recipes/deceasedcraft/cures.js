ServerEvents.recipes(event => {

	// Cures
	// Research Book
	event.shapeless('deceasedcraft:research_book', [
		'#forge:leather',
		'deceasedcraft:research_paper_1',
		'deceasedcraft:research_paper_2',
		'deceasedcraft:research_paper_3',
		'deceasedcraft:research_paper_4',
		'deceasedcraft:research_paper_5'
	])
	.id('deceasedcraft:research_book')

	// Formula X
	let incomplete_item = 'minecraft:glass_bottle'
	event.recipes.create.sequenced_assembly([
		Item.of('deceasedcraft:formula_x').withChance(100.0)
	], incomplete_item, [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'deceasedcraft:research_book']),
		event.recipes.createFilling(incomplete_item, [incomplete_item, Fluid.of('create:honey', 25)]),
		event.recipes.createFilling(incomplete_item, [incomplete_item, {fluidTag: "forge:seed_oil", amount:25}]),
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'deceasedcraft:x_factor'])
	]).transitionalItem(incomplete_item)
	.loops(4)
	.id('deceasedcraft:formula_x')

	// Golden Apple
	event.remove({output: 'minecraft:golden_apple'})
	event.shapeless('minecraft:golden_apple', [
		'minecraft:apple',
		'deceasedcraft:formula_x'
	])
	.id('deceasedcraft:golden_apple')

	/*
	// Necroptor Membrane
	event.remove({output: 'mutationcraft:necroptor_membrane'})
	event.shapeless('3x mutationcraft:necroptor_membrane', [
		'mutationcraft:putrid_brain',
		'mutationcraft:putrid_heart',
		'mutationcraft:putrid_claw'
	])
	.id('deceasedcraft:necroptor_membrane')

	// Mutagen Serum
	event.remove({output: 'mutationcraft:mutagen_serum'})
	event.shapeless('mutationcraft:mutagen_serum', [
		'minecraft:glass_bottle',
		'minecraft:golden_apple',
		'deceasedcraft:x_factor',
		'mutationcraft:necroptor_membrane'
	]).damageIngredient('deceasedcraft:x_factor', 1)
	.id('deceasedcraft:mutagen_serum')
	*/
})