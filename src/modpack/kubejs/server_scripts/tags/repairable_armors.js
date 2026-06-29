
let leatherRepairItems = [
	'#armorset:fighting',
	'#armorset:anarchy',
	'#armorset:nurse',
	'#armorset:forestguard',
	'#armorset:hunting',
	'#armorset:ghillie',
	'#armorset:vanilla',
	'#armorset:leather'
]

let basicRepairItems = [
	'#armorset:chainmail',
	'#armorset:football',
	'#armorset:fire_figther',
	'#armorset:general',
	'#armorset:construction',
	'#armorset:police',
	'#armorset:royal_canada_police_officer'
]

let intermediateRepairItems = [
	'#armorset:armor_steel',
	'#armorset:military_riot_armor',
	'#armorset:military_urban',
	'#armorset:un_armor',
	'#armorset:army',
	'#armorset:hazmat_suit'
]

let advancedRepairItems = [
	'#armorset:netherite',
	'#armorset:swatriotcontrol',
	'#armorset:bombsquad',
	'#armorset:swat',
	'#armorset:juggernaut',
	'#armorset:soldier',
	'#armorset:spec_ops',
	'#armorset:biohazard',
]

ServerEvents.tags('item', event => {
	leatherRepairItems.forEach((item) => {
		event.add('forge:repair/leather', item)
    });

	basicRepairItems.forEach((item) => {
		event.add('forge:repair/basic_armor_component', item)
    });

	intermediateRepairItems.forEach((item) => {
		event.add('forge:repair/intermediate_armor_component', item)
    });
	
	advancedRepairItems.forEach((item) => {
		event.add('forge:repair/advanced_armor_component', item)
    });
	
})