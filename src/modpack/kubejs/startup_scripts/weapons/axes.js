let $UUID = Java.loadClass('java.util.UUID')

let $string = Java.loadClass('java.lang.String')

function replaceAttribute(attributeString, value, item) {
	let attributeList = item.getAttributes(attributeString)
	if (!attributeList.isEmpty()) {
		attributeList.forEach(attr => {
			item.removeAttribute(attributeString, attr.id)
		})
	}
	let staticID = $UUID.nameUUIDFromBytes($string.valueOf(item + "-" + attributeString).getBytes())
	item.addAttribute(attributeString, staticID, attributeString, value, 'addition')
}

ItemEvents.modification(event => {
	event.modify('minecraft:wooden_axe', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -3.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(61.0)
	})
	event.modify('minecraft:stone_axe', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -3.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(131.0)
	})
	event.modify('create_sa:zinc_axe', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -3.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(161.0)
	})
	event.modify('create_sa:copper_axe', item => { 
		replaceAttribute("generic.attack_damage", 8.0, item)
		replaceAttribute("generic.attack_speed", -3.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(161.0)
	})
	event.modify('minecraft:iron_axe', item => { 
		replaceAttribute("generic.attack_damage", 9.0, item)
		replaceAttribute("generic.attack_speed", -3.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(250.0)
	})
	event.modify('create_sa:brass_axe', item => { 
		replaceAttribute("generic.attack_damage", 9.0, item)
		replaceAttribute("generic.attack_speed", -3.1, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(324.0)
	})
	event.modify('apocalypsenow:hand_axe', item => { 
		replaceAttribute("generic.attack_damage", 11.0, item)
		replaceAttribute("generic.attack_speed", -3.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(324.0)
	})
	event.modify('apocalypsenow:survival_axe', item => { 
		replaceAttribute("generic.attack_damage", 8.5, item)
		replaceAttribute("generic.attack_speed", -2.9, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(324.0)
	})
	event.modify('apocalypsenow:tourist_axe', item => { 
		replaceAttribute("generic.attack_damage", 7.5, item)
		replaceAttribute("generic.attack_speed", -2.9, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(392.0)
	})
	event.modify('apocalypsenow:ice_axe', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.8, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(612.0)
	})
	event.modify('apocalypsenow:gardening_axe', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(463.0)
	})
	event.modify('apocalypsenow:construction_axe', item => { 
		replaceAttribute("generic.attack_damage", 9.0, item)
		replaceAttribute("generic.attack_speed", -2.8, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(463.0)
	})
	event.modify('apocalypsenow:fire_axe', item => { 
		replaceAttribute("generic.attack_damage", 13.0, item)
		replaceAttribute("generic.attack_speed", -3.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(894.0)
	})
	event.modify('apocalypsenow:emergency_axe', item => { 
		replaceAttribute("generic.attack_damage", 10.0, item)
		replaceAttribute("generic.attack_speed", -2.8, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(894.0)
	})
	event.modify('apocalypsenow:wooden_fire_axe', item => { 
		replaceAttribute("generic.attack_damage", 9.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(894.0)
	})
	event.modify('apocalypsenow:lumber_jack_axe', item => { 
		replaceAttribute("generic.attack_damage", 11.0, item)
		replaceAttribute("generic.attack_speed", -3.0, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(624.0)
	})
	event.modify('apocalypsenow:red_lumberjack_axe', item => { 
		replaceAttribute("generic.attack_damage", 11.0, item)
		replaceAttribute("generic.attack_speed", -3.0, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(624.0)
	})
	event.modify('immersiveengineering:axe_steel', item => { 
		replaceAttribute("generic.attack_damage", 11.0, item)
		replaceAttribute("generic.attack_speed", -3.0, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(894.0)
	})
	event.modify('minecraft:diamond_axe', item => { 
		replaceAttribute("generic.attack_damage", 13.0, item)
		replaceAttribute("generic.attack_speed", -3.0, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(1241.0)
	})
	event.modify('create_sa:rose_quartz_axe', item => { 
		replaceAttribute("generic.attack_damage", 12.0, item)
		replaceAttribute("generic.attack_speed", -2.8, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(1241.0)
	})
	event.modify('minecraft:netherite_axe', item => { 
		replaceAttribute("generic.attack_damage", 15.0, item)
		replaceAttribute("generic.attack_speed", -3.1, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(2031.0)
	})
	event.modify('apocalypsenow:combat_axe', item => { 
		replaceAttribute("generic.attack_damage", 17.0, item)
		replaceAttribute("generic.attack_speed", -2.9, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(2651.0)
	})
	event.modify('apocalypsenow:electrical_combat_axe', item => { 
		replaceAttribute("generic.attack_damage", 18.0, item)
		replaceAttribute("generic.attack_speed", -2.8, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(2885.0)
	})

})