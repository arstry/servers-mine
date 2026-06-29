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
	event.modify('apocalypsenow:machete', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.7, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(240.0)
	})
	event.modify('apocalypsenow:cleaver', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.7, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(267.0)
	})
	event.modify('apocalypsenow:black_cleaver', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.8, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(313.0)
	})
	event.modify('apocalypsenow:serrated_machete', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.8, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(321.0)
	})
	event.modify('apocalypsenow:hawkbill_machete', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(321.0)
	})
	event.modify('apocalypsenow:taiga_1_survival_machete', item => { 
		replaceAttribute("generic.attack_damage", 8.0, item)
		replaceAttribute("generic.attack_speed", -2.6, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(864.0)
	})
	event.modify('apocalypsenow:heavy_machete', item => { 
		replaceAttribute("generic.attack_damage", 10.0, item)
		replaceAttribute("generic.attack_speed", -2.7, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(796.0)
	})
	event.modify('apocalypsenow:bowie_machete', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -2.4, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(864.0)
	})
	event.modify('apocalypsenow:tactical_machete', item => { 
		replaceAttribute("generic.attack_damage", 11.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(1210.0)
	})
	event.modify('apocalypsenow:kukri_machete', item => { 
		replaceAttribute("generic.attack_damage", 11.0, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(1427.0)
	})
	event.modify('apocalypsenow:fire_module_machete', item => { 
		replaceAttribute("generic.attack_damage", 13.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.35, item)
		item.setMaxDamage(1210.0)
	})

})