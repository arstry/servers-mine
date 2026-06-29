ServerEvents.recipes(event => {

	event.remove({output: 'dragnvehicles:car'})
	event.recipes.create.mechanical_crafting('dragnvehicles:car', [
		'GSVC',
		'IIII'
	  ], {
		I: 'dragnvehicles:wheel',
		G: 'createdieselgenerators:diesel_engine',
		S: 'dragnvehicles:car_body',
		V: 'immersiveengineering:metal_barrel',
		C: '#forge:chests'
	})
	
	event.remove({output: 'dragnvehicles:classic'})
	event.recipes.create.mechanical_crafting('dragnvehicles:classic', [
		'GSVC',
		'IIII'
	  ], {
		I: 'dragnvehicles:wheel',
		G: 'createdieselgenerators:diesel_engine',
		S: 'dragnvehicles:classic_body',
		V: 'immersiveengineering:metal_barrel',
		C: '#forge:chests'
	})
	
	event.remove({output: 'dragnvehicles:motorcycle'})
	event.recipes.create.mechanical_crafting('dragnvehicles:motorcycle', [
		'GSVC',
		'IIII'
	  ], {
		I: 'dragnvehicles:wheel',
		G: 'createdieselgenerators:diesel_engine',
		S: 'dragnvehicles:motorcycle_body',
		V: 'create:fluid_tank',
		C: '#forge:chests'
	})
	
	event.remove({output: 'dragnvehicles:suv'})
	event.recipes.create.mechanical_crafting('dragnvehicles:suv', [
		'GSVC',
		'IIII'
	  ], {
		I: 'deceasedcraft:big_wheel',
		G: 'createdieselgenerators:large_diesel_engine',
		S: 'dragnvehicles:suv_body',
		V: 'immersiveengineering:metal_barrel',
		C: '#forge:chests'
	})
	
	event.remove({output: 'dragnvehicles:sport_car'})
	event.recipes.create.mechanical_crafting('dragnvehicles:sport_car', [
		'GSVC',
		'IIII'
	  ], {
		I: 'dragnvehicles:sports_wheel',
		G: 'createdieselgenerators:large_diesel_engine',
		S: 'dragnvehicles:sport_car_body',
		V: 'immersiveengineering:metal_barrel',
		C: '#forge:chests'
	})

	event.remove({output: 'dragnvehicles:truck'})
	event.recipes.create.mechanical_crafting('dragnvehicles:truck', [
		'GSVC',
		'IIII'
	  ], {
		I: 'deceasedcraft:big_wheel',
		G: 'createdieselgenerators:huge_diesel_engine',
		S: 'dragnvehicles:truck_body',
		V: 'immersiveengineering:metal_barrel',
		C: '#forge:chests'
	})
})