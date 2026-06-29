// Tier 1
ServerEvents.recipes(event => {
	let AddHelmetRecipe = (outputItem, primaryInput, specialInput, secondaryInput, helmetInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'XVX',
		'IOI'
		], {
		I: primaryInput,
		X: secondaryInput,
		O: helmetInput,
		V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddChestplateRecipe = (outputItem, primaryInput, specialInput, secondaryInput, chestplateInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
			'I I',
			'XOX',
			'IVI'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: chestplateInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddLeggingsRecipe = (outputItem, primaryInput, specialInput, secondaryInput, leggingsInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
			'XVX',
			'IOI',
			'I I'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: leggingsInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddBootsRecipe = (outputItem, primaryInput, specialInput, secondaryInput, bootsInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
			'IOV',
			'X X'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: bootsInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}

	// Tier 1 Armors
	// Leather
	AddHelmetRecipe("minecraft:leather_helmet", "#forge:leather", "#forge:leather", "#forge:string", "minecraft:air")
	AddChestplateRecipe("minecraft:leather_chestplate", "#forge:leather", "#forge:leather", "#forge:string", "minecraft:air")
	AddLeggingsRecipe("minecraft:leather_leggings", "#forge:leather", "#forge:leather", "#forge:string", "minecraft:air")
	AddBootsRecipe("minecraft:leather_boots", "#forge:leather", "#forge:leather", "#forge:string", "minecraft:air")
	
	// Nurse
	AddChestplateRecipe("apocalypsenow:nurse_chestplate", "#minecraft:wool", "#minecraft:wool", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("apocalypsenow:nurse_leggings", "#minecraft:wool", "#minecraft:wool", "#forge:string", "minecraft:leather_leggings")
	AddBootsRecipe("apocalypsenow:nurse_boots", "#minecraft:wool", "#minecraft:wool", "#forge:string", "minecraft:leather_boots")
	
	// Anarchy
	AddHelmetRecipe("apocalypsenow:anarchy_helmet", "apocalypsenow:cloth", "apocalypsenow:cloth", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("apocalypsenow:anarchy_chestplate", "apocalypsenow:cloth", "apocalypsenow:cloth", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("apocalypsenow:anarchy_leggings", "apocalypsenow:cloth", "apocalypsenow:cloth", "#forge:string", "minecraft:leather_leggings")
	AddBootsRecipe("apocalypsenow:anarchy_boots", "apocalypsenow:cloth", "apocalypsenow:cloth", "#forge:string", "minecraft:leather_boots")
	
	// Red Fighting
	AddHelmetRecipe("apocalypsenow:red_fighting_helmet", "apocalypsenow:cloth", "#forge:dyes/red", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("apocalypsenow:red_fighting_chestplate", "apocalypsenow:cloth", "#forge:dyes/red", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("apocalypsenow:red_fighting_leggings", "apocalypsenow:cloth", "#forge:dyes/red", "#forge:string", "minecraft:leather_leggings")
	
	// Blue Fighting
	AddHelmetRecipe("apocalypsenow:blue_fighting_helmet", "apocalypsenow:cloth", "#forge:dyes/blue", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("apocalypsenow:blue_fighting_chestplate", "apocalypsenow:cloth", "#forge:dyes/blue", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("apocalypsenow:blue_fighting_leggings", "apocalypsenow:cloth", "#forge:dyes/blue", "#forge:string", "minecraft:leather_leggings")

	// Forest Guard
	AddHelmetRecipe("apocalypsenow:forestguard_helmet", "apocalypsenow:cloth", "#forge:leather", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("apocalypsenow:forestguard_chestplate", "apocalypsenow:cloth", "#forge:leather", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("apocalypsenow:forestguard_leggings", "apocalypsenow:cloth", "#forge:leather", "#forge:string", "minecraft:leather_leggings")
	AddBootsRecipe("apocalypsenow:forestguard_boots", "apocalypsenow:cloth", "#forge:leather", "#forge:string", "minecraft:leather_boots")

	// Hunting Set
	AddHelmetRecipe("apocalypsenow:hunting_helmet", "apocalypsenow:cloth", "#forge:dyes/white", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("apocalypsenow:hunting_chestplate", "apocalypsenow:cloth", "#forge:dyes/white", "#forge:string", "minecraft:leather_chestplate")

	// Ghillie Sets
	AddHelmetRecipe("apocalypsenow:desertghillie_helmet", "#forge:sand", "#forge:sand", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("apocalypsenow:desertghillie_chestplate", "#forge:sand", "#forge:sand", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("apocalypsenow:desertghillie_leggings", "#forge:sand", "#forge:sand", "#forge:string", "minecraft:leather_leggings")
	AddBootsRecipe("apocalypsenow:desertghillie_boots", "#forge:sand", "#forge:sand", "#forge:string", "minecraft:leather_boots")
	
	AddHelmetRecipe("apocalypsenow:snowghillie_helmet", "minecraft:snow_block", "minecraft:snow_block", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("apocalypsenow:snowghillie_chestplate", "minecraft:snow_block", "minecraft:snow_block", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("apocalypsenow:snowghillie_leggings", "minecraft:snow_block", "minecraft:snow_block", "#forge:string", "minecraft:leather_leggings")
	AddBootsRecipe("apocalypsenow:snowghillie_boots", "minecraft:snow_block", "minecraft:snow_block", "#forge:string", "minecraft:leather_boots")
	
	AddHelmetRecipe("apocalypsenow:ghilliesuit_helmet", "#minecraft:leaves", "#minecraft:leaves", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("apocalypsenow:ghilliesuit_chestplate", "#minecraft:leaves", "#minecraft:leaves", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("apocalypsenow:ghilliesuit_leggings", "#minecraft:leaves", "#minecraft:leaves", "#forge:string", "minecraft:leather_leggings")
	AddBootsRecipe("apocalypsenow:ghilliesuit_boots", "#minecraft:leaves", "#minecraft:leaves", "#forge:string", "minecraft:leather_boots")
	
	// Iron Set
	AddHelmetRecipe("minecraft:iron_helmet", "#forge:plates/iron", "#forge:plates/iron", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("minecraft:iron_chestplate", "#forge:plates/iron", "#forge:plates/iron", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("minecraft:iron_leggings", "#forge:plates/iron", "#forge:plates/iron", "#forge:string", "minecraft:leather_leggings")
	AddBootsRecipe("minecraft:iron_boots", "#forge:plates/iron", "#forge:plates/iron", "#forge:string", "minecraft:leather_boots")

	// Zinc Set
	AddHelmetRecipe("create_sa:zinc_helmet", "#forge:plates/zinc", "#forge:plates/zinc", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("create_sa:zinc_chestplate", "#forge:plates/zinc", "#forge:plates/zinc", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("create_sa:zinc_leggings", "#forge:plates/zinc", "#forge:plates/zinc", "#forge:string", "minecraft:leather_leggings")
	AddBootsRecipe("create_sa:zinc_boots", "#forge:plates/zinc", "#forge:plates/zinc", "#forge:string", "minecraft:leather_boots")
	
	// Copper Set
	AddHelmetRecipe("create_sa:copper_helmet", "#forge:plates/copper", "#forge:plates/copper", "#forge:string", "minecraft:leather_helmet")
	AddChestplateRecipe("create_sa:copper_chestplate", "#forge:plates/copper", "#forge:plates/copper", "#forge:string", "minecraft:leather_chestplate")
	AddLeggingsRecipe("create_sa:copper_leggings", "#forge:plates/copper", "#forge:plates/copper", "#forge:string", "minecraft:leather_leggings")
	AddBootsRecipe("create_sa:copper_boots", "#forge:plates/copper", "#forge:plates/copper", "#forge:string", "minecraft:leather_boots")
})

// Tier 2
ServerEvents.recipes(event => {
	let AddHelmetRecipe = (outputItem, primaryInput, specialInput, secondaryInput, helmetInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
		'XVX',
		'IOI'
		], {
		I: primaryInput,
		X: secondaryInput,
		O: helmetInput,
		V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddChestplateRecipe = (outputItem, primaryInput, specialInput, secondaryInput, chestplateInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
			'I I',
			'XOX',
			'IVI'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: chestplateInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddLeggingsRecipe = (outputItem, primaryInput, specialInput, secondaryInput, leggingsInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
			'XVX',
			'IOI',
			'I I'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: leggingsInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddBootsRecipe = (outputItem, primaryInput, specialInput, secondaryInput, bootsInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.shaped(outputItem, [
			'IOV',
			'X X'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: bootsInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}

	// Tier 2 Armors
	// Chainmail
	AddHelmetRecipe("minecraft:chainmail_helmet", "#forge:wires/iron", "#forge:wires/iron", "#forge:wires/iron", "deceasedcraft:basic_armor_component")
	AddChestplateRecipe("minecraft:chainmail_chestplate", "#forge:wires/iron", "#forge:wires/iron", "#forge:wires/iron", "deceasedcraft:basic_armor_component")
	AddLeggingsRecipe("minecraft:chainmail_leggings", "#forge:wires/iron", "#forge:wires/iron", "#forge:wires/iron", "deceasedcraft:basic_armor_component")
	AddBootsRecipe("minecraft:chainmail_boots", "#forge:wires/iron", "#forge:wires/iron", "#forge:wires/iron", "deceasedcraft:basic_armor_component")
	
	// Construction
	AddHelmetRecipe("apocalypsenow:construction_helmet", "apocalypsenow:cloth", "apocalypsenow:cloth", "#forge:wires/iron", "minecraft:chainmail_helmet")
	AddChestplateRecipe("apocalypsenow:construction_chestplate", "apocalypsenow:cloth", "apocalypsenow:cloth", "#forge:wires/iron", "minecraft:chainmail_chestplate")
	AddLeggingsRecipe("apocalypsenow:construction_leggings", "apocalypsenow:cloth", "apocalypsenow:cloth", "#forge:wires/iron", "minecraft:chainmail_leggings")
	AddBootsRecipe("apocalypsenow:construction_boots", "apocalypsenow:cloth", "apocalypsenow:cloth", "#forge:wires/iron", "minecraft:chainmail_boots")
	
	// Fire Fighter
	AddHelmetRecipe("apocalypsenow:fire_figther_helmet", "farmersdelight:straw", "farmersdelight:straw", "#forge:wires/iron", "minecraft:chainmail_helmet")
	AddChestplateRecipe("apocalypsenow:fire_figther_chestplate", "farmersdelight:straw", "farmersdelight:straw", "#forge:wires/iron", "minecraft:chainmail_chestplate")
	AddLeggingsRecipe("apocalypsenow:fire_figther_leggings", "farmersdelight:straw", "farmersdelight:straw", "#forge:wires/iron", "minecraft:chainmail_leggings")
	AddBootsRecipe("apocalypsenow:fire_figther_boots", "farmersdelight:straw", "farmersdelight:straw", "#forge:wires/iron", "minecraft:chainmail_boots")
	
	// yellow Football
	AddHelmetRecipe("apocalypsenow:yellow_football_armor_helmet", "#forge:plates/zinc", "#forge:dyes/yellow", "#forge:wires/iron", "minecraft:chainmail_helmet")
	AddChestplateRecipe("apocalypsenow:yellow_football_armor_chestplate", "#forge:plates/zinc", "#forge:dyes/yellow", "#forge:wires/iron", "minecraft:chainmail_chestplate")
	AddLeggingsRecipe("apocalypsenow:yellow_football_armor_leggings", "#forge:plates/zinc", "#forge:dyes/yellow", "#forge:wires/iron", "minecraft:chainmail_leggings")
	AddBootsRecipe("apocalypsenow:yellow_football_armor_boots", "#forge:plates/zinc", "#forge:dyes/yellow", "#forge:wires/iron", "minecraft:chainmail_boots")
	
	// red Football
	AddHelmetRecipe("apocalypsenow:red_football_armor_helmet", "#forge:plates/zinc", "#forge:dyes/red", "#forge:wires/iron", "minecraft:chainmail_helmet")
	AddChestplateRecipe("apocalypsenow:red_football_armor_chestplate", "#forge:plates/zinc", "#forge:dyes/red", "#forge:wires/iron", "minecraft:chainmail_chestplate")
	AddLeggingsRecipe("apocalypsenow:red_football_armor_leggings", "#forge:plates/zinc", "#forge:dyes/red", "#forge:wires/iron", "minecraft:chainmail_leggings")
	AddBootsRecipe("apocalypsenow:red_football_armor_boots", "#forge:plates/zinc", "#forge:dyes/red", "#forge:wires/iron", "minecraft:chainmail_boots")
	
	// blue Football
	AddHelmetRecipe("apocalypsenow:blue_football_armor_helmet", "#forge:plates/zinc", "#forge:dyes/blue", "#forge:wires/iron", "minecraft:chainmail_helmet")
	AddChestplateRecipe("apocalypsenow:blue_football_armor_chestplate", "#forge:plates/zinc", "#forge:dyes/blue", "#forge:wires/iron", "minecraft:chainmail_chestplate")
	AddLeggingsRecipe("apocalypsenow:blue_football_armor_leggings", "#forge:plates/zinc", "#forge:dyes/blue", "#forge:wires/iron", "minecraft:chainmail_leggings")
	AddBootsRecipe("apocalypsenow:blue_football_armor_boots", "#forge:plates/zinc", "#forge:dyes/blue", "#forge:wires/iron", "minecraft:chainmail_boots")
	
	// black Football
	AddHelmetRecipe("apocalypsenow:black_football_armor_helmet", "#forge:plates/zinc", "#forge:dyes/black", "#forge:wires/iron", "minecraft:chainmail_helmet")
	AddChestplateRecipe("apocalypsenow:black_football_armor_chestplate", "#forge:plates/zinc", "#forge:dyes/black", "#forge:wires/iron", "minecraft:chainmail_chestplate")
	AddLeggingsRecipe("apocalypsenow:black_football_armor_leggings", "#forge:plates/zinc", "#forge:dyes/black", "#forge:wires/iron", "minecraft:chainmail_leggings")
	AddBootsRecipe("apocalypsenow:black_football_armor_boots", "#forge:plates/zinc", "#forge:dyes/black", "#forge:wires/iron", "minecraft:chainmail_boots")

	// General Army Set
	AddHelmetRecipe("apocalypsenow:army_helmet", "#forge:plates/zinc", "#forge:dyes/green", "#forge:wires/iron", "minecraft:chainmail_helmet")
	AddChestplateRecipe("apocalypsenow:army_chestplate", "#forge:plates/zinc", "#forge:dyes/green", "#forge:wires/iron", "minecraft:chainmail_chestplate")
	AddLeggingsRecipe("apocalypsenow:army_leggings", "#forge:plates/zinc", "#forge:dyes/green", "#forge:wires/iron", "minecraft:chainmail_leggings")
	AddBootsRecipe("apocalypsenow:army_boots", "#forge:plates/zinc", "#forge:dyes/green", "#forge:wires/iron", "minecraft:chainmail_boots")
	
	// Police Suit Set
	AddHelmetRecipe("apocalypsenow:police_helmet", "#forge:plates/zinc", "#forge:dyes/blue", "#forge:wires/iron", "minecraft:chainmail_helmet")
	AddChestplateRecipe("apocalypsenow:police_chestplate", "#forge:plates/zinc", "#forge:dyes/blue", "#forge:wires/iron", "minecraft:chainmail_chestplate")
	AddLeggingsRecipe("apocalypsenow:police_leggings", "#forge:plates/zinc", "#forge:dyes/blue", "#forge:wires/iron", "minecraft:chainmail_leggings")
	AddBootsRecipe("apocalypsenow:police_boots", "#forge:plates/zinc", "#forge:dyes/blue", "#forge:wires/iron", "minecraft:chainmail_boots")
	
	// Royal Canada Set
	AddHelmetRecipe("apocalypsenow:royal_canada_police_officer_helmet", "#forge:plates/copper", "#forge:dyes/red", "#forge:wires/iron", "minecraft:chainmail_helmet")
	AddChestplateRecipe("apocalypsenow:royal_canada_police_officer_chestplate", "#forge:plates/copper", "#forge:dyes/red", "#forge:wires/iron", "minecraft:chainmail_chestplate")
	AddLeggingsRecipe("apocalypsenow:royal_canada_police_officer_leggings", "#forge:plates/copper", "#forge:dyes/red", "#forge:wires/iron", "minecraft:chainmail_leggings")
	AddBootsRecipe("apocalypsenow:royal_canada_police_officer_boots", "#forge:plates/copper", "#forge:dyes/red", "#forge:wires/iron", "minecraft:chainmail_boots")
})


// Tier 3
ServerEvents.recipes(event => {
	let AddHelmetRecipe = (outputItem, primaryInput, specialInput, secondaryInput, helmetInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'XVX',
		'IOI'
		], {
		I: primaryInput,
		X: secondaryInput,
		O: helmetInput,
		V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
		
	}
	let AddChestplateRecipe = (outputItem, primaryInput, specialInput, secondaryInput, chestplateInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
			'I I',
			'XOX',
			'IVI'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: chestplateInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddLeggingsRecipe = (outputItem, primaryInput, specialInput, secondaryInput, leggingsInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
			'XVX',
			'IOI',
			'I I'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: leggingsInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddBootsRecipe = (outputItem, primaryInput, specialInput, secondaryInput, bootsInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
			'IOV',
			'X X'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: bootsInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}

	// Tier 3 Armors
	// Steel
	AddHelmetRecipe("immersiveengineering:armor_steel_helmet", "#forge:plates/steel", "#forge:plates/steel", "#forge:wires/steel", "deceasedcraft:intermediate_armor_component")
	AddChestplateRecipe("immersiveengineering:armor_steel_chestplate", "#forge:plates/steel", "#forge:plates/steel", "#forge:wires/steel", "deceasedcraft:intermediate_armor_component")
	AddLeggingsRecipe("immersiveengineering:armor_steel_leggings", "#forge:plates/steel", "#forge:plates/steel", "#forge:wires/steel", "deceasedcraft:intermediate_armor_component")
	AddBootsRecipe("immersiveengineering:armor_steel_boots", "#forge:plates/steel", "#forge:plates/steel", "#forge:wires/steel", "deceasedcraft:intermediate_armor_component")
	
	// Military Riot
	AddHelmetRecipe("apocalypsenow:military_riot_armor_helmet", "#forge:plates/nickel", "#forge:dyes/green", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:military_riot_armor_chestplate", "#forge:plates/nickel", "#forge:dyes/green", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:military_riot_armor_leggings", "#forge:plates/nickel", "#forge:dyes/green", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:military_riot_armor_boots", "#forge:plates/nickel", "#forge:dyes/green", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")

	// Military Urban
	AddHelmetRecipe("apocalypsenow:military_urban_helmet", "#forge:plates/nickel", "#forge:dyes/purple", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:military_urban_chestplate", "#forge:plates/nickel", "#forge:dyes/purple", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:military_urban_leggings", "#forge:plates/nickel", "#forge:dyes/purple", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:military_urban_boots", "#forge:plates/nickel", "#forge:dyes/purple", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")

	// Hazmat Suit
	AddHelmetRecipe("apocalypsenow:hazmat_suit_helmet", "#forge:plates/lead", "immersiveengineering:hemp_fabric", "#forge:plates/plastic", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:hazmat_suit_chestplate", "#forge:plates/lead","immersiveengineering:hemp_fabric", "#forge:plates/plastic", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:hazmat_suit_leggings", "#forge:plates/lead","immersiveengineering:hemp_fabric", "#forge:plates/plastic", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:hazmat_suit_boots", "#forge:plates/lead","immersiveengineering:hemp_fabric", "#forge:plates/plastic", "immersiveengineering:armor_steel_boots")

	// UN Armor
	AddHelmetRecipe("apocalypsenow:un_armor_helmet", "#forge:plates/copper", "#forge:plates/copper", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:un_armor_chestplate", "#forge:plates/copper", "#forge:plates/copper", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:un_armor_leggings", "#forge:plates/copper", "#forge:plates/copper", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:un_armor_boots", "#forge:plates/copper", "#forge:plates/copper", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")
	
	// Military Canada
	AddHelmetRecipe("apocalypsenow:canadian_army_helmet", "#forge:plates/iron", "apocalypsenow:canada_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:canadian_army_chestplate", "#forge:plates/iron", "apocalypsenow:canada_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:canadian_army_leggings", "#forge:plates/iron", "apocalypsenow:canada_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:canadian_army_boots", "#forge:plates/iron", "apocalypsenow:canada_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")

	// Military US
	AddHelmetRecipe("apocalypsenow:us_army_helmet", "#forge:plates/iron", "#forge:dyes/green", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:us_army_chestplate", "#forge:plates/iron", "#forge:dyes/green", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:us_army_leggings", "#forge:plates/iron", "#forge:dyes/green", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:us_army_boots", "#forge:plates/iron", "#forge:dyes/green", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")

	// Military mexican
	AddHelmetRecipe("apocalypsenow:mexican_army_helmet", "#forge:plates/iron", "apocalypsenow:mexico_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:mexican_army_chestplate", "#forge:plates/iron", "apocalypsenow:mexico_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:mexican_army_leggings", "#forge:plates/iron", "apocalypsenow:mexico_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:mexican_army_boots", "#forge:plates/iron", "apocalypsenow:mexico_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")
	
	// Military russian
	AddHelmetRecipe("apocalypsenow:russian_army_helmet", "#forge:plates/iron", "apocalypsenow:russian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:russian_army_chestplate", "#forge:plates/iron", "apocalypsenow:russian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:russian_army_leggings", "#forge:plates/iron", "apocalypsenow:russian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:russian_army_boots", "#forge:plates/iron", "apocalypsenow:russian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")
	
	// Military chinese
	AddHelmetRecipe("apocalypsenow:chinese_army_helmet", "#forge:plates/iron", "apocalypsenow:china_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:chinese_army_chestplate", "#forge:plates/iron", "apocalypsenow:china_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:chinese_army_leggings", "#forge:plates/iron", "apocalypsenow:china_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:chinese_army_boots", "#forge:plates/iron", "apocalypsenow:china_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")
	
	// Military japanese
	AddHelmetRecipe("apocalypsenow:japanese_army_helmet", "#forge:plates/iron", "apocalypsenow:japan_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:japanese_army_chestplate", "#forge:plates/iron", "apocalypsenow:japan_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:japanese_army_leggings", "#forge:plates/iron", "apocalypsenow:japan_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:japanese_army_boots", "#forge:plates/iron", "apocalypsenow:japan_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")
	
	// Military british
	AddHelmetRecipe("apocalypsenow:british_army_helmet", "#forge:plates/iron", "apocalypsenow:british_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:british_army_chestplate", "#forge:plates/iron", "apocalypsenow:british_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:british_army_leggings", "#forge:plates/iron", "apocalypsenow:british_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:british_army_boots", "#forge:plates/iron", "apocalypsenow:british_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")
	
	// Military usa
	AddHelmetRecipe("apocalypsenow:usa_armor_helmet", "#forge:plates/iron", "apocalypsenow:usa_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:usa_armor_chestplate", "#forge:plates/iron", "apocalypsenow:usa_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:usa_armor_leggings", "#forge:plates/iron", "apocalypsenow:usa_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:usa_armor_boots", "#forge:plates/iron", "apocalypsenow:usa_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")
	
	// Military italian
	AddHelmetRecipe("apocalypsenow:italian_bersaglieri_army_helmet", "#forge:plates/iron", "apocalypsenow:italian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:italian_bersaglieri_army_chestplate", "#forge:plates/iron", "apocalypsenow:italian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:italian_bersaglieri_army_leggings", "#forge:plates/iron", "apocalypsenow:italian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:italian_bersaglieri_army_boots", "#forge:plates/iron", "apocalypsenow:italian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")
	
	// Military brazil
	AddHelmetRecipe("apocalypsenow:brazilian_army_helmet", "#forge:plates/iron", "apocalypsenow:brazilian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_helmet")
	AddChestplateRecipe("apocalypsenow:brazilian_army_chestplate", "#forge:plates/iron", "apocalypsenow:brazilian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_chestplate")
	AddLeggingsRecipe("apocalypsenow:brazilian_army_leggings", "#forge:plates/iron", "apocalypsenow:brazilian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_leggings")
	AddBootsRecipe("apocalypsenow:brazilian_army_boots", "#forge:plates/iron", "apocalypsenow:brazilian_tag", "immersiveengineering:hemp_fabric", "immersiveengineering:armor_steel_boots")
	
	let AddExoskeletonRecipe = (outputItem, primaryInput, secondaryInput, specialInput, specialInputTwo, chestplateInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
			'II II',
			'XVOVX',
			'IXKXI'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: chestplateInput,
			V: specialInput,
			K: specialInputTwo
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddJetpackRecipe = (outputItem, primaryInput, secondaryInput, specialInput, specialInputTwo, component, chestplateInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
			'II II',
			'VFOFV',
			'IXKXI'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: chestplateInput,
			V: specialInput,
			K: specialInputTwo,
			F: component
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}

	// Exoskeleton
	AddExoskeletonRecipe("create_sa:brass_exoskeleton_chestplate", "#forge:plates/brass", "#forge:wires/steel", "#forge:storage_blocks/brass", "create_sa:steam_engine", "immersiveengineering:armor_steel_chestplate")
	AddExoskeletonRecipe("create_sa:copper_exoskeleton_chestplate", "#forge:plates/copper", "#forge:wires/steel", "#forge:storage_blocks/copper", "create_sa:hydraulic_engine", "immersiveengineering:armor_steel_chestplate")
	AddExoskeletonRecipe("create_sa:andesite_exoskeleton_chestplate", "create:andesite_alloy", "#forge:wires/steel", "#forge:storage_blocks/andesite_alloy", "create_sa:heat_engine", "immersiveengineering:armor_steel_chestplate")
	
	// Jetpacks
	AddJetpackRecipe("create_sa:brass_jetpack_chestplate", "#forge:plates/brass", "#forge:wires/steel", "#forge:storage_blocks/brass", "create_sa:steam_engine", "deceasedcraft:intermediate_armor_component", "immersiveengineering:armor_steel_chestplate")
	AddJetpackRecipe("create_sa:copper_jetpack_chestplate", "#forge:plates/copper", "#forge:wires/steel", "#forge:storage_blocks/copper", "create_sa:hydraulic_engine", "deceasedcraft:intermediate_armor_component", "immersiveengineering:armor_steel_chestplate")
	AddJetpackRecipe("create_sa:andesite_jetpack_chestplate", "create:andesite_alloy", "#forge:wires/steel", "#forge:storage_blocks/andesite_alloy", "create_sa:heat_engine", "deceasedcraft:intermediate_armor_component", "immersiveengineering:armor_steel_chestplate")
	AddJetpackRecipe("create_sa:netherite_jetpack_chestplate", "minecraft:netherite_scrap", "deceasedcraft:high_resistance_fiber", "#forge:ingots/netherite", "create_sa:steam_engine", "deceasedcraft:advanced_armor_component", "minecraft:netherite_chestplate")
})

// Tier 4
ServerEvents.recipes(event => {
	let AddSpecialHelmetRecipe = (outputItem, primaryInput, specialInput, secondaryInput, helmetInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
		'XIXIX',
		'IVOVI'
		], {
		I: primaryInput,
		X: secondaryInput,
		O: helmetInput,
		V: specialInput
	}).id("deceasedcraft:" + slicedOutputName + "_recipe")
		
	}
	let AddSpecialChestplateRecipe = (outputItem, primaryInput, specialInput, secondaryInput, chestplateInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
			'IV VI',
			'XVOVX',
			'IXVXI'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: chestplateInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddSpecialLeggingsRecipe = (outputItem, primaryInput, specialInput, secondaryInput, leggingsInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
			'XIVIX',
			'IVOVI',
			'I   I'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: leggingsInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}
	let AddSpecialBootsRecipe = (outputItem, primaryInput, specialInput, secondaryInput, bootsInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.remove({output: outputItem})
		event.recipes.create.mechanical_crafting(outputItem, [
			'IVOVI',
			'X   X'
		], {
			I: primaryInput,
			X: secondaryInput,
			O: bootsInput,
			V: specialInput
		}).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}

	let AddShapelessRecipe = (outputItem, primaryInput, secondaryInput) => {
		let slicedOutputName = outputItem.split(":")[1]
		event.shapeless(outputItem, [
			primaryInput, secondaryInput
		]).id("deceasedcraft:" + slicedOutputName + "_recipe")
	}

	// Tier 4 Armors
	// Netherite
	AddSpecialHelmetRecipe("minecraft:netherite_helmet", "minecraft:netherite_scrap", "apocalypsenow:cloth", "deceasedcraft:resistant_fiber", "deceasedcraft:advanced_armor_component")
	AddSpecialChestplateRecipe("minecraft:netherite_chestplate", "minecraft:netherite_scrap", "apocalypsenow:cloth", "deceasedcraft:resistant_fiber", "deceasedcraft:advanced_armor_component")
	AddSpecialLeggingsRecipe("minecraft:netherite_leggings", "minecraft:netherite_scrap", "apocalypsenow:cloth", "deceasedcraft:resistant_fiber", "deceasedcraft:advanced_armor_component")
	AddSpecialBootsRecipe("minecraft:netherite_boots", "minecraft:netherite_scrap", "apocalypsenow:cloth", "deceasedcraft:resistant_fiber", "deceasedcraft:advanced_armor_component")
	
	// Swat
	AddSpecialHelmetRecipe("apocalypsenow:swat_helmet", "deceasedcraft:resistant_fabric", "deceasedcraft:resistant_fiber", "apocalypsenow:cloth", "minecraft:netherite_helmet")
	AddSpecialChestplateRecipe("apocalypsenow:swat_chestplate", "deceasedcraft:resistant_fabric", "deceasedcraft:resistant_fiber", "apocalypsenow:cloth", "minecraft:netherite_chestplate")
	AddSpecialLeggingsRecipe("apocalypsenow:swat_leggings", "deceasedcraft:resistant_fabric", "deceasedcraft:resistant_fiber", "apocalypsenow:cloth", "minecraft:netherite_leggings")
	AddSpecialBootsRecipe("apocalypsenow:swat_boots", "deceasedcraft:resistant_fabric", "deceasedcraft:resistant_fiber", "apocalypsenow:cloth", "minecraft:netherite_boots")

	// Swat Riot
	AddSpecialHelmetRecipe("apocalypsenow:swatriotcontrol_helmet", "deceasedcraft:resistant_fabric", "deceasedcraft:resistant_fiber", "minecraft:netherite_scrap",  "minecraft:netherite_helmet")
	AddSpecialChestplateRecipe("apocalypsenow:swatriotcontrol_chestplate", "deceasedcraft:resistant_fabric", "deceasedcraft:resistant_fiber", "minecraft:netherite_scrap", "minecraft:netherite_chestplate")
	AddSpecialLeggingsRecipe("apocalypsenow:swatriotcontrol_leggings", "deceasedcraft:resistant_fabric", "deceasedcraft:resistant_fiber", "minecraft:netherite_scrap", "minecraft:netherite_leggings")
	AddSpecialBootsRecipe("apocalypsenow:swatriotcontrol_boots", "deceasedcraft:resistant_fabric", "deceasedcraft:resistant_fiber", "minecraft:netherite_scrap", "minecraft:netherite_boots")

	// Juggernaut
	AddSpecialHelmetRecipe("apocalypsenow:juggernaut_helmet", "deceasedcraft:resistant_fabric", "#forge:plates/lead", "minecraft:netherite_scrap", "minecraft:netherite_helmet")
	AddSpecialChestplateRecipe("apocalypsenow:juggernaut_chestplate", "deceasedcraft:resistant_fabric", "#forge:plates/lead", "minecraft:netherite_scrap", "minecraft:netherite_chestplate")
	AddSpecialLeggingsRecipe("apocalypsenow:juggernaut_leggings", "deceasedcraft:resistant_fabric", "#forge:plates/lead", "minecraft:netherite_scrap", "minecraft:netherite_leggings")
	AddSpecialBootsRecipe("apocalypsenow:juggernaut_boots", "deceasedcraft:resistant_fabric", "#forge:plates/lead", "minecraft:netherite_scrap", "minecraft:netherite_boots")

	// Bombsquad
	AddSpecialHelmetRecipe("apocalypsenow:bombsquad_helmet", "deceasedcraft:resistant_fabric", "#forge:plates/steel", "minecraft:netherite_scrap", "minecraft:netherite_helmet")
	AddSpecialChestplateRecipe("apocalypsenow:bombsquad_chestplate", "deceasedcraft:resistant_fabric", "#forge:plates/steel", "minecraft:netherite_scrap", "minecraft:netherite_chestplate")
	AddSpecialLeggingsRecipe("apocalypsenow:bombsquad_leggings", "deceasedcraft:resistant_fabric", "#forge:plates/steel", "minecraft:netherite_scrap", "minecraft:netherite_leggings")
	AddSpecialBootsRecipe("apocalypsenow:bombsquad_boots", "deceasedcraft:resistant_fabric", "#forge:plates/steel", "minecraft:netherite_scrap", "minecraft:netherite_boots")

	// Spec Ops
	AddSpecialHelmetRecipe("apocalypsenow:spec_ops_helmet", "deceasedcraft:resistant_fabric", "apocalypsenow:cloth", "minecraft:netherite_scrap", "minecraft:netherite_helmet")
	AddSpecialChestplateRecipe("apocalypsenow:spec_ops_chestplate", "deceasedcraft:resistant_fabric", "apocalypsenow:cloth", "minecraft:netherite_scrap", "minecraft:netherite_chestplate")
	AddSpecialLeggingsRecipe("apocalypsenow:spec_ops_leggings", "deceasedcraft:resistant_fabric", "apocalypsenow:cloth", "minecraft:netherite_scrap", "minecraft:netherite_leggings")
	AddSpecialBootsRecipe("apocalypsenow:spec_ops_boots", "deceasedcraft:resistant_fabric", "apocalypsenow:cloth", "minecraft:netherite_scrap", "minecraft:netherite_boots")

	// Soldier
	AddSpecialHelmetRecipe("apocalypsenow:soldier_helmet", "deceasedcraft:resistant_fabric", "deceasedcraft:rubber", "minecraft:netherite_scrap", "minecraft:netherite_helmet")
	AddSpecialChestplateRecipe("apocalypsenow:soldier_chestplate", "deceasedcraft:resistant_fabric", "deceasedcraft:rubber", "minecraft:netherite_scrap", "minecraft:netherite_chestplate")
	AddSpecialLeggingsRecipe("apocalypsenow:soldier_leggings", "deceasedcraft:resistant_fabric", "deceasedcraft:rubber", "minecraft:netherite_scrap", "minecraft:netherite_leggings")
	AddSpecialBootsRecipe("apocalypsenow:soldier_boots", "deceasedcraft:resistant_fabric", "deceasedcraft:rubber", "minecraft:netherite_scrap", "minecraft:netherite_boots")
	
	// Biohazard
	AddSpecialHelmetRecipe("apocalypsenow:biohazard_helmet", "deceasedcraft:resistant_fabric", "deceasedcraft:rubber", "minecraft:netherite_scrap", "apocalypsenow:hazmat_suit_helmet")
	AddSpecialChestplateRecipe("apocalypsenow:biohazard_chestplate", "deceasedcraft:resistant_fabric", "deceasedcraft:rubber", "minecraft:netherite_scrap", "apocalypsenow:hazmat_suit_chestplate")
	AddSpecialLeggingsRecipe("apocalypsenow:biohazard_leggings", "deceasedcraft:resistant_fabric", "deceasedcraft:rubber", "minecraft:netherite_scrap", "apocalypsenow:hazmat_suit_leggings")
	AddSpecialBootsRecipe("apocalypsenow:biohazard_boots", "deceasedcraft:resistant_fabric", "deceasedcraft:rubber", "minecraft:netherite_scrap", "apocalypsenow:hazmat_suit_boots")

	// White Contamination suit
	AddShapelessRecipe("apocalypsenow:contamination_suit_white_helmet", "apocalypsenow:biohazard_helmet", "#forge:dyes/white")
	AddShapelessRecipe("apocalypsenow:contamination_suit_white_chestplate", "apocalypsenow:biohazard_chestplate", "#forge:dyes/white")
	AddShapelessRecipe("apocalypsenow:contamination_suit_white_leggings", "apocalypsenow:biohazard_leggings", "#forge:dyes/white")
	
	// blue Contamination suit
	AddShapelessRecipe("apocalypsenow:contamination_suit_blue_helmet", "apocalypsenow:biohazard_helmet", "#forge:dyes/blue")
	AddShapelessRecipe("apocalypsenow:contamination_suit_blue_chestplate", "apocalypsenow:biohazard_chestplate", "#forge:dyes/blue")
	AddShapelessRecipe("apocalypsenow:contamination_suit_blue_leggings", "apocalypsenow:biohazard_leggings", "#forge:dyes/blue")
	
	// green Contamination suit
	AddShapelessRecipe("apocalypsenow:contamination_suit_green_helmet", "apocalypsenow:biohazard_helmet", "#forge:dyes/green")
	AddShapelessRecipe("apocalypsenow:contamination_suit_green_chestplate", "apocalypsenow:biohazard_chestplate", "#forge:dyes/green")
	AddShapelessRecipe("apocalypsenow:contamination_suit_green_leggings", "apocalypsenow:biohazard_leggings", "#forge:dyes/green")
})


// Specials
ServerEvents.recipes(event => {


	// Gas Mask
	let outputItem = "apocalypsenow:gasmask_helmet"
	event.remove({output: outputItem})
	event.shaped(outputItem, [
		'XVX',
		'IOI',
		'QFQ'
	], {
		I: "#forge:plates/lead",
		X: "#forge:plates/plastic",
		O: "#forge:glass",
		Q: "deceasedcraft:rubber",
		F: "apocalypsenow:breathingfiltermodule",
		V: "deceasedcraft:gas_mask_blueprint"
	}).id("deceasedcraft:gas_mask_recipe")
	.keepIngredient("deceasedcraft:gas_mask_blueprint")
})
