ServerEvents.recipes(event => {
	
	event.remove({output: 'simpleplanes:parachute'})
	event.shaped('simpleplanes:parachute', [
		'XXX',
		'I I',
		' I '
	  ], {
		I: 'immersiveengineering:hemp_fabric',
		X: 'immersiveengineering:hemp_fiber'
	  })
	  
	event.remove({output: 'simpleplanes:healing'})
	event.shaped('simpleplanes:healing', [
		'I I',
		' X ',
		' I '
	], {
		I: '#forge:ingots/iron',
		X: '#forge:rods/steel'
	})
	  
	event.remove({output: 'simpleplanes:seats'})
	event.recipes.create.mechanical_crafting('simpleplanes:seats', [
		'II II',
		'IX XI',
		' YYY '
	  ], {
		I: '#minecraft:planks',
		X: '#forge:rods/aluminum',
		Y: '#forge:plates/aluminum'
	  })
	  
	event.remove({output: 'simpleplanes:armor'})
	event.recipes.create.mechanical_crafting('simpleplanes:armor', [
		'IIXII',
		'X   X',
		'I   I'
	  ], {
		I: '#forge:plates/aluminum',
		X: '#forge:plates/steel'
	  })
	  
	event.remove({output: 'simpleplanes:electric_engine'})
	event.recipes.create.mechanical_crafting('simpleplanes:electric_engine', [
		' OOO ',
		'OIXIO',
		'OXBXO',
		'OIXIO',
		' OOO '
	  ], {
		I: '#forge:wires/electrum',
		X: 'immersiveengineering:component_electronic',
		O: '#forge:plates/aluminum',
		B: 'immersive_aircraft:engine'
	  })

	event.remove({output: 'simpleplanes:furnace_engine'})
	event.recipes.create.mechanical_crafting('simpleplanes:furnace_engine', [
		' OOO ',
		'OIXIO',
		'OXBXO',
		'OICIO',
		' OOO '
	  ], {
		I: '#forge:wires/electrum',
		X: 'immersiveengineering:component_electronic',
		O: '#forge:plates/aluminum',
		B: 'immersive_aircraft:engine',
		C: 'immersive_aircraft:boiler'
	  })
	  
	event.remove({output: 'simpleplanes:liquid_engine'})
	event.recipes.create.mechanical_crafting('simpleplanes:liquid_engine', [
		' OOO ',
		'OIFIO',
		'OXBXO',
		'OICIO',
		' OOO '
	  ], {
		I: '#forge:wires/electrum',
		X: 'immersiveengineering:component_electronic',
		O: '#forge:plates/aluminum',
		B: 'immersive_aircraft:engine',
		C: 'immersive_aircraft:boiler',
		F: 'create:fluid_tank'
	  })
	  
	event.remove({output: 'simpleplanes:propeller'})
	event.recipes.create.mechanical_crafting('simpleplanes:propeller', [
		'  O  ',
		' IOI ',
		'OOBOO',
		' IOI ',
		'  O  '
	  ], {
		I: '#forge:wires/electrum',
		O: '#forge:plates/aluminum',
		B: '#create:casing'
	  })
	  
	event.remove({output: 'simpleplanes:booster'})
	event.recipes.create.mechanical_crafting('simpleplanes:booster', [
		'  O  ',
		' IOI ',
		'OOBOO',
		' IOI ',
		'  O  '
	  ], {
		I: '#forge:plates/aluminum',
		O: '#forge:rods/aluminum',
		B: 'immersive_aircraft:enhanced_propeller'
	  })
	  
	event.remove({output: 'simpleplanes:solar_panel'})
	event.recipes.create.mechanical_crafting('simpleplanes:solar_panel', [
		' OGO ',
		'OIVIO',
		'GVBVG',
		'OIVIO',
		' OGO '
	  ], {
		I: '#forge:silicon',
		O: '#forge:plates/copper',
		V: '#forge:wires/electrum',
		G: '#forge:glass',
		B: 'immersiveengineering:component_electronic'
	  })

	event.remove({output: 'simpleplanes:shooter'})
	event.recipes.create.mechanical_crafting('simpleplanes:shooter', [
		'OC ',
		'IB ',
		'  B',
	  ], {
		I: '#forge:wires/electrum',
		O: 'minecraft:dispenser',
		B: '#forge:rods/steel',
		C: 'minecraft:flint_and_steel'
	  })
	  
	event.remove({output: 'simpleplanes:charging_station'})
	event.recipes.create.mechanical_crafting('simpleplanes:charging_station', [
		' OGO ',
		'OIVIO',
		'GVBVG',
		'OIVIO',
		' OGO '
	  ], {
		I: 'immersiveengineering:component_electronic',
		O: '#forge:plates/aluminum',
		V: '#forge:wires/electrum',
		G: '#forge:plates/copper',
		B: 'immersiveengineering:capacitor_mv'
	  })
})