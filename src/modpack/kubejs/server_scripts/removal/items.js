priority: 1

ServerEvents.recipes(event => {
	global.removal.forEach(itemName => {
		event.remove({output: itemName})
		event.remove({input: itemName})
	})

	event.remove({ id: 'tacz:gunpowder' })
})