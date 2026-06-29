ServerEvents.recipes(event => {

	let repairRecipe = (repairItem, repairIngredient) => {
		let slicedOutputName = repairItem.split(":")[1]
		event.shapeless(repairItem, [repairItem, repairIngredient]).modifyResult((grid, result) => {
			let repairable = grid.find(repairItem)
			let quarterDurability = (Item.of(repairable).maxDamage / 3)
			repairable = Item.of(repairable)
			repairable.damageValue -= quarterDurability
			if (repairable.damageValue <= 0)
			{
				repairable.damageValue = 0
			}
			
			return repairable
		})
		.damageIngredient(repairItem, 999999)
		.id("deceasedcraft:" + slicedOutputName + "_repair_recipe")
	}

	Ingredient.of("#forge:repair/wool").itemIds.forEach(item => {
		repairRecipe(item, "#minecraft:wool")
	})

	Ingredient.of("#forge:repair/iron").itemIds.forEach(item => {
		repairRecipe(item, "#forge:ingots/iron")
	})

	Ingredient.of("#forge:repair/steel").itemIds.forEach(item => {
		repairRecipe(item, "#forge:ingots/steel")
	})
	
	Ingredient.of("#forge:repair/netherite_scrap").itemIds.forEach(item => {
		repairRecipe(item, "minecraft:netherite_scrap")
	})
	
	Ingredient.of("#forge:repair/leather").itemIds.forEach(item => {
		repairRecipe(item, "#forge:leather")
	})
	
	Ingredient.of("#forge:repair/basic_armor_component").itemIds.forEach(item => {
		repairRecipe(item, "deceasedcraft:basic_armor_component")
	})

	Ingredient.of("#forge:repair/intermediate_armor_component").itemIds.forEach(item => {
		repairRecipe(item, "deceasedcraft:intermediate_armor_component")
	})
	
	Ingredient.of("#forge:repair/advanced_armor_component").itemIds.forEach(item => {
		repairRecipe(item, "deceasedcraft:advanced_armor_component")
	})
})

ServerEvents.recipes(event => {
  event.shapeless(
    Item.of('lostradar:radar', {
      Energy: 10000,
	  Damage: 0
    }),
    [
      'lostradar:radar',
      'gamediscs:battery'
    ]
  )
})