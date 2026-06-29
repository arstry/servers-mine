ServerEvents.recipes(event => {

	event.remove({output: 'dragnvehicles:car_body'})
	event.recipes.create.mechanical_crafting('dragnvehicles:car_body', [
		'IIII  ',
		'IGGI  ',
		'PIISSS',
		'PPIIII'
	  ], {
		I: '#forge:plates/aluminum',
		P: '#forge:plates/plastic',
		G: '#forge:glass',
		S: '#forge:plates/steel'
	  })
	
	event.remove({output: 'dragnvehicles:classic_body'})
	event.recipes.create.mechanical_crafting('dragnvehicles:classic_body', [
	'IIII  ',
	'IGGI  ',
	'PIISSS',
	'PPIIII'
	], {
	I: '#forge:plates/aluminum',
	P: '#forge:plates/plastic',
	G: '#forge:glass',
	S: '#forge:plates/steel'
	})
	
	event.remove({output: 'dragnvehicles:motorcycle_body'})
	event.recipes.create.mechanical_crafting('dragnvehicles:motorcycle_body', [
		'II   ',
		'PGIVV',
		'PPIIS'
	  ], {
		I: '#forge:plates/aluminum',
		V: '#forge:dyes/white',
		P: '#forge:plates/plastic',
		G: '#forge:glass',
		S: '#forge:plates/steel'
	  })

	// SUV Body
	  event.remove({output: 'dragnvehicles:suv_body'})
	event.recipes.create.mechanical_crafting('dragnvehicles:suv_body', [
		'III   ',
		'IGGIVV',
		'PIISSS',
		'PPIIII'
	  ], {
		I: '#forge:plates/aluminum',
		V: '#forge:dyes/white',
		P: '#forge:plates/plastic',
		G: '#forge:glass',
		S: '#forge:plates/steel'
	  })

	// Pickup Truck Body
	event.remove({output: 'dragnvehicles:truck_body'})
	event.recipes.create.mechanical_crafting('dragnvehicles:truck_body', [
		'III   ',
		'IGIVVV',
		'PIISSS',
		'PPIIII'
	  ], {
		I: '#forge:plates/aluminum',
		V: '#forge:dyes/white',
		P: '#forge:plates/plastic',
		G: '#forge:glass',
		S: '#forge:plates/steel'
	  })

	// Sports Car Body
	event.remove({output: 'dragnvehicles:sport_car_body'})
	event.recipes.create.mechanical_crafting("dragnvehicles:sport_car_body", [
		'II    ',
		'IGV   ',
		'PIISSV',
		'PPIIII'
	  ], {
		I: '#forge:plates/aluminum',
		V: '#forge:dyes/white',
		P: '#forge:plates/plastic',
		G: '#forge:glass',
		S: '#forge:plates/steel'
	  })
})