ServerEvents.recipes(event => {
	event.remove({output: 'sophisticatedbackpacks:upgrade_base'})
	event.shaped('sophisticatedbackpacks:upgrade_base', [
		'ABA', 
		'BCB',
		'ABA'
	  ], {
		A: 'minecraft:string', 
		B: '#forge:plates/iron',
		C: '#forge:leather'
	  }
	)

	event.remove({output: 'sophisticatedbackpacks:everlasting_upgrade'})
	event.shaped('sophisticatedbackpacks:everlasting_upgrade', [
		'ABA', 
		'BCB',
		'ABA'
	  ], {
		A: 'minecraft:blaze_powder', 
		B: 'minecraft:ghast_tear',
		C: 'sophisticatedbackpacks:upgrade_base'
	  }
	)
})