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
	event.modify('minecraft:wooden_shovel', item => { 
		replaceAttribute("generic.attack_damage", 3.0, item)
		replaceAttribute("generic.attack_speed", -3.4, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(59.0)
	})
	event.modify('minecraft:stone_shovel', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -3.1, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(131.0)
	})
	event.modify('create_sa:copper_shovel', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -3.1, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(164.0)
	})
	event.modify('create_sa:zinc_shovel', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -3.0, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(243.0)
	})
	event.modify('create_sa:brass_shovel', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -2.7, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(450.0)
	})
	event.modify('minecraft:iron_shovel', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -3.1, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(512.0)
	})
	event.modify('apocalypsenow:construction_shovel', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -2.9, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(512.0)
	})
	event.modify('immersiveengineering:shovel_steel', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.9, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(641.0)
	})
	event.modify('apocalypsenow:snow_shovel', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -3.1, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(641.0)
	})
	event.modify('minecraft:diamond_shovel', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.9, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(1561.0)
	})
	event.modify('create_sa:blazing_shovel', item => { 
		replaceAttribute("generic.attack_damage", 5.5, item)
		replaceAttribute("generic.attack_speed", -2.9, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(450.0)
	})
	event.modify('create_sa:rose_quartz_shovel', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.8, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(1644.0)
	})
	event.modify('minecraft:netherite_shovel', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.9, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(2031.0)
	})
	event.modify('apocalypsenow:military_shovel', item => { 
		replaceAttribute("generic.attack_damage", 8.0, item)
		replaceAttribute("generic.attack_speed", -2.7, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(2451.0)
	})

})