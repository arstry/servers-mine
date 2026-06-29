// priority: 0
console.info('Loaded skill_guide_book.js')

let bookXPs = {
    'deceasedcraft:basic_combat_guide': 25,
    'deceasedcraft:intermediate_combat_guide': 100,
    'deceasedcraft:advanced_combat_guide': 200,
    'deceasedcraft:basic_precision_guide': 25,
    'deceasedcraft:intermediate_precision_guide': 100,
    'deceasedcraft:advanced_precision_guide': 200,
    'deceasedcraft:basic_defense_guide': 5,
    'deceasedcraft:intermediate_defense_guide': 10,
    'deceasedcraft:advanced_defense_guide': 25,
    'deceasedcraft:basic_vitality_guide': 5,
    'deceasedcraft:intermediate_vitality_guide': 10,
    'deceasedcraft:advanced_vitality_guide': 25,
    'deceasedcraft:basic_athlete_guide': 500,
    'deceasedcraft:intermediate_athlete_guide': 1500,
    'deceasedcraft:advanced_athlete_guide': 3000,
    'deceasedcraft:basic_endurance_guide': 1000,
    'deceasedcraft:intermediate_endurance_guide': 2000,
    'deceasedcraft:advanced_endurance_guide': 4000,
    'deceasedcraft:basic_spelunker_guide': 15,
    'deceasedcraft:intermediate_spelunker_guide': 50,
    'deceasedcraft:advanced_spelunker_guide': 100,
}

let bookCategory = {
    'deceasedcraft:basic_combat_guide': "combat",
    'deceasedcraft:intermediate_combat_guide': "combat",
    'deceasedcraft:advanced_combat_guide': "combat",
    'deceasedcraft:basic_precision_guide': "precision",
    'deceasedcraft:intermediate_precision_guide': "precision",
    'deceasedcraft:advanced_precision_guide': "precision",
    'deceasedcraft:basic_defense_guide': "defense",
    'deceasedcraft:intermediate_defense_guide': "defense",
    'deceasedcraft:advanced_defense_guide': "defense",
    'deceasedcraft:basic_vitality_guide': "vitality",
    'deceasedcraft:intermediate_vitality_guide': "vitality",
    'deceasedcraft:advanced_vitality_guide': "vitality",
    'deceasedcraft:basic_athlete_guide': "athlete",
    'deceasedcraft:intermediate_athlete_guide': "athlete",
    'deceasedcraft:advanced_athlete_guide': "athlete",
    'deceasedcraft:basic_endurance_guide': "endurance",
    'deceasedcraft:intermediate_endurance_guide': "endurance",
    'deceasedcraft:advanced_endurance_guide': "endurance",
    'deceasedcraft:basic_spelunker_guide': "spelunker",
    'deceasedcraft:intermediate_spelunker_guide': "spelunker",
    'deceasedcraft:advanced_spelunker_guide': "spelunker"
}

ItemEvents.rightClicked(event => {
	let player = event.player
    let item = player.mainHandItem

    if (item.id in bookXPs)
    {
        let command = `puffish_skills experience add ${player.username} puffish_skills:${bookCategory[item.id]} ${bookXPs[item.id]}`
        event.server.runCommandSilent(command);
        item.count--
    }
})
