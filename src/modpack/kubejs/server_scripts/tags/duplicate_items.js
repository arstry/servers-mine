
priority: 0

ServerEvents.tags('item', event => {
	event.remove('forge:storage_blocks/steel', 'mapperbase:steel_block')
	event.remove('createbigcannons:block_steel', 'mapperbase:steel_block')
	event.remove('forge:ingots/steel', 'mapperbase:steel_ingot')
	event.remove('forge:nuggets/steel', 'mapperbase:steel_nugget')
	event.remove('forge:nuggets/steel', 'createbigcannons:steel_scrap')
	event.remove('forge:plates/steel', 'mapperbase:steel_plate')
	event.remove('forge:rods/steel', 'mapperbase:steel_rod')
})