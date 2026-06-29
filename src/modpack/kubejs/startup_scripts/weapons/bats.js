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
	event.modify('apocalypsenow:baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(120.0)
	})
	event.modify('apocalypsenow:spiked_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(180.0)
	})
	event.modify('apocalypsenow:wrapped_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -2.4, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:wired_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.4, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:saw_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 10.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(245.0)
	})
	event.modify('apocalypsenow:electrical_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 8.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(304.0)
	})
	event.modify('apocalypsenow:iron_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 9.0, item)
		replaceAttribute("generic.attack_speed", -2.4, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(560.0)
	})
	event.modify('apocalypsenow:spiked_iron_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 10.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(624.0)
	})
	event.modify('apocalypsenow:laminated_iron_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 13.0, item)
		replaceAttribute("generic.attack_speed", -2.1, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(1427.0)
	})
	event.modify('apocalypsenow:flame_module_iron_baseball_bat', item => { 
		replaceAttribute("generic.attack_damage", 14.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(1427.0)
	})

})