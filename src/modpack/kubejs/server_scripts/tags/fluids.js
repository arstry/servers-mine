ServerEvents.tags('fluid', event => {
	event.add('forge:seed_oil', 'createaddition:seed_oil')
	event.add('forge:seed_oil', 'immersiveengineering:plantoil')
	event.add('forge:diesel', 'createdieselgenerators:diesel')
	event.add('forge:gasoline', 'createdieselgenerators:gasoline')
})