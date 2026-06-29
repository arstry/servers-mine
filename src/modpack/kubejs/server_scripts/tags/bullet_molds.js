ServerEvents.tags('item', event => {
	let molds = [
		'deceasedcraft:mold_bullet_casing_9mm',
		'deceasedcraft:mold_bullet_casing_45acp',
		'deceasedcraft:mold_bullet_casing_ae50',
		'deceasedcraft:mold_bullet_casing_12g',
		'deceasedcraft:mold_bullet_casing_556x45',
		'deceasedcraft:mold_bullet_casing_762x39',
		'deceasedcraft:mold_bullet_casing_338',
		'deceasedcraft:mold_bullet_casing_308',
		'deceasedcraft:mold_bullet_casing_50bmg'
	]

	molds.forEach((mold) => {
		event.add('forge:bullet_molds', mold)
    });
})