
// Materials
ServerEvents.recipes(event => {
	event.remove({ output: 'apocalypsenow:cloth' })
	event.shaped('apocalypsenow:cloth', [
		' I ',
		'XOX',
		' X '
	  ], {
		I: 'apocalypsenow:needle',
		X: '#minecraft:wool',
		O: 'minecraft:string'
	})

	event.remove({ output: 'apocalypsenow:needle' })
	event.shaped('apocalypsenow:needle', [
		' X',
		'X '
	  ], {
		X: '#forge:nuggets/iron'
	})
	
	event.remove({ output: 'apocalypsenow:nightvisionmodule' })
	event.shaped('apocalypsenow:nightvisionmodule', [
		'XOX',
		' I '
	  ], {
		X: 'immersiveengineering:component_electronic_adv',
		O: 'immersiveengineering:light_bulb',
		I: '#forge:wires/electrum'
	})
	
	event.remove({ output: 'apocalypsenow:breathingfiltermodule' })
	event.shaped('apocalypsenow:breathingfiltermodule', [
		'XOV',
		' I '
	  ], {
		X: 'deceasedcraft:rubber',
		V: 'immersiveengineering:plate_duroplast',
		O: '#minecraft:wool',
		I: 'minecraft:charcoal'
	})
})

// Money Process
ServerEvents.recipes(event => {
	let incomplete_item = 'minecraft:paper'
	event.remove({output: 'apocalypsenow:money'})
	event.recipes.create.sequenced_assembly([
		Item.of('9x apocalypsenow:money').withChance(100.0)
	], 'minecraft:paper', [
		event.recipes.createDeploying(incomplete_item, [incomplete_item, 'minecraft:emerald']),
		event.recipes.createPressing(incomplete_item, incomplete_item),
	]).transitionalItem(incomplete_item)
	.loops(1)
	.id('deceasedcraft:money')
})

// Blocks
ServerEvents.recipes(event => {
	event.remove({ output: 'apocalypsenow:ventblock' })
	event.shaped('apocalypsenow:ventblock', [
		' X ',
		'X X',
		' X '
	  ], {
		X: '#forge:plates/iron'
	})
	
	event.remove({ output: 'apocalypsenow:corpsesack' })
	event.shaped('apocalypsenow:corpsesack', [
		'XXX',
		'OOO'
	  ], {
		X: '#forge:plates/plastic',
		O: 'apocalypsenow:human_flesh'
	})

	event.remove({ output: 'apocalypsenow:concrete_barrier' })
	event.shaped('apocalypsenow:concrete_barrier', [
		'XXX',
		'XXX'
	  ], {
		X: 'immersiveengineering:concrete'
	})

	event.remove({ output: 'apocalypsenow:concrete_bricks' })
	event.shaped('apocalypsenow:concrete_bricks', [
		'XX',
		'XX'
	  ], {
		X: 'immersiveengineering:concrete_tile'
	})
	
	event.remove({ output: 'apocalypsenow:lined_concrete_barrier' })
	event.shaped('apocalypsenow:lined_concrete_barrier', [
		'XOX',
		'XXX'
	  ], {
		X: 'immersiveengineering:concrete',
		O: '#forge:dyes/yellow'
	})
	
	event.remove({ output: 'apocalypsenow:cardboard_box' })
	event.shaped('apocalypsenow:cardboard_box', [
		'XXX',
		'XOX',
		'XXX'
	  ], {
		X: 'minecraft:paper',
		O: 'minecraft:slime_ball'
	})
	
	event.remove({ output: 'apocalypsenow:sedexbox' })
	event.shaped('apocalypsenow:sedexbox', [
		'XXX',
		'AOX',
		'XXX'
	  ], {
		X: 'minecraft:paper',
		O: 'minecraft:slime_ball',
		A: '#forge:dyes/white'
	})
})

// Items
ServerEvents.recipes(event => {
	event.remove({ output: 'apocalypsenow:can' })
	event.recipes.create.pressing('apocalypsenow:can', '#forge:plates/aluminum')
	
	event.remove({ output: 'apocalypsenow:gunpowder_can' })
	event.shaped('apocalypsenow:gunpowder_can', [
		' X ',
		'XOX',
		' X '
	  ], {
		X: 'minecraft:gunpowder',
		O: 'apocalypsenow:can'
	})
	.id('deceasedcraft:gunpowder_can')
	
	event.remove({ id: 'apocalypsenow:gunpowder' })
	event.shapeless('4x minecraft:gunpowder', [
		'apocalypsenow:gunpowder_can'
	])

	event.remove({ output: 'cgm:grenade' })
	event.shaped('cgm:grenade', [
		'IO',
		'X '
	  ], {
		I: '#forge:nuggets/iron',
		X: 'apocalypsenow:gunpowder_can',
		O: 'immersiveengineering:plate_duroplast'
	})
	.id('deceasedcraft:grenade')
	
	event.remove({ output: 'cgm:stun_grenade' })
	event.shaped('cgm:stun_grenade', [
		'IO',
		'X '
	  ], {
		I: '#forge:nuggets/iron',
		X: 'minecraft:blaze_rod',
		O: 'immersiveengineering:plate_duroplast'
	})
	.id('deceasedcraft:stun_grenade')
})