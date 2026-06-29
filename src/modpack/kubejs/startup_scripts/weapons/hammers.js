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
	event.modify('apocalypsenow:rubber_hammer', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -1.9, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(199.0)
	})
	event.modify('apocalypsenow:hammer', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -2.3, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(451.0)
	})
	event.modify('apocalypsenow:improvised_hammer', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -2.1, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(451.0)
	})
	event.modify('apocalypsenow:premium_hammer', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(546.0)
	})
	event.modify('apocalypsenow:ballpeen_hammer', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(372.0)
	})
	event.modify('apocalypsenow:meat_hammer', item => { 
		replaceAttribute("generic.attack_damage", 9.0, item)
		replaceAttribute("generic.attack_speed", -2.4, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(819.0)
	})
	event.modify('apocalypsenow:sledge_hammer', item => { 
		replaceAttribute("generic.attack_damage", 17.0, item)
		replaceAttribute("generic.attack_speed", -2.9, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(1573.0)
	})

})