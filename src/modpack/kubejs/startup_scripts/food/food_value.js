// Script thanks to Nolan

let hungerRatio = 1.0;
let foodOverride = {
    'apocalypsenow:apple_juice': [2, 0],
	'apocalypsenow:orange_juice': [2, 0],
	'apocalypsenow:grape_juice': [2, 0],
	'apocalypsenow:peach_juice': [2, 0],
	'apocalypsenow:large_soda': [1, 0],
    'apocalypsenow:applejuicebox': [2, 0],
	'apocalypsenow:orangejuicebox': [2, 0],
	'apocalypsenow:grapejuicebox': [2, 0],
	'apocalypsenow:porpsi': [0.5, 0],
	'apocalypsenow:coke': [0.5, 0],
	'apocalypsenow:water': [0.5, 0],
	'apocalypsenow:canned_water': [0.5, 0],
	'apocalypsenow:coffee': [1, 0],
	'apocalypsenow:whisky': [1, 0],
	'apocalypsenow:vodka': [1, 0],
	'apocalypsenow:beer': [1, 0],
	'apocalypsenow:energy_drink': [1, 0],
	'apocalypsenow:nonalcoholic_beer': [1, 0],
	'apocalypsenow:open_canned_carrot': [3, 0.5],
	'apocalypsenow:open_canned_fish': [2, 0.5],
	'apocalypsenow:cooked_canned_fish': [5, 0.5],
	'apocalypsenow:open_canned_beetroot': [4, 0.5],
	'apocalypsenow:open_canned_melon': [2, 0.5],
	'apocalypsenow:open_canned_tomatos': [1, 0.5],
	'apocalypsenow:open_canned_pork': [3, 0.5],
	'apocalypsenow:cooked_canned_pork': [8, 0.5],
	'apocalypsenow:open_canned_rabbit_soup': [3, 0.5],
	'apocalypsenow:cooked_canned_rabbit_soup': [6, 0.5],
	'apocalypsenow:cream_cracker': [3, 0.5],
	'apocalypsenow:chips': [4, 0.5],
	'apocalypsenow:cereal': [6, 0.5],
	'apocalypsenow:macandcheese': [10, 0.5],
	'apocalypsenow:nutrition_bar': [6, 0.5]
}

let foodOverrideKeys = Object.keys(foodOverride);

ItemEvents.modification((event) => {
    let edibleStacks = Ingredient.custom((i) => i.edible).getStacks();

    edibleStacks.forEach((stack) => {
        let foodProperties = stack.item.foodProperties;
        if (foodProperties && foodOverrideKeys.includes(stack.item.id)) {
            event.modify(stack.item.id, (foodItem) => {
                foodItem.foodProperties = (food) => {
					food.hunger(foodOverride[stack.item.id][0]);
					food.saturation(foodOverride[stack.item.id][1]);
                };
            });
        }
    });
});