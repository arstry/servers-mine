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
	event.modify('apocalypsenow:club', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 2.0, item)
		item.setMaxDamage(230.0)
	})
	event.modify('apocalypsenow:club_with_saw', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.7, item)
		replaceAttribute("apoc_patches:headshot", 2.0, item)
		item.setMaxDamage(365.0)
	})
	event.modify('apocalypsenow:nailed_club', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.8, item)
		replaceAttribute("apoc_patches:headshot", 2.0, item)
		item.setMaxDamage(324.0)
	})
	event.modify('apocalypsenow:pipe', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.8, item)
		replaceAttribute("apoc_patches:headshot", 2.0, item)
		item.setMaxDamage(721.0)
	})
	event.modify('apocalypsenow:pipe_wrench', item => { 
		replaceAttribute("generic.attack_damage", 8.0, item)
		replaceAttribute("generic.attack_speed", -3.0, item)
		replaceAttribute("apoc_patches:headshot", 2.0, item)
		item.setMaxDamage(721.0)
	})
	event.modify('apocalypsenow:mace', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 2.0, item)
		item.setMaxDamage(1050.0)
	})
	event.modify('apocalypsenow:tatical_mace', item => { 
		replaceAttribute("generic.attack_damage", 10.0, item)
		replaceAttribute("generic.attack_speed", -2.5, item)
		replaceAttribute("apoc_patches:headshot", 2.0, item)
		item.setMaxDamage(1852.0)
	})
	event.modify('apocalypsenow:electrical_tactical_mace', item => { 
		replaceAttribute("generic.attack_damage", 12.0, item)
		replaceAttribute("generic.attack_speed", -2.4, item)
		replaceAttribute("apoc_patches:headshot", 2.0, item)
		item.setMaxDamage(2144.0)
	})

})