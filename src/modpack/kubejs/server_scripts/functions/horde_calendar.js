// priority: 0
console.info('Loaded horde_calendar.js')
let hordeDays = 15
let defaultDayTime = 24000.0

ItemEvents.rightClicked(event => {
	if (event.player &&
		event.item.id == "deceasedcraft:horde_calendar")
		{
			let playTime = Math.round(event.player.nbt.playtime / defaultDayTime)
			let hordeDay = hordeDays - (playTime % hordeDays);
			event.player.tell(Component.translate('deceasedcraft.horde.playtime_day_start').append(' ').append(Component.green(playTime)).append(" ").append(Component.translate('deceasedcraft.horde.playtime_day_end')))
			if (hordeDay == hordeDays)
			{
				hordeDay = 0
				event.player.tell(Component.translate('deceasedcraft.horde.horde_day_start').append(' ').append(Component.red(hordeDay)).append(" ").append(Component.translate('deceasedcraft.horde.horde_day_end')))
			}
			else
			{
				event.player.tell(Component.translate('deceasedcraft.horde.horde_day_start').append(' ').append(Component.yellow(hordeDay)).append(" ").append(Component.translate('deceasedcraft.horde.horde_day_end')))
			}
		}
});