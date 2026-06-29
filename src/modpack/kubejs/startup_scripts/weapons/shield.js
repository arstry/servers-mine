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
	event.modify('minecraft:shield', item => { 
		item.setMaxDamage(80.0)
	})
	event.modify('apocalypsenow:stopsign_shield', item => { 
		item.setMaxDamage(160.0)
	})
	event.modify('apocalypsenow:trash_shield', item => { 
		item.setMaxDamage(160.0)
	})
	event.modify('apocalypsenow:police_shield', item => { 
		item.setMaxDamage(400.0)
	})
	event.modify('immersiveengineering:shield', item => { 
		item.setMaxDamage(450.0)
	})
	event.modify('apocalypsenow:riot_shield', item => { 
		item.setMaxDamage(600.0)
	})
	event.modify('apocalypsenow:ballistic_shield', item => { 
		item.setMaxDamage(1250.0)
	})
})