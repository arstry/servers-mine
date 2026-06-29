
let sugarFoods = [
    'apocalypsenow:porpsi',
	'apocalypsenow:coke',
	'apocalypsenow:orange_juice',
	'apocalypsenow:grape_juice',
	'apocalypsenow:apple_juice',
	'apocalypsenow:peach_juice',
	'apocalypsenow:large_soda',
	'apocalypsenow:energy_drink',
	'apocalypsenow:beer',
	'apocalypsenow:nonalcoholic_beer',
	'apocalypsenow:vodka',
	'apocalypsenow:orangejuicebox',
	'apocalypsenow:grapejuicebox',
	'apocalypsenow:applejuicebox',
	'apocalypsenow:peachjuicebox',
]

let grainFoods = [
    'apocalypsenow:cereal',
	'apocalypsenow:beer',
	'apocalypsenow:nonalcoholic_beer',
	'apocalypsenow:vodka'
]

let fruitFoods = [
   'apocalypsenow:open_canned_melon',
	'apocalypsenow:orange_juice',
	'apocalypsenow:grape_juice',
	'apocalypsenow:apple_juice',
	'apocalypsenow:peach_juice',
	'apocalypsenow:orangejuicebox',
	'apocalypsenow:grapejuicebox',
	'apocalypsenow:applejuicebox',
	'apocalypsenow:peachjuicebox',
]

let proteinFoods = [
    'apocalypsenow:chips',
	'apocalypsenow:open_canned_fish',
	'apocalypsenow:open_canned_pork',
	'apocalypsenow:open_canned_rabbit_soup',
	'apocalypsenow:cooked_canned_pork',
	'apocalypsenow:cooked_caned_fish',
	'apocalypsenow:cooked_canned_rabit_soup'
]

let vegetableFoods = [
	'apocalypsenow:open_canned_carrot',
	'apocalypsenow:open_canned_beetroot',
	'apocalypsenow:open_canned_tomatos'
]

ServerEvents.tags('item', event => {
	sugarFoods.forEach((food) => {
		event.add('diet:sugars', food)
    });
	
	grainFoods.forEach((food) => {
		event.add('diet:grains', food)
    });

	fruitFoods.forEach((food) => {
		event.add('diet:fruits', food)
    });

	proteinFoods.forEach((food) => {
		event.add('diet:proteins', food)
    });

	vegetableFoods.forEach((food) => {
		event.add('diet:vegetables', food)
    });
})