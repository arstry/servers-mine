ServerEvents.tags('item', event => {
	let casings = [
		'deceasedcraft:bullet_casing_9mm',
		'deceasedcraft:bullet_casing_45acp',
		'deceasedcraft:bullet_casing_ae50',
		'deceasedcraft:bullet_casing_12g',
		'deceasedcraft:bullet_casing_556x45',
		'deceasedcraft:bullet_casing_762x39',
		'deceasedcraft:bullet_casing_338',
		'deceasedcraft:bullet_casing_308',
		'deceasedcraft:bullet_casing_50bmg'
	]

	casings.forEach((casing) => {
		event.add('forge:bullet_casings', casing)
    });
})