
priority: 0

let mainCourse = [
	'farmersdelight:beef_stew',
	'farmersdelight:fish_stew',
	'farmersdelight:fried_rice',
	'farmersdelight:baked_cod_stew',
	'farmersdelight:bacon_and_eggs',
	'farmersdelight:pasta_with_meatballs',
	'farmersdelight:pasta_with_mutton_chop',
	'farmersdelight:mushroom_rice',
	'farmersdelight:vegetable_noodles',
	'farmersdelight:steak_and_potatoes',
	'farmersdelight:ratatouille',
	'farmersdelight:squid_ink_pasta',
	'farmersdelight:grilled_salmon'
]

let desert = [
	'farmersdelight:cake_slice',
	'farmersdelight:apple_pie_slice',
	'farmersdelight:sweet_berry_cheesecake_slice',
	'farmersdelight:chocolate_pie_slice',
	'farmersdelight:sweet_berry_cookie',
	'farmersdelight:honey_cookie',
	'minecraft:cookie'
]

let drinks = [
	'farmersdelight:milk_bottle',
	'farmersdelight:hot_cocoa',
	'farmersdelight:apple_cider',
	'farmersdelight:melon_juice'
]


ServerEvents.tags('item', event => {
	mainCourse.forEach((food) => {
		event.add('forge:mre/main_course', food)
    });
	
	desert.forEach((food) => {
		event.add('forge:mre/desert', food)
    });

	drinks.forEach((food) => {
		event.add('forge:mre/drinks', food)
    });
})