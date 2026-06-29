StartupEvents.registry('item', event => {
	
	// Just a display item for advancement
	event.create('deceasedcraft:advancement_suburb_residential')
		.texture('deceasedcraft:item/advancement_suburb_residential') 
		.maxStackSize(1)
		.rarity('common')
		
	event.create('deceasedcraft:advancement_highrise_office')
		.texture('deceasedcraft:item/advancement_highrise_office') 
		.maxStackSize(1)
		.rarity('common')
		
	event.create('deceasedcraft:advancement_highrise_residential')
		.texture('deceasedcraft:item/advancement_highrise_residential') 
		.maxStackSize(1)
		.rarity('common')
		
	event.create('deceasedcraft:advancement_highrise_hotel')
		.texture('deceasedcraft:item/advancement_highrise_hotel') 
		.maxStackSize(1)
		.rarity('common')
		
	event.create('deceasedcraft:advancement_retail_district')
		.texture('deceasedcraft:item/advancement_retail_district') 
		.maxStackSize(1)
		.rarity('common')
		
	event.create('deceasedcraft:advancement_wasteland')
		.texture('deceasedcraft:item/advancement_wasteland') 
		.maxStackSize(1)
		.rarity('common')
		
	event.create('deceasedcraft:horde_calendar')
		.texture('deceasedcraft:item/horde_calendar') 
		.maxStackSize(1)
		.rarity('common')
		
	event.create('deceasedcraft:survivor_radar')
		.texture('deceasedcraft:item/survivor_radar') 
		.maxStackSize(1)
		.rarity('common')
})

ItemEvents.modification(event => {
	
	event.modify('immersiveengineering:glider', item => { 
		item.setMaxDamage(320.0)
	})

})