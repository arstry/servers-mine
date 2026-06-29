function replaceAttribute(attributeString, boost, item) { 
	let attributeList = item.getAttributes(attributeString)
	if (!attributeList.isEmpty()) {
		let attribute = attributeList.get(0)
		item.removeAttribute(attributeString, attribute.id)
		item.addAttribute(attributeString, attribute.id, attribute.name, boost, attribute.operation)
	}
}

ItemEvents.modification(event => {
	event.modify('minecraft:leather_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(55.0)
	})
	event.modify('minecraft:leather_chestplate', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('minecraft:leather_leggings', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(75.0)
	})
	event.modify('minecraft:leather_boots', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(65.0)
	})
	event.modify('apocalypsenow:red_fighting_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:red_fighting_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:red_fighting_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('apocalypsenow:blue_fighting_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:blue_fighting_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:blue_fighting_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('apocalypsenow:nurse_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:nurse_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:nurse_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('apocalypsenow:nurse_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('apocalypsenow:desertghillie_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:desertghillie_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:desertghillie_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('apocalypsenow:desertghillie_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('apocalypsenow:snowghillie_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:snowghillie_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:snowghillie_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('apocalypsenow:snowghillie_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('apocalypsenow:ghilliesuit_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:ghilliesuit_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:ghilliesuit_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('apocalypsenow:ghilliesuit_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('apocalypsenow:anarchy_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(55.0)
	})
	event.modify('apocalypsenow:anarchy_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('apocalypsenow:anarchy_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(75.0)
	})
	event.modify('apocalypsenow:anarchy_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(65.0)
	})
	event.modify('apocalypsenow:forestguard_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:forestguard_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:forestguard_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('apocalypsenow:forestguard_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('minecraft:iron_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('minecraft:iron_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('minecraft:iron_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('minecraft:iron_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('create_sa:copper_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('create_sa:copper_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('create_sa:copper_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('create_sa:copper_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('create_sa:zinc_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('create_sa:zinc_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('create_sa:zinc_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(105.0)
	})
	event.modify('create_sa:zinc_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(80.0)
	})
	event.modify('apocalypsenow:hunting_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:hunting_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:life_jacket_bullet_helmet_chestplate', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:sheriff_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:cowboy_hat_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:old_west_hat_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:jasonmask_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:welding_mask_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.5, item)
		item.setMaxDamage(430.0)
	})
	event.modify('apocalypsenow:balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:white_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:red_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:blue_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:green_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:forest_camo_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:snow_camo_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:urbancamobalaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:desert_camo_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})
	event.modify('apocalypsenow:pink_balaclava_helmet', item => { 
		replaceAttribute("generic.armor", 1.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(70.0)
	})

})