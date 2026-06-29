function replaceAttribute(attributeString, boost, item) { 
	let attributeList = item.getAttributes(attributeString)
	if (!attributeList.isEmpty()) {
		let attribute = attributeList.get(0)
		item.removeAttribute(attributeString, attribute.id)
		item.addAttribute(attributeString, attribute.id, attribute.name, boost, attribute.operation)
	}
}

ItemEvents.modification(event => {
	event.modify('minecraft:chainmail_helmet', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(140.0)
	})
	event.modify('minecraft:chainmail_chestplate', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(210.0)
	})
	event.modify('minecraft:chainmail_leggings', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(185.0)
	})
	event.modify('minecraft:chainmail_boots', item => { 
		replaceAttribute("generic.armor", 2.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(150.0)
	})
	event.modify('apocalypsenow:construction_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(190.0)
	})
	event.modify('apocalypsenow:construction_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(260.0)
	})
	event.modify('apocalypsenow:construction_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:construction_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:police_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(190.0)
	})
	event.modify('apocalypsenow:police_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(260.0)
	})
	event.modify('apocalypsenow:police_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:police_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:fire_figther_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(190.0)
	})
	event.modify('apocalypsenow:fire_figther_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(260.0)
	})
	event.modify('apocalypsenow:fire_figther_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:fire_figther_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:yellow_football_armor_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(190.0)
	})
	event.modify('apocalypsenow:yellow_football_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(260.0)
	})
	event.modify('apocalypsenow:yellow_football_armor_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:yellow_football_armor_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:red_football_armor_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(190.0)
	})
	event.modify('apocalypsenow:red_football_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(260.0)
	})
	event.modify('apocalypsenow:red_football_armor_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:red_football_armor_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:black_football_armor_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(190.0)
	})
	event.modify('apocalypsenow:black_football_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(260.0)
	})
	event.modify('apocalypsenow:black_football_armor_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:black_football_armor_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:blue_football_armor_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(190.0)
	})
	event.modify('apocalypsenow:blue_football_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(260.0)
	})
	event.modify('apocalypsenow:blue_football_armor_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:blue_football_armor_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:army_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(190.0)
	})
	event.modify('apocalypsenow:army_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(260.0)
	})
	event.modify('apocalypsenow:army_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:army_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:royal_canada_police_officer_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(190.0)
	})
	event.modify('apocalypsenow:royal_canada_police_officer_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(260.0)
	})
	event.modify('apocalypsenow:royal_canada_police_officer_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(235.0)
	})
	event.modify('apocalypsenow:royal_canada_police_officer_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(200.0)
	})

})