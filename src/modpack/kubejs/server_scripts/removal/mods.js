priority: 1

ServerEvents.recipes(event => {
	global.modRemoval.forEach(modName => {
		event.remove({mod: modName})
	})
})
