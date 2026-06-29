JEIEvents.hideItems(event => {
	event.hide(/zombie_extreme:.*/)
	event.hide(/undead_revamp2:.*/)
	event.hide(/fancytrinkets:.*/)
	event.hide(/mapperbase:.*/)
	event.hide(/embellishcraft:.*_wooden_crate/)
	event.hide(/createbigcannons:bronze_.*/)
	event.hide(/createbigcannons:unbored_bronze_.*/)
	event.hide('/spawn_egg/')
	global.removal.forEach(itemName => {
		event.hide(itemName)
	})
})
