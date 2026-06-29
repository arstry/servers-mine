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
	event.modify('apocalypsenow:red_boxing_gloves', item => { 
		replaceAttribute("generic.attack_damage", 2.0, item)
		replaceAttribute("generic.attack_speed", -1.6, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:blue_boxing_gloves', item => { 
		replaceAttribute("generic.attack_damage", 2.0, item)
		replaceAttribute("generic.attack_speed", -1.6, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(200.0)
	})
	event.modify('apocalypsenow:reinforced_red_boxing_gloves', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -1.4, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(512.0)
	})
	event.modify('apocalypsenow:reinforced_blue_boxing_gloves', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -1.4, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(512.0)
	})
	event.modify('apocalypsenow:brass_knuckles', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -1.4, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(756.0)
	})

})