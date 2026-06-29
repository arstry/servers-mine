StartupEvents.registry('item', event => {
    event.create('paste')
        .texture('kubejs:item/paste')
        .maxStackSize(64)
        .displayName("Paste")
})