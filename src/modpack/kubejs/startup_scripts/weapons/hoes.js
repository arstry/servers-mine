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
	event.modify('minecraft:stone_hoe', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -2.4, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(131.0)
	})
	event.modify('create_sa:zinc_hoe', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(250.0)
	})
	event.modify('create_sa:copper_hoe', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(131.0)
	})
	event.modify('create_sa:brass_hoe', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -1.7999999999999998, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(450.0)
	})
	event.modify('minecraft:iron_hoe', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(250.0)
	})
	event.modify('minecraft:diamond_hoe', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(1024.0)
	})
	event.modify('immersiveengineering:hoe_steel', item => { 
		replaceAttribute("generic.attack_damage", 8.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(819.0)
	})
	event.modify('minecraft:netherite_hoe', item => { 
		replaceAttribute("generic.attack_damage", 9.0, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(1573.0)
	})

})