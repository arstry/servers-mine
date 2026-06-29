function replaceAttribute(attributeString, boost, item) { 
	let attributeList = item.getAttributes(attributeString)
	if (!attributeList.isEmpty()) {
		let attribute = attributeList.get(0)
		item.removeAttribute(attributeString, attribute.id)
		item.addAttribute(attributeString, attribute.id, attribute.name, boost, attribute.operation)
	}
}

ItemEvents.modification(event => {
	event.modify('immersiveengineering:armor_steel_head', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(231.0)
	})
	event.modify('immersiveengineering:armor_steel_chest', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(336.0)
	})
	event.modify('immersiveengineering:armor_steel_legs', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(315.0)
	})
	event.modify('immersiveengineering:armor_steel_feet', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(273.0)
	})
	event.modify('apocalypsenow:us_army_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:us_army_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:us_army_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:us_army_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:canadian_army_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:canadian_army_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:canadian_army_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:canadian_army_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:mexican_army_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:mexican_army_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:mexican_army_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:mexican_army_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:chinese_army_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:chinese_army_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:chinese_army_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:chinese_army_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:russian_army_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:russian_army_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:russian_army_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:russian_army_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:japanese_army_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:japanese_army_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:japanese_army_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:japanese_army_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:british_army_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:british_army_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:british_army_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:british_army_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:usa_armor_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:usa_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:usa_armor_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:usa_armor_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:italian_bersaglieri_army_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:italian_bersaglieri_army_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:italian_bersaglieri_army_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:italian_bersaglieri_army_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:brazilian_army_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:brazilian_army_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:brazilian_army_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:brazilian_army_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:hazmat_suit_helmet', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:hazmat_suit_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:hazmat_suit_leggings', item => { 
		replaceAttribute("generic.armor", 4.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:hazmat_suit_boots', item => { 
		replaceAttribute("generic.armor", 3.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:un_armor_helmet', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:un_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:un_armor_leggings', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:un_armor_boots', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:military_riot_armor_helmet', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:military_riot_armor_chestplate', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:military_riot_armor_leggings', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:military_riot_armor_boots', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:military_urban_helmet', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:military_urban_chestplate', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:military_urban_leggings', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:military_urban_boots', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('apocalypsenow:hazmat_suit_helmet', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:hazmat_suit_chestplate', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('apocalypsenow:hazmat_suit_leggings', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(410.0)
	})
	event.modify('apocalypsenow:hazmat_suit_boots', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 1.0, item)
		item.setMaxDamage(395.0)
	})
	event.modify('create_sa:copper_jetpack_chestplate', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(287.0)
	})
	event.modify('create_sa:andesite_jetpack_chestplate', item => { 
		replaceAttribute("generic.armor", 5.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('create_sa:brass_jetpack_chestplate', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(440.0)
	})
	event.modify('create_sa:netherite_jetpack_chestplate', item => { 
		replaceAttribute("generic.armor", 8.0, item)
		replaceAttribute("generic.armor_toughness", 3.0, item)
		item.setMaxDamage(607.0)
	})
	event.modify('create_sa:copper_exoskeleton_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(393.0)
	})
	event.modify('create_sa:andesite_exoskeleton_chestplate', item => { 
		replaceAttribute("generic.armor", 6.0, item)
		replaceAttribute("generic.armor_toughness", 2.0, item)
		item.setMaxDamage(558.0)
	})
	event.modify('create_sa:brass_exoskeleton_chestplate', item => { 
		replaceAttribute("generic.armor", 7.0, item)
		replaceAttribute("generic.armor_toughness", 0.0, item)
		item.setMaxDamage(558.0)
	})

})