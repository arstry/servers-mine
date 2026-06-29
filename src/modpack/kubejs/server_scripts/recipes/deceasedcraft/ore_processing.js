ServerEvents.recipes(event => {
	let crushingRecipeTwoOutput = (inputItem, firstOutput, secondOutput, processingTime) => {
		event.recipes.create.crushing([firstOutput, secondOutput], inputItem).processingTime(processingTime).id("deceasedcraft:crushing_wheel/crushing/" + inputItem.split(":")[1])
	}
	let crushingRecipeFourOutput = (inputItem, firstOutput, secondOutput, thirdOutput, fourthOutput, processingTime) => {
		event.recipes.create.crushing([firstOutput, secondOutput, thirdOutput, fourthOutput], inputItem).processingTime(processingTime).id("deceasedcraft:crushing_wheel/crushing/" + inputItem.split(":")[1])
	}

	const CopperInputList = [
		"#create:stone_types/veridium",
		"#forge:raw_materials/copper",
		"#forge:storage_blocks/raw_copper",
		"minecraft:copper_ore",
		"minecraft:deepslate_copper_ore"
	]
	
	const IronInputList = [
		"#create:stone_types/crimsite",
		"#forge:raw_materials/iron",
		"#forge:storage_blocks/raw_iron",
		"minecraft:iron_ore",
		"minecraft:deepslate_iron_ore"
	]
	
	const GoldInputList = [
		"#create:stone_types/ochrum",
		"#forge:raw_materials/gold",
		"#forge:storage_blocks/raw_gold",
		"minecraft:gold_ore",
		"minecraft:deepslate_gold_ore"
	]

	const ZincInputList = [
		"#create:stone_types/asurine",
		"#forge:raw_materials/zinc",
		"#forge:storage_blocks/raw_zinc",
		"create:zinc_ore",
		"create:deepslate_zinc_ore"
	]

	const SilverInputList = [
		"#forge:raw_materials/silver",
		"#forge:storage_blocks/raw_silver",
		"immersiveengineering:ore_silver",
		"immersiveengineering:deepslate_ore_silver"
	]

	const LeadInputList = [
		"#forge:raw_materials/lead",
		"#forge:storage_blocks/raw_lead",
		"immersiveengineering:ore_lead",
		"immersiveengineering:deepslate_ore_lead"
	]

	const AluminumInputList = [
		"#forge:raw_materials/aluminum",
		"#forge:storage_blocks/raw_aluminum",
		"immersiveengineering:ore_aluminum",
		"immersiveengineering:deepslate_ore_aluminum"
	]

	const UraniumInputList = [
		"#forge:raw_materials/uranium",
		"#forge:storage_blocks/raw_uranium",
		"immersiveengineering:ore_uranium",
		"immersiveengineering:deepslate_ore_uranium"
	]

	const NickelInputList = [
		"#forge:raw_materials/nickel",
		"#forge:storage_blocks/raw_nickel",
		"immersiveengineering:ore_nickel",
		"immersiveengineering:deepslate_ore_nickel"
	]

	const TotalInputList = {
		"iron" : IronInputList,
		"gold" : GoldInputList,
		"copper" : CopperInputList,
		"zinc" : ZincInputList,
		"silver" : SilverInputList,
		"lead" : LeadInputList,
		"aluminum" : AluminumInputList,
		"uranium" : UraniumInputList,
		"nickel" : NickelInputList
	}
	
	const NuggetsID = {
		"iron" : "minecraft:iron_nugget",
		"gold" : "minecraft:gold_nugget",
		"copper" : "immersiveengineering:nugget_copper",
		"zinc" : "create:zinc_nugget",
		"silver" : "immersiveengineering:nugget_silver",
		"lead" : "immersiveengineering:nugget_lead",
		"aluminum" : "immersiveengineering:nugget_aluminum",
		"uranium" : "immersiveengineering:nugget_uranium",
		"nickel" : "immersiveengineering:nugget_nickel",
	}

	const ExtraDusts = {
		"iron" : "immersiveengineering:dust_nickel",
		"gold" : "immersiveengineering:dust_gold",
		"copper" : "immersiveengineering:dust_gold",
		"zinc" : "create:crushed_raw_zinc",
		"silver" : "immersiveengineering:dust_lead",
		"lead" : "immersiveengineering:dust_silver",
		"aluminum" : "immersiveengineering:dust_iron",
		"uranium" : "immersiveengineering:dust_lead",
		"nickel" : "immersiveengineering:dust_iron",
	}

	const DuplicateRecipe = [
		"immersiveengineering:crusher/raw_ore_uranium"
	]

	for (const value of DuplicateRecipe)
	{
		event.remove({id: value})
	}

	// Create Crushing Wheel
	for (const [key, value] of Object.entries(TotalInputList))
	{
		value.forEach(ore => {
			event.remove({input: ore, type: 'create:crushing'})
		})
	}
	for (const [key, value] of Object.entries(TotalInputList))
	{
		let i = 0
		let primaryOutputItem = "create:crushed_raw_" + key
		let secondaryOutputItem = NuggetsID[key]
		if (value[i].includes("stone_types"))
		{
			crushingRecipeTwoOutput(value[i], Item.of(primaryOutputItem).withChance(0.5), Item.of(secondaryOutputItem).withChance(0.8), 250)
			i++
		}
		crushingRecipeTwoOutput(value[i], primaryOutputItem, Item.of(secondaryOutputItem).withChance(0.75), 250)
		i++
		crushingRecipeTwoOutput(value[i], '9x ' + primaryOutputItem, Item.of('9x create:experience_nugget').withChance(0.75), 750)
		i++
		crushingRecipeFourOutput(value[i], primaryOutputItem, Item.of(primaryOutputItem).withChance(0.25), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobblestone').withChance(0.25), 250)
		i++
		crushingRecipeFourOutput(value[i], primaryOutputItem,  Item.of(primaryOutputItem).withChance(0.5), Item.of('create:experience_nugget').withChance(0.75), Item.of('minecraft:cobbled_deepslate').withChance(0.25), 450)
	}

	// IE Crusher
	let crusherRecipe = (inputItem, firstOutput, outputAmount, secondaryOutputs, InEnergy) => {
		if (inputItem.includes("#"))
		{
			inputItem = inputItem.replace("#", "")
			event.custom({
				"type": "immersiveengineering:crusher",
				"energy": InEnergy,
				"input": {
					"tag": inputItem
				},
				"result": {
					"count": outputAmount,
					"item": firstOutput
				},
				"secondaries": secondaryOutputs
			}).id("deceasedcraft:crusher/crushing/" + inputItem.split(":")[1])
		}
		else
		{
			event.custom({
				"type": "immersiveengineering:crusher",
				"energy": InEnergy,
				"input": {
					"item": inputItem
				},
				"result": {
					"count": outputAmount,
					"item": firstOutput
				},
				"secondaries": secondaryOutputs
			}).id("deceasedcraft:crusher/crushing/" + inputItem.split(":")[1])
		}
	}

	for (const [key, value] of Object.entries(ExtraDusts)) {
		event.remove({output: value, type: "immersiveengineering:crusher"})
	}
	for (const [key, value] of Object.entries(TotalInputList)) {
		let i = 0
		let primaryOutputItem = "immersiveengineering:dust_" + key
		if (key == "zinc")
		{
			primaryOutputItem = "create:crushed_raw_zinc"
		}
		if (value[i].includes("stone_types"))
		{
			crusherRecipe(value[i], primaryOutputItem, 1, [], 1600)
			i++
		}

		let secondaryOutputs = [
			{
				"chance": 0.5,
				"output": {
					"item": primaryOutputItem
				}
			}
		]
		crusherRecipe(value[i], primaryOutputItem, 1, secondaryOutputs, 1600)
		i++

		secondaryOutputs = []
		crusherRecipe(value[i], primaryOutputItem, 12, secondaryOutputs, 1600)
		i++

		secondaryOutputs = [
			{
				"chance": 0.2,
				"output": {
					"item": ExtraDusts[key]
				}
			}
		]
		crusherRecipe(value[i], primaryOutputItem, 2, secondaryOutputs, 1600)
		i++

		secondaryOutputs = [
			{
				"chance": 0.5,
				"output": {
					"item": primaryOutputItem
				}
			},
			{
				"chance": 0.3,
				"output": {
					"item": ExtraDusts[key]
				}
			}
		]
		crusherRecipe(value[i], primaryOutputItem, 2, secondaryOutputs, 1600)
	}
	let secondaryOutputs = [
		{
			"chance": 1.0,
			"output": {
				"item": "minecraft:gold_ingot",
				"count": 4
			}
		}
	]
	crusherRecipe("minecraft:netherite_ingot", "minecraft:netherite_scrap", 4, secondaryOutputs, 3200)
})