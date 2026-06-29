// Wool Repair
let woolRepairItems = [
	"apocalypsenow:baseball_bat",
	"apocalypsenow:spiked_baseball_bat",
	"apocalypsenow:wrapped_baseball_bat",
	"apocalypsenow:wired_baseball_bat",
	"apocalypsenow:saw_baseball_bat",
	"apocalypsenow:electrical_baseball_bat",
	"apocalypsenow:wooden_shovel",
	"apocalypsenow:stone_shovel",
	"create_sa:copper_shovel",
	"create_sa:zinc_shovel",
	"create_sa:copper_sword",
	"create_sa:zinc_sword",
	"create_sa:zinc_hoe",
	"create_sa:copper_hoe",
	"create_sa:zinc_hoe",
	"create_sa:copper_hoe",
	"create_sa:zinc_axe",
	"create_sa:copper_axe",
	"minecraft:wooden_sword",
	"minecraft:wooden_axe",
	"minecraft:wooden_hoe",
	"minecraft:wooden_shovel",
	"minecraft:stone_axe",
	"minecraft:stone_sword",
	"minecraft:stone_hoe",
	"minecraft:stone_shovel",
	"apocalypsenow:red_boxing_gloves",
	"apocalypsenow:blue_boxing_gloves",
	"apocalypsenow:club",
	"apocalypsenow:club_with_saw",
	"apocalypsenow:rolling_pin"
]

// Iron Repair
let ironRepairItems = [
	"minecraft:iron_axe",
	"minecraft:iron_pickaxe",
	"minecraft:iron_shovel",
	"minecraft:iron_hoe",
	"minecraft:iron_sword",
	"create_sa:brass_hoe",
	"create_sa:brass_sword",
	"create_sa:brass_shovel",
	"farmersdelight:skillet",
	"apocalypsenow:scythe",
	"apocalypsenow:hand_axe",
	"apocalypsenow:survival_axe",
	"apocalypsenow:tourist_axe",
	"apocalypsenow:ice_axe",
	"apocalypsenow:gardening_axe",
	"apocalypsenow:construction_axe",
	"apocalypsenow:machete",
	"apocalypsenow:cleaver",
	"apocalypsenow:black_cleaver",
	"apocalypsenow:serrated_machete",
	"apocalypsenow:hawkbill_machete",
	"apocalypsenow:bread_knife",
	"apocalypsenow:cutter_knife",
	"apocalypsenow:shiv",
	"apocalypsenow:scalpel",
	"apocalypsenow:rubber_hammer",
	"apocalypsenow:hammer",
	"apocalypsenow:improvised_hammer",
	"apocalypsenow:premium_hammer",
	"apocalypsenow:ballpeen_hammer",
	"apocalypsenow:iron_baseball_bat",
	"apocalypsenow:construction_shovel",
	"apocalypsenow:pipe",
	"apocalypsenow:pipe_wrench",
	"apocalypsenow:night_stick",
	"apocalypsenow:reinforced_red_boxing_gloves",
	"apocalypsenow:reinforced_blue_boxing_gloves",
	"apocalypsenow:stopsign_shield",
	"apocalypsenow:trash_shield"
]

let steelRepairItems = [
	"apocalypsenow:fire_axe",
	"apocalypsenow:emergency_axe",
	"apocalypsenow:wooden_fire_axe",
	"apocalypsenow:lumber_jack_axe",
	"apocalypsenow:red_lumberjack_axe",
	"apocalypsenow:brass_knuckles",
	"create_sa:rose_quartz_axe",
	"create_sa:rose_quartz_shovel",
	"create_sa:rose_quartz_sword",
	"create_sa:rose_quartz_pickaxe",
	"create_sa:blazing_shovel",
	"apocalypsenow:taiga_1_survival_machete",
	"apocalypsenow:heavy_machete",
	"apocalypsenow:bowie_machete",
	"apocalypsenow:switch_knife",
	"apocalypsenow:knife",
	"apocalypsenow:chefs_knife",
	"apocalypsenow:kitchen_knife",
	"apocalypsenow:hunting_knife",
	"apocalypsenow:long_knife",
	"apocalypsenow:expedition_knife",
	"apocalypsenow:stilettoknife",
	"apocalypsenow:mk_knife",
	"apocalypsenow:english_punch_knife",
	"apocalypsenow:meat_hammer",
	"apocalypsenow:sledge_hammer",
	"apocalypsenow:spiked_iron_baseball_bat",
	"apocalypsenow:snow_shovel",
	"immersiveengineering:pickaxe_steel",
	"immersiveengineering:shovel_steel",
	"immersiveengineering:sword_steel",
	"immersiveengineering:hoe_steel",
	"immersiveengineering:shield",
	"immersiveengineering:axe_steel",
	"minecraft:diamond_shovel",
	"minecraft:diamond_sword",
	"minecraft:diamond_axe",
	"minecraft:diamond_pickaxe",
	"minecraft:diamond_shovel",
	"minecraft:diamond_hoe",
	"apocalypsenow:mace",
	"apocalypsenow:stun_baton",
	"apocalypsenow:electric_baton",
	"apocalypsenow:police_shield",
	"apocalypsenow:riot_shield"
]

let netheriteRepairItems = [
	"minecraft:netherite_axe",
	"minecraft:netherite_pickaxe",
	"minecraft:netherite_shovel",
	"minecraft:netherite_hoe",
	"apocalypsenow:combat_axe",
	"apocalypsenow:electrical_combat_axe",
	"apocalypsenow:kukri_machete",
	"apocalypsenow:fire_module_machete",
	"apocalypsenow:combat_survival_knife",
	"apocalypsenow:combat_knife",
	"apocalypsenow:dagger",
	"apocalypsenow:butterfly_knife",
	"apocalypsenow:military_knife",
	"apocalypsenow:tactical_machete",
	"apocalypsenow:tactical_knife",
	"apocalypsenow:tactical_sword",
	"apocalypsenow:tactical_saber",
	"apocalypsenow:tatical_mace",
	"apocalypsenow:electrical_tactical_mace",
	"apocalypsenow:laminated_iron_baseball_bat",
	"apocalypsenow:flame_module_iron_baseball_bat",
	"minecraft:netherite_shovel",
	"apocalypsenow:military_shovel",
	"minecraft:netherite_sword",
	"minecraft:netherite_hoe",
	"apocalypsenow:katana",
	"apocalypsenow:fire_module_katana",
	"apocalypsenow:electric_module_katana",
	"apocalypsenow:ballistic_shield"
]

ServerEvents.tags('item', event => {
	woolRepairItems.forEach((item) => {
		event.add('forge:repair/wool', item)
    });

	ironRepairItems.forEach((item) => {
		event.add('forge:repair/iron', item)
    });

	steelRepairItems.forEach((item) => {
		event.add('forge:repair/steel', item)
    });
	
	netheriteRepairItems.forEach((item) => {
		event.add('forge:repair/netherite_scrap', item)
    });
})