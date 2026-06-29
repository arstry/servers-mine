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
	event.modify('apocalypsenow:katana', item => { 
		replaceAttribute("generic.attack_damage", 12.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(2451.0)
	})
	event.modify('apocalypsenow:fire_module_katana', item => { 
		replaceAttribute("generic.attack_damage", 14.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(2451.0)
	})
	event.modify('apocalypsenow:electric_module_katana', item => { 
		replaceAttribute("generic.attack_damage", 14.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.5, item)
		item.setMaxDamage(2451.0)
	})
	event.modify('apocalypsenow:night_stick', item => { 
		replaceAttribute("generic.attack_damage", 3.0, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(600.0)
	})
	event.modify('apocalypsenow:stun_baton', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -1.7999999999999998, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(715.0)
	})
	event.modify('apocalypsenow:electric_baton', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -1.7999999999999998, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(942.0)
	})

})