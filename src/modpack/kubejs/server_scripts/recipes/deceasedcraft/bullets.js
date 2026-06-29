ServerEvents.recipes(event => {

	let casingRecipe = (output, InputMold, material, outputCount) => {
		event.custom({
			type: 'immersiveengineering:metal_press',
			energy: 2400,
			input: {
				tag: material
			},
			mold: InputMold,
			result: {
				count: outputCount,
				item: output
			}
		})
	}

	let bulletSequenceRecipe = (input, InputAmmoId, material, amount) => {
		let nbtData = {AmmoId: 'tacz:' + InputAmmoId}
		let incomplete_item = 'deceasedcraft:incomplete_bullet'
		event.recipes.create.sequenced_assembly([
			Item.of('tacz:ammo', amount, nbtData).withChance(100.0)
		], input, [
			event.recipes.createDeploying(incomplete_item, [incomplete_item, 'createbigcannons:gunpowder_pinch']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, material])
		]).transitionalItem(incomplete_item)
		.loops(1)
		.id('deceasedcraft:' + InputAmmoId + '_recipe')
	}
	
	let expensiveBulletSequenceRecipe = (input, InputAmmoId, material, amount) => {
		let nbtData = {AmmoId: 'tacz:' + InputAmmoId}
		let incomplete_item = 'deceasedcraft:incomplete_bullet'
		event.recipes.create.sequenced_assembly([
			Item.of('tacz:ammo', amount, nbtData).withChance(100.0)
		], input, [
			event.recipes.createDeploying(incomplete_item, [incomplete_item, '#forge:gunpowder']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, material])
		]).transitionalItem(incomplete_item)
		.loops(1)
		.id('deceasedcraft:' + InputAmmoId + '_recipe')
	}

	let tankShellSequenceRecipe = (input, InputAmmoId, material, secondMaterial, amount) => {
		let nbtData = {AmmoId: 'rebel:' + InputAmmoId}
		let incomplete_item = 'deceasedcraft:incomplete_bullet'
		event.recipes.create.sequenced_assembly([
			Item.of('tacz:ammo', amount, nbtData).withChance(100.0)
		], input, [
			event.recipes.createDeploying(incomplete_item, [incomplete_item, 'quark:gunpowder_sack']),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, material]),
			event.recipes.createDeploying(incomplete_item, [incomplete_item, secondMaterial])
		]).transitionalItem(incomplete_item)
		.loops(1)
		.id('deceasedcraft:' + InputAmmoId + '_recipe')
	}
	casingRecipe('deceasedcraft:bullet_casing_9mm_round', 'deceasedcraft:mold_bullet_casing_9mm', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_45acp', 'deceasedcraft:mold_bullet_casing_45acp', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_357magnum', 'deceasedcraft:mold_bullet_casing_357magnum', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_ae50', 'deceasedcraft:mold_bullet_casing_ae50', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_12g', 'deceasedcraft:mold_bullet_casing_12g', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_556x45', 'deceasedcraft:mold_bullet_casing_556x45', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_57x28', 'deceasedcraft:mold_bullet_casing_57x28', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_762x39', 'deceasedcraft:mold_bullet_casing_762x39', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_30_06', 'deceasedcraft:mold_bullet_casing_30_06', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_338', 'deceasedcraft:mold_bullet_casing_338', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_308', 'deceasedcraft:mold_bullet_casing_308', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_762x54', 'deceasedcraft:mold_bullet_casing_762x54', "forge:ingots/brass", 4)
	casingRecipe('deceasedcraft:bullet_casing_50bmg', 'deceasedcraft:mold_bullet_casing_50bmg', "forge:ingots/brass", 2)
	casingRecipe('deceasedcraft:bullet_casing_40mm', 'deceasedcraft:mold_bullet_casing_40mm', "forge:ingots/brass", 1)
	casingRecipe('deceasedcraft:bullet_casing_37mm', 'deceasedcraft:mold_bullet_casing_37mm', "forge:storage_blocks/brass", 2)

	bulletSequenceRecipe('deceasedcraft:bullet_casing_9mm_round', '9mm', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_45acp', '45acp', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_357magnum', '357mag', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_ae50', '50ae', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_12g', '12g', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_556x45', '556x45', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_57x28', '57x28', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_762x39', '762x39', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_30_06', '30_06', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_308', '308', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_762x54', '762x54', '#forge:nuggets/lead', 1)
	bulletSequenceRecipe('deceasedcraft:bullet_casing_338', '338', '#forge:nuggets/lead', 1)
	expensiveBulletSequenceRecipe('deceasedcraft:bullet_casing_50bmg', '50bmg', '#forge:ingots/lead', 1)
	expensiveBulletSequenceRecipe('deceasedcraft:bullet_casing_40mm', '40mm', 'minecraft:tnt', 1)
	tankShellSequenceRecipe('deceasedcraft:bullet_casing_37mm', '37aphe', 'minecraft:tnt', 'immersiveengineering:storage_lead', 1)
})