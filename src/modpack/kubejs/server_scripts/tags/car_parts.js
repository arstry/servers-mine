ServerEvents.tags('item', event => {
	event.add('dragnvehicles:wheels', 'dragnvehicles:wheel')
	event.add('dragnvehicles:wheels', 'dragnvehicles:sports_wheel')

	event.add('deceasedcraft:car_bodies', 'dragnvehicles:car_body')
	event.add('deceasedcraft:car_bodies', 'dragnvehicles:classic_body')
	event.add('deceasedcraft:car_bodies', 'dragnvehicles:suv_body')
	event.add('deceasedcraft:car_bodies', 'dragnvehicles:sport_car_body')
	event.add('deceasedcraft:car_bodies', 'dragnvehicles:truck_body')
	event.add('deceasedcraft:car_bodies', 'dragnvehicles:motorcycle_body')
	
	event.add('deceasedcraft:cars', 'dragnvehicles:car')
	event.add('deceasedcraft:cars', 'dragnvehicles:classic')
	event.add('deceasedcraft:cars', 'dragnvehicles:suv')
	event.add('deceasedcraft:cars', 'dragnvehicles:sport_car')
	event.add('deceasedcraft:cars', 'dragnvehicles:truck')
	event.add('deceasedcraft:cars', 'dragnvehicles:motorcycle')
	
	event.add('deceasedcraft:engines', 'createdieselgenerators:diesel_engine')
	event.add('deceasedcraft:engines', 'createdieselgenerators:large_diesel_engine')
	event.add('deceasedcraft:engines', 'createdieselgenerators:huge_diesel_engine')
	
	event.add('deceasedcraft:vehicle_fuels', 'immersiveengineering:biodiesel_bucket')
	event.add('deceasedcraft:vehicle_fuels', 'createdieselgenerators:biodiesel_bucket')
	event.add('deceasedcraft:vehicle_fuels', 'createdieselgenerators:diesel_bucket')
	event.add('deceasedcraft:vehicle_fuels', 'createdieselgenerators:gasoline_bucket')
})