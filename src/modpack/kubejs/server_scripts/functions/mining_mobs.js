// priority: 0
console.info('Loaded mining mobs.js')

let mobList = {
    "undead_revamp2:bomber": 2.0,
    "undead_revamp2:thehunter": 2.0,
    "undead_revamp2:thesmoker": 2.0,
    "undead_revamp2:the_moonflower": 2.0,
    "undead_revamp2:sucker": 1.5,
    "undead_revamp2:thepregnant": 1.0,
    "undead_revamp2:thegliter": 1.0,
    "undead_revamp2:thelurker": 0.5,
    "undead_revamp2:bigsucker": 0.5
}

// Adding a spawn event for mining mobs
EntityEvents.spawned(event => {
    const { entity } = event
    if (mobList[entity.type])
    {
        entity.mergeNbt({
            "ForgeData": {
                "enhancedai:time_to_break_multiplier" : mobList[entity.type]
            }
        })
    }
});
