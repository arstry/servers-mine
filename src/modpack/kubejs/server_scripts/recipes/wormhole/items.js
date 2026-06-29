ServerEvents.recipes(event => {
	
	event.remove({output: 'wormhole:portal_stabilizer'})
	event.recipes.create.mechanical_crafting('wormhole:portal_stabilizer', [
		'XIX',
		'QYV',
		'XIX'
	  ], {
		I: 'create_new_age:netherite_magnet',
		Y: 'minecraft:nether_star',
		X: 'minecraft:netherite_scrap',
		Q: 'refinedstorage:network_transmitter',
		V: 'refinedstorage:network_receiver'
	  })
	  
	event.remove({output: 'wormhole:target_device'})
	event.recipes.create.mechanical_crafting('wormhole:target_device', [
		'  I',
		'XVX',
		'XQX'
	], {
		I: '#refinedstorage:wireless_transmitter',
		V: 'minecraft:ender_pearl',
		Q: 'refinedstorage:advanced_processor',
		X: 'minecraft:netherite_scrap',
	})
	  
	event.remove({output: 'wormhole:portal_frame'})
	event.recipes.create.mechanical_crafting('wormhole:portal_frame', [
		'XOX',
		'OVO',
		'XOX'
	], {
		V: 'minecraft:obsidian',
		O: 'immersiveengineering:ingot_lead',
		X: 'minecraft:netherite_scrap',
	})
	  
	event.remove({output: 'wormhole:basic_energy_cell'})
	event.recipes.create.mechanical_crafting('wormhole:basic_energy_cell', [
		'XXXX',
		'XOVX',
		'XVOX',
		'XXXX'
	], {
		V: 'immersiveengineering:wire_electrum',
		O: 'immersiveengineering:capacitor_hv',
		X: 'minecraft:netherite_scrap',
	})
	
	event.remove({output: 'wormhole:advanced_energy_cell'})
	event.recipes.create.mechanical_crafting('wormhole:advanced_energy_cell', [
		'XXXX',
		'XOVX',
		'XVOX',
		'XXXX'
	], {
		V: 'immersiveengineering:wire_electrum',
		O: 'wormhole:basic_energy_cell',
		X: 'minecraft:netherite_scrap',
	})
	  
	event.remove({output: 'wormhole:basic_target_cell'})
	event.recipes.create.mechanical_crafting('wormhole:basic_target_cell', [
		'XIX',
		'VYQ',
		'XIX'
	  ], {
		I: 'create_new_age:netherite_magnet',
		Y: 'refinedstorage:64k_storage_block',
		X: 'minecraft:netherite_scrap',
		Q: 'refinedstorage:network_transmitter',
		V: 'refinedstorage:network_receiver'
	  })
	  
	event.remove({output: 'wormhole:advanced_target_cell'})
	event.recipes.create.mechanical_crafting('wormhole:advanced_target_cell', [
		'XIX',
		'VYQ',
		'XIX'
	  ], {
		I: 'create_new_age:netherite_magnet',
		Y: 'wormhole:basic_target_cell',
		X: 'minecraft:netherite_scrap',
		Q: 'refinedstorage:network_transmitter',
		V: 'refinedstorage:network_receiver'
	  })
})