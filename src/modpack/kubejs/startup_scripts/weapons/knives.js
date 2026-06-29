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
	event.modify('apocalypsenow:bread_knife', item => { 
		replaceAttribute("generic.attack_damage", 2.0, item)
		replaceAttribute("generic.attack_speed", -2.4, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(123.0)
	})
	event.modify('apocalypsenow:cutter_knife', item => { 
		replaceAttribute("generic.attack_damage", 2.0, item)
		replaceAttribute("generic.attack_speed", -1.5, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(123.0)
	})
	event.modify('apocalypsenow:shiv', item => { 
		replaceAttribute("generic.attack_damage", 3.0, item)
		replaceAttribute("generic.attack_speed", -1.6, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(118.0)
	})
	event.modify('apocalypsenow:scalpel', item => { 
		replaceAttribute("generic.attack_damage", 2.0, item)
		replaceAttribute("generic.attack_speed", -1.7999999999999998, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(160.0)
	})
	event.modify('apocalypsenow:switch_knife', item => { 
		replaceAttribute("generic.attack_damage", 4.5, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(267.0)
	})
	event.modify('apocalypsenow:knife', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -1.7999999999999998, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(212.0)
	})
	event.modify('apocalypsenow:chefs_knife', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(267.0)
	})
	event.modify('apocalypsenow:kitchen_knife', item => { 
		replaceAttribute("generic.attack_damage", 4.0, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(380.0)
	})
	event.modify('apocalypsenow:hunting_knife', item => { 
		replaceAttribute("generic.attack_damage", 5.5, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(212.0)
	})
	event.modify('apocalypsenow:long_knife', item => { 
		replaceAttribute("generic.attack_damage", 4.5, item)
		replaceAttribute("generic.attack_speed", -2.0, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(267.0)
	})
	event.modify('apocalypsenow:expedition_knife', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -2.2, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(345.0)
	})
	event.modify('apocalypsenow:stilettoknife', item => { 
		replaceAttribute("generic.attack_damage", 4.5, item)
		replaceAttribute("generic.attack_speed", -1.5, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(294.0)
	})
	event.modify('apocalypsenow:mk_knife', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -1.7999999999999998, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(294.0)
	})
	event.modify('apocalypsenow:english_punch_knife', item => { 
		replaceAttribute("generic.attack_damage", 3.0, item)
		replaceAttribute("generic.attack_speed", -1.0, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(242.0)
	})
	event.modify('apocalypsenow:combat_survival_knife', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -1.7000000000000002, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(719.0)
	})
	event.modify('apocalypsenow:combat_knife', item => { 
		replaceAttribute("generic.attack_damage", 6.0, item)
		replaceAttribute("generic.attack_speed", -1.9, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(719.0)
	})
	event.modify('apocalypsenow:dagger', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -1.2000000000000002, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(650.0)
	})
	event.modify('apocalypsenow:butterfly_knife', item => { 
		replaceAttribute("generic.attack_damage", 5.0, item)
		replaceAttribute("generic.attack_speed", -1.9, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(940.0)
	})
	event.modify('apocalypsenow:military_knife', item => { 
		replaceAttribute("generic.attack_damage", 8.0, item)
		replaceAttribute("generic.attack_speed", -1.6, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(1221.0)
	})
	event.modify('apocalypsenow:tactical_knife', item => { 
		replaceAttribute("generic.attack_damage", 7.0, item)
		replaceAttribute("generic.attack_speed", -1.4, item)
		replaceAttribute("apoc_patches:headshot", 1.25, item)
		item.setMaxDamage(1221.0)
	})

})