
priority: 0

ServerEvents.tags('item', event => {

	event.add('forge:coils/copper', 'createaddition:copper_spool')
	event.add('forge:coils/copper', 'immersiveengineering:wirecoil_copper')

	event.add('forge:coils/gold', 'createaddition:gold_spool')
	
	event.add('forge:coils/electrum', 'createaddition:electrum_spool')
	event.add('forge:coils/electrum', 'immersiveengineering:wirecoil_electrum')
})