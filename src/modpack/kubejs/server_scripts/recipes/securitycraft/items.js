ServerEvents.recipes(event => {
	
	event.remove({output: 'securitycraft:briefcase'})
	event.shaped("securitycraft:briefcase", [
		'III',
		'VAV',
		'VVV'
	  ], {
		A: "securitycraft:keypad_chest",
		I: "#forge:rods/aluminum",
		V: "#forge:leather"
	  })

	  
	event.remove({output: 'securitycraft:camera_monitor'})
	event.shaped("securitycraft:camera_monitor", [
		'VCV',
		'IAF',
		'VDV'
	  ], {
		A: "#forge:glass_panes",
		I: "#forge:wires/electrum",
		V: "#forge:plates/aluminum",
		D: "refueled:battery",
		C: "refinedstorage:wireless_transmitter",
		F: "immersiveengineering:component_electronic_adv"
	  })
	  
	event.remove({output: 'securitycraft:codebreaker'})
	event.shaped("securitycraft:codebreaker", [
		'VCV',
		'IAF',
		'DVD'
	  ], {
		A: "minecraft:nether_star",
		I: "#forge:wires/electrum",
		V: "#forge:plates/aluminum",
		D: "refinedstorage:advanced_processor",
		C: "refinedstorage:wireless_transmitter",
		F: "immersiveengineering:component_electronic_adv"
	  })
	  
	event.remove({output: 'securitycraft:display_case'})
	event.shaped("securitycraft:display_case", [
		'VVV',
		'VAF',
		'VVV'
	  ], {
		A: "minecraft:item_frame",
		V: "#forge:plates/iron",
		F: "#forge:glass_panes"
	  })
	  
	event.remove({output: 'securitycraft:glow_display_case'})
	event.shaped("securitycraft:glow_display_case", [
		'VVV',
		'VAF',
		'VVV'
	  ], {
		A: "minecraft:glow_item_frame",
		V: "#forge:plates/iron",
		F: "#forge:glass_panes"
	  })
	  
	event.remove({output: 'securitycraft:keycard_holder'})
	event.shaped("securitycraft:keycard_holder", [
		'V V',
		'FVF'
	  ], {
		V: "#forge:plates/iron",
		F: "#forge:leather"
	  })

	let keycardRecipe = (outputItem, primaryInput, secondaryInput, thirdInput, fourthInput) => {
		event.remove({output: outputItem})
		event.shaped(outputItem, [
			'XXX',
			'IJK'
		], {
			X: primaryInput,
			I: secondaryInput,
			J: thirdInput,
			K: fourthInput
		})
	}

	keycardRecipe("securitycraft:keycard_lv1", "#forge:plates/plastic", "#forge:dyes/yellow", "#forge:dusts/redstone", "#forge:leather")
	keycardRecipe("securitycraft:keycard_lv2", "#forge:plates/plastic", "#forge:dyes/orange", "#forge:dusts/redstone", "#forge:leather")
	keycardRecipe("securitycraft:keycard_lv3", "#forge:plates/plastic", "#forge:dyes/red", "#forge:dusts/redstone", "#forge:leather")
	keycardRecipe("securitycraft:keycard_lv4", "#forge:plates/plastic", "#forge:dyes/pink", "#forge:dusts/redstone", "#forge:leather")
	keycardRecipe("securitycraft:keycard_lv5", "#forge:plates/plastic", "#forge:dyes/purple", "#forge:dusts/redstone", "#forge:leather")
	keycardRecipe("securitycraft:limited_use_keycard", "#forge:plates/plastic", "#forge:dyes/blue", "#forge:dusts/redstone", "#forge:leather")


	event.remove({output: 'securitycraft:keypad_item'})
	event.shaped("securitycraft:keypad_item", [
		'VIA',
		'VDA',
		'VFA'
	  ], {
		A: "#forge:plates/aluminum",
		I: "#forge:wires/electrum",
		V: "#minecraft:buttons",
		D: "refinedstorage:advanced_processor",
		F: "immersiveengineering:component_electronic_adv"
	  })

	  
	event.remove({output: 'securitycraft:keycard_lock'})
	event.shaped("securitycraft:keycard_lock", [
		'VA'
	  ], {
		A: "#forge:ingots/iron",
		V: "securitycraft:keypad_item",
	  })

	  
	event.remove({output: 'securitycraft:remote_access_mine'})
	event.shaped("securitycraft:remote_access_mine", [
		'VAV',
		'IIF',
		'VDV'
	  ], {
		A: "refinedstorage:wireless_transmitter",
		I: "#forge:wires/electrum",
		V: "#forge:plates/aluminum",
		D: "refinedstorage:advanced_processor",
		F: "immersiveengineering:component_electronic_adv"
	  })
	  
	event.remove({output: 'securitycraft:rift_stabilizer'})
	event.shaped("securitycraft:rift_stabilizer", [
		'IAI',
		'FDF',
		'VVV'
	  ], {
		A: "minecraft:ender_pearl",
		I: "#forge:wires/electrum",
		V: "#forge:storage_blocks/iron",
		D: "refinedstorage:advanced_processor",
		F: "immersiveengineering:component_electronic_adv"
	  })
	  
	event.remove({output: 'securitycraft:sonic_security_system'})
	event.shaped("securitycraft:sonic_security_system", [
		'A',
		'I',
		'V'
	  ], {
		A: "securitycraft:portable_radar",
		I: "#forge:rods/iron",
		V: "#forge:storage_blocks/iron"
	  })
	  
	event.remove({output: 'securitycraft:portable_radar'})
	event.shaped("securitycraft:portable_radar", [
		'IVI',
		'VFV',
		'IVI'
	  ], {
		I: "#forge:plates/electrum",
		V: "minecraft:redstone_torch",
		F: "refinedstorage:improved_processor"
	  })
	  
	event.remove({output: 'securitycraft:smart_module'})
	event.shaped("securitycraft:smart_module", [
		'VVV',
		'VDV',
		'VFV'
	  ], {
		V: "#forge:ingots/iron",
		D: "minecraft:paper",
		F: "refinedstorage:improved_processor"
	  })
	  
	event.remove({output: 'securitycraft:block_change_detector'})
	event.shaped("securitycraft:block_change_detector", [
		'VIV',
		'VDV',
		'VVV'
	  ], {
		I: "minecraft:redstone_torch",
		V: "#forge:ingots/iron",
		D: "refinedstorage:improved_processor"
	  })
	  
	event.remove({output: 'securitycraft:username_logger'})
	event.shaped("securitycraft:username_logger", [
		'VIV',
		'VDV',
		'VVV'
	  ], {
		I: "securitycraft:portable_radar",
		V: "#forge:ingots/iron",
		D: "refinedstorage:improved_processor"
	  })

	  
	event.remove({output: 'securitycraft:bouncing_betty'})
	event.shaped("securitycraft:bouncing_betty", [
		' I ',
		'VDV'
	  ], {
		I: "minecraft:heavy_weighted_pressure_plate",
		V: "#forge:ingots/iron",
		D: "apocalypsenow:gunpowder_can"
	  })

	event.remove({output: 'securitycraft:mine'})
	event.shaped("securitycraft:mine", [
		' I ',
		'VDV'
	], {
		I: "minecraft:redstone",
		V: "minecraft:heavy_weighted_pressure_plate",
		D: "apocalypsenow:land_mine"
	})

	event.remove({output: 'securitycraft:keycard_reader'})
	event.shaped("securitycraft:keycard_reader", [
		'VVV',
		'VDV',
		'VIV'
	  ], {
		I: "minecraft:hopper",
		V: "#forge:ingots/iron",
		D: "refinedstorage:improved_processor"
	})
  
	event.remove({output: 'securitycraft:inventory_scanner'})
	event.shaped("securitycraft:inventory_scanner", [
		'VVV',
		'VDV',
		'VIV'
	  ], {
		I: "#forge:chests",
		V: "#forge:ingots/iron",
		D: "refinedstorage:improved_processor"
	})
  
	event.remove({output: 'securitycraft:laser_block'})
	event.shaped("securitycraft:laser_block", [
		'VIV',
		'VDV',
		'VFV'
	  ], {
		I: "securitycraft:portable_radar",
		V: "#forge:ingots/iron",
		D: "refinedstorage:advanced_processor",
		F: "minecraft:redstone_block"
	})
  
	event.remove({output: 'securitycraft:projector'})
	event.shaped("securitycraft:projector", [
		'VVV',
		'DFI',
		'VVV'
	  ], {
		I: "securitycraft:portable_radar",
		V: "#forge:ingots/iron",
		D: "refinedstorage:improved_processor",
		F: "immersiveengineering:light_bulb"
	})
  
	event.remove({output: 'securitycraft:retinal_scanner'})
	event.shaped("securitycraft:retinal_scanner", [
		'VVV',
		'DFI',
		'VVV'
	  ], {
		I: "securitycraft:portable_radar",
		V: "#forge:ingots/iron",
		D: "refinedstorage:improved_processor",
		F: "minecraft:ender_pearl"
	})
	
	event.remove({output: 'securitycraft:security_camera'})
	event.shaped("securitycraft:security_camera", [
		'VFV',
		'DIA',
		'KVV'
	  ], {
		I: "#forge:wires/electrum",
		V: "#forge:plates/aluminum",
		D: "immersiveengineering:component_electronic_adv",
		F: "refinedstorage:wireless_transmitter",
		A: "#forge:glass_panes",
		K: "refinedstorage:advanced_processor"
	})
	
	event.remove({output: 'securitycraft:universal_block_reinforcer_lvl1'})
	event.shaped("securitycraft:universal_block_reinforcer_lvl1", [
		'VLG',
		'IKL',
		'FIV'
	  ], {
		I: "#forge:wires/electrum",
		V: "#forge:plates/aluminum",
		F: "#forge:rods/wooden",
		K: "refinedstorage:advanced_processor",
		L: "immersiveengineering:component_electronic_adv",
		G: "minecraft:nether_star"
	})
})