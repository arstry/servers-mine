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
	event.modify('minecraft:wooden_sword', item => { 
		replaceAttribute("generic.attack_damage", 1.0, item)
		replaceAttribute("generic.attack_speed", -2.7, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(59.0)
	})
	event.modify('minecraft:stone_sword', item => { 
		replaceAttribute("generic.attack_damage", 2.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(131.0)
	})
	event.modify('create_sa:zinc_sword', item => { 
		replaceAttribute("generic.attack_damage", 2.0, item)
		replaceAttribute("generic.attack_speed", -2.5, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(250.0)
	})
	event.modify('create_sa:copper_sword', item => { 
		replaceAttribute("generic.attack_damage", 3.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(131.0)
	})
	event.modify('create_sa:brass_sword', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -2.3, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(450.0)
	})
	event.modify('minecraft:iron_sword', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -2.5, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(641.0)
	})
	event.modify('minecraft:diamond_sword', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.4, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(819.0)
	})
	event.modify('immersiveengineering:sword_steel', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.5, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(1024.0)
	})
	event.modify('create_sa:rose_quartz_sword', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -1.7999999999999998, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(1024.0)
	})
	event.modify('minecraft:netherite_sword', item => { 
		replaceAttribute("generic.attack_damage", 8.0, item)
		replaceAttribute("generic.attack_speed", -2.4, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(1651.0)
	})
	event.modify('apocalypsenow:tactical_sword', item => { 
		replaceAttribute("generic.attack_damage", 11.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(2142.0)
	})
	event.modify('apocalypsenow:tactical_saber', item => { 
		replaceAttribute("generic.attack_damage", 10.0, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(2142.0)
	})

})