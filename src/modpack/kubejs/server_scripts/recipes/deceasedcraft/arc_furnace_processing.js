ServerEvents.recipes(event => {
	const CopperInputList = [
		"#forge:raw_materials/copper",
		"#forge:storage_blocks/raw_copper",
		"create:crushed_raw_copper",
		"minecraft:copper_ore",
		"minecraft:deepslate_copper_ore"
	]
	
	const IronInputList = [
		"#forge:raw_materials/iron",
		"#forge:storage_blocks/raw_iron",
		"create:crushed_raw_iron",
		"minecraft:iron_ore",
		"minecraft:deepslate_iron_ore"
	]
	
	const GoldInputList = [
		"#forge:raw_materials/gold",
		"#forge:storage_blocks/raw_gold",
		"create:crushed_raw_gold",
		"minecraft:gold_ore",
		"minecraft:deepslate_gold_ore"
	]

	const ZincInputList = [
		"#forge:raw_materials/zinc",
		"#forge:storage_blocks/raw_zinc",
		"create:crushed_raw_zinc",
		"create:zinc_ore",
		"create:deepslate_zinc_ore"
	]

	const SilverInputList = [
		"#forge:raw_materials/silver",
		"#forge:storage_blocks/raw_silver",
		"create:crushed_raw_silver",
		"immersiveengineering:ore_silver",
		"immersiveengineering:deepslate_ore_silver"
	]

	const LeadInputList = [
		"#forge:raw_materials/lead",
		"#forge:storage_blocks/raw_lead",
		"create:crushed_raw_lead",
		"immersiveengineering:ore_lead",
		"immersiveengineering:deepslate_ore_lead"
	]

	const AluminumInputList = [
		"#forge:raw_materials/aluminum",
		"#forge:storage_blocks/raw_aluminum",
		"create:crushed_raw_aluminum",
		"immersiveengineering:ore_aluminum",
		"immersiveengineering:deepslate_ore_aluminum"
	]

	const UraniumInputList = [
		"#forge:raw_materials/uranium",
		"#forge:storage_blocks/raw_uranium",
		"create:crushed_raw_uranium",
		"immersiveengineering:ore_uranium",
		"immersiveengineering:deepslate_ore_uranium"
	]

	const NickelInputList = [
		"#forge:raw_materials/nickel",
		"#forge:storage_blocks/raw_nickel",
		"create:crushed_raw_nickel",
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

	const SmeltIngots = {
		"iron" : "minecraft:iron_ingot",
		"gold" : "minecraft:gold_ingot",
		"copper" : "minecraft:copper_ingot",
		"zinc" : "create:zinc_ingot",
		"silver" : "immersiveengineering:ingot_silver",
		"lead" : "immersiveengineering:ingot_lead",
		"aluminum" : "immersiveengineering:ingot_aluminum",
		"uranium" : "immersiveengineering:ingot_uranium",
		"nickel" : "immersiveengineering:ingot_nickel",
	}

	// Arc Furnace
	let arcFurnaceRecipe = (inputItem, itemOutput, outputAmount, secondaries, additives, InEnergy) => {
		if (inputItem.includes("#"))
		{
			inputItem = inputItem.replace("#", "")
			event.custom({
				"type": "immersiveengineering:arc_furnace",
				"additives": additives,
				"energy": InEnergy,
				"input": {
					"tag": inputItem
				},
				"results": [
					{
						"item": itemOutput,
						"count": outputAmount
					}
				],
				"secondaries": secondaries,
				"time": 200
			}).id("immersiveengineering:arc_furnace/" + inputItem.split(":")[1])
		}
		else
		{
			event.custom({
				"type": "immersiveengineering:arc_furnace",
				"additives": additives,
				"energy": InEnergy,
				"input": {
					"item": inputItem
				},
				"results": [
					{
						"item": itemOutput,
						"count": outputAmount
					}
				],
				"secondaries": secondaries,
				"time": 200
			}).id("immersiveengineering:arc_furnace/" + inputItem.split(":")[1])
		}
	}

	for (const [key, value] of Object.entries(SmeltIngots)) {
		event.remove({output: value, type: "immersiveengineering:arc_furnace"})
	}
	for (const [key, value] of Object.entries(TotalInputList)) {
		let secondaries = [
			{
				"chance": 0.75,
				"output": {
					"item": SmeltIngots[key]
				}
			}
		]
		arcFurnaceRecipe(value[0], SmeltIngots[key], 1, secondaries, [], 51200)

		secondaries = [
			{
				"chance": 0.5,
				"output": {
					"item": SmeltIngots[key],
					"count": 4
				}
			}
		]
		arcFurnaceRecipe(value[1], SmeltIngots[key], 15, secondaries, [], 102400)
		secondaries = [
			{
				"chance": 0.75,
				"output": {
					"item": SmeltIngots[key]
				}
			}
		]
		arcFurnaceRecipe(value[2], SmeltIngots[key], 1, secondaries, [], 51200)
		arcFurnaceRecipe(value[3], SmeltIngots[key], 2, [], [], 102400)
		arcFurnaceRecipe(value[4], SmeltIngots[key], 3, [], [], 102400)
	}

	event.remove({output: "minecraft:netherite_scrap", type: "immersiveengineering:arc_furnace"})
	arcFurnaceRecipe("minecraft:ancient_debris", "minecraft:netherite_scrap", 4, [], [], 102400)

	let additives = [
		{
			"tag": "forge:storage_blocks/coal_coke"
		},
		{
			"item": "minecraft:netherite_scrap"
		}
	]
	arcFurnaceRecipe("immersiveengineering:ingot_steel", "deceasedcraft:high_carbon_steel_alloy", 1, [], additives, 409600)
})