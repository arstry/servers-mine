// priority: 0
console.info('Loaded flyer_usage.js')

ItemEvents.rightClicked(event => {

    const id = event.item.id
    const prefix = "deceasedcraft:flyer_"

    if (id.startsWith(prefix)) {

        const suffix = id.substring(prefix.length); 
        const player = event.player;
        const playername = player.username;

		event.item.shrink(1);
        event.server.runCommandSilent(`lostradar ${playername} learn ${suffix}`);
		player.tell(Component.translate('deceasedcraft.flyer.learn', Component.translate('deceasedcraft.advancement.title.' + suffix)));
        event.cancel();
    }
});