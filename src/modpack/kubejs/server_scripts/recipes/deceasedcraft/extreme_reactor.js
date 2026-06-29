// Extreme Reactor Recipes
ServerEvents.recipes(event => {
	
	event.remove({ id: 'bigreactors:reactor/reinforced/casing' })
	event.remove({ id: 'bigreactors:reactor/reinforced/casing_upgrade' })
	event.shaped('bigreactors:reinforced_reactorcasing', [
		'IXI',
		'XOX',
		'IXI'
	  ], {
		I: '#forge:plates/steel',
		X: '#forge:plates/lead',
		O: 'refinedstorage:machine_casing'
	}).id("deceasedcraft:reinforced_reactor_casing")
	
	event.remove({ output: 'bigreactors:reinforced_reactorfuelrod' })
	event.shaped('bigreactors:reinforced_reactorfuelrod', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: '#forge:plates/steel',
		X: '#forge:rods/steel',
		O: '#forge:ingots/uranium',
		V: '#forge:glass'
	}).id("deceasedcraft:reinforced_reactor_fuel_rod")
	
	event.remove({ output: 'bigreactors:reinforced_reactorcontroller' })
	event.shaped('bigreactors:reinforced_reactorcontroller', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reinforced_reactorcasing',
		X: 'refinedstorage:advanced_processor',
		O: '#refinedstorage:controller',
		V: 'refinedstorage:cable'
	}).id("deceasedcraft:reinforced_reactor_controller")
	
	event.remove({ output: 'bigreactors:reinforced_reactorcontrolrod' })
	event.shaped('bigreactors:reinforced_reactorcontrolrod', [
		'IXI',
		'VOV',
		'IOI'
	  ], {
		I: '#forge:plates/steel',
		X: 'create:mechanical_piston',
		O: 'immersiveengineering:graphite_electrode',
		V: '#forge:plates/lead',
	}).id("deceasedcraft:reinforced_reactor_control_rod")
	
	event.remove({ output: 'bigreactors:reinforced_reactorsolidaccessport' })
	event.shaped('bigreactors:reinforced_reactorsolidaccessport', [
		'IKI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reinforced_reactorcasing',
		X: 'create:mechanical_arm',
		O: 'immersiveengineering:steel_scaffolding_standard',
		V: '#forge:plates/lead',
		K: 'minecraft:hopper'
	}).id("deceasedcraft:reinforced_reactor_solid_access_port")
	
	event.remove({ output: 'bigreactors:reinforced_reactorfluidaccessport' })
	event.shaped('bigreactors:reinforced_reactorfluidaccessport', [
		'IKI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reinforced_reactorcasing',
		X: 'create:mechanical_arm',
		O: 'immersiveengineering:metal_barrel',
		V: '#forge:plates/lead',
		K: 'minecraft:hopper'
	}).id("deceasedcraft:reinforced_reactor_fluid_access_port")
	
	event.remove({ output: 'bigreactors:reinforced_reactorredstoneport' })
	event.shaped('bigreactors:reinforced_reactorredstoneport', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reinforced_reactorcasing',
		X: 'refinedstorage:improved_processor',
		O: '#forge:ingots/gold',
		V: '#forge:plates/lead'
	}).id("deceasedcraft:reinforced_reactor_redstone_port")

	
	event.remove({ output: 'bigreactors:reinforced_reactorchargingportfe' })
	event.shaped('bigreactors:reinforced_reactorchargingportfe', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: '#forge:plates/steel',
		X: 'immersiveengineering:wirecoil_copper',
		O: 'immersiveengineering:charging_station',
		V: '#forge:plates/lead'
	}).id("deceasedcraft:reinforced_reactor_charging_port_fe")
	
	event.remove({ output: 'bigreactors:reinforced_reactorfluidport_forge_passive' })
	event.shaped('bigreactors:reinforced_reactorfluidport_forge_passive', [
		'IVI',
		'VOV',
		'IVI'
	  ], {
		I: 'bigreactors:reinforced_reactorcasing',
		O: 'immersiveengineering:fluid_sorter',
		V: 'immersiveengineering:fluid_pipe'
	}).id("deceasedcraft:reinforced_reactor_fluid_port_forge_passive")
	
	event.remove({ output: 'bigreactors:reinforced_reactorfluidport_forge_active' })
	event.shaped('bigreactors:reinforced_reactorfluidport_forge_active', [
		'IVI',
		'VOV',
		'IVI'
	  ], {
		I: 'bigreactors:reinforced_reactorcasing',
		O: 'immersiveengineering:fluid_sorter',
		V: 'create:fluid_pipe'
	}).id("deceasedcraft:reinforced_reactor_fluid_port_forge_active")

})

// Turbine Recipes
ServerEvents.recipes(event => {

	event.remove({ output: 'bigreactors:reinforced_turbinecontroller' })
	event.shaped('bigreactors:reinforced_turbinecontroller', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reinforced_turbinecasing',
		X: 'refinedstorage:advanced_processor',
		O: '#refinedstorage:controller',
		V: 'refinedstorage:cable'
	}).id("deceasedcraft:reinforced_turbine_controller")

	
	event.remove({ id: 'bigreactors:turbine/reinforced/casing' })
	event.remove({ id: 'bigreactors:turbine/reinforced/casing_upgrade' })
	event.shaped('bigreactors:reinforced_turbinecasing', [
		'IXI',
		'XOX',
		'IXI'
	  ], {
		I: '#forge:plates/steel',
		X: '#forge:plates/aluminum',
		O: 'refinedstorage:machine_casing'
	}).id("deceasedcraft:reinforced_turbine_casing")
	
	event.remove({ output: 'bigreactors:reinforced_turbinerotorbearing' })
	event.shaped('bigreactors:reinforced_turbinerotorbearing', [
		'IXI',
		'XOX',
		'IXI'
	  ], {
		I: '#forge:plates/steel',
		X: 'immersiveengineering:wirecoil_steel',
		O: 'createaddition:alternator'
	}).id("deceasedcraft:reinforced_turbine_rotor_bearing")
	
	event.remove({ output: 'bigreactors:reinforced_turbinerotorshaft' })
	event.shaped('bigreactors:reinforced_turbinerotorshaft', [
		' X ',
		'XOX',
		' X '
	  ], {
		X: '#forge:ingots/steel',
		O: 'immersiveengineering:heavy_engineering'
	}).id("deceasedcraft:reinforced_turbine_rotor_shaft")
	
	event.remove({ output: 'bigreactors:reinforced_turbinerotorblade' })
	event.shaped('2x bigreactors:reinforced_turbinerotorblade', [
		'XOX'
	  ], {
		X: '#forge:ingots/steel',
		O: 'immersiveengineering:light_engineering'
	}).id("deceasedcraft:reinforced_turbine_rotor_blade")

	
	event.remove({ output: 'bigreactors:reinforced_turbinechargingportfe' })
	event.shaped('bigreactors:reinforced_turbinechargingportfe', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: '#forge:plates/steel',
		X: 'immersiveengineering:wirecoil_copper',
		O: 'immersiveengineering:charging_station',
		V: '#forge:plates/aluminum'
	}).id("deceasedcraft:reinforced_turbine_charging_port_fe")

	
	event.remove({ output: 'bigreactors:reinforced_turbineredstoneport' })
	event.shaped('bigreactors:reinforced_turbineredstoneport', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reinforced_turbinecasing',
		X: 'refinedstorage:improved_processor',
		O: '#forge:ingots/gold',
		V: '#forge:plates/aluminum'
	}).id("deceasedcraft:reinforced_turbine_redstone_port")

	
	event.remove({ output: 'bigreactors:reinforced_turbinefluidport_forge_passive' })
	event.shaped('bigreactors:reinforced_turbinefluidport_forge_passive', [
		'IVI',
		'VOV',
		'IVI'
	  ], {
		I: 'bigreactors:reinforced_turbinecasing',
		O: 'immersiveengineering:fluid_sorter',
		V: 'immersiveengineering:fluid_pipe'
	}).id("deceasedcraft:reinforced_turbine_fluid_port_forge_passive")
	
	event.remove({ output: 'bigreactors:reinforced_turbinefluidport_forge_active' })
	event.shaped('bigreactors:reinforced_turbinefluidport_forge_active', [
		'IVI',
		'VOV',
		'IVI'
	  ], {
		I: 'bigreactors:reinforced_turbinecasing',
		O: 'immersiveengineering:fluid_sorter',
		V: 'create:fluid_pipe'
	}).id("deceasedcraft:reinforced_turbine_fluid_port_forge_active")

})

// Fluidizer Recipes
ServerEvents.recipes(event => {

	event.remove({ output: 'bigreactors:fluidizercontroller' })
	event.shaped('bigreactors:fluidizercontroller', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:fluidizercasing',
		X: 'refinedstorage:advanced_processor',
		O: '#refinedstorage:controller',
		V: 'refinedstorage:cable'
	}).id("deceasedcraft:fluidizercontroller")

	
	event.remove({ output: 'bigreactors:fluidizercasing' })
	event.shaped('bigreactors:fluidizercasing', [
		'IXI',
		'X X',
		'IXI'
	  ], {
		I: '#forge:plates/aluminum',
		X: '#forge:plates/nickel'
	}).id("deceasedcraft:fluidizer_casing")
	
	
	event.remove({ output: 'bigreactors:fluidizersolidinjector' })
	event.shaped('bigreactors:fluidizersolidinjector', [
		'IKI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:fluidizercasing',
		X: 'create:mechanical_arm',
		O: 'immersiveengineering:steel_scaffolding_standard',
		V: '#forge:plates/aluminum',
		K: 'minecraft:hopper'
	}).id("deceasedcraft:fluidizer_solid_injector")
	
	event.remove({ output: 'bigreactors:fluidizerfluidinjector' })
	event.shaped('bigreactors:fluidizerfluidinjector', [
		'IKI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:fluidizercasing',
		X: 'create:mechanical_arm',
		O: 'immersiveengineering:metal_barrel',
		V: '#forge:plates/aluminum',
		K: 'minecraft:hopper'
	}).id("deceasedcraft:fluidizer_fluid_injector")
	
	event.remove({ output: 'bigreactors:fluidizeroutputport' })
	event.shaped('bigreactors:fluidizeroutputport', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:fluidizercasing',
		X: 'minecraft:hopper',
		O: 'minecraft:dispenser',
		V: '#forge:plates/aluminum'
	}).id("deceasedcraft:fluidizer_output_port")

	event.remove({ output: 'bigreactors:fluidizerpowerport' })
	event.shaped('bigreactors:fluidizerpowerport', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:fluidizercasing',
		X: 'refinedstorage:basic_processor',
		O: '#forge:ingots/gold',
		V: '#forge:plates/aluminum'
	}).id("deceasedcraft:fluidizer_power_port")

})

// Energizers Recipes
ServerEvents.recipes(event => {

	event.remove({ output: 'bigreactors:energizercell' })
	event.shaped('bigreactors:energizercell', [
		'IXI',
		'XOX',
		'IXI'
	  ], {
		I: 'minecraft:netherite_scrap',
		X: 'immersiveengineering:capacitor_hv',
		O: 'minecraft:nether_star'
	}).id("deceasedcraft:energizer_cell")
	
	event.remove({ output: 'bigreactors:energizercasing' })
	event.shaped('bigreactors:energizercasing', [
		'IXI',
		'XXX',
		'IXI'
	  ], {
		I: '#forge:plates/aluminum',
		X: '#forge:wires/electrum'
	}).id("deceasedcraft:energizer_casing")
	
	event.remove({ output: 'bigreactors:energizercontroller' })
	event.shaped('bigreactors:energizercontroller', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:energizercasing',
		X: 'refinedstorage:advanced_processor',
		O: '#refinedstorage:controller',
		V: 'refinedstorage:cable'
	}).id("deceasedcraft:energizer_controller")
	
	event.remove({ output: 'bigreactors:energizerpowerport_fe' })
	event.shaped('bigreactors:energizerpowerport_fe', [
		'IVI',
		'VOV',
		'IVI'
	  ], {
		I: 'bigreactors:energizercasing',
		O: 'immersiveengineering:coil_mv',
		V: '#forge:wires/electrum'
	}).id("deceasedcraft:energizer_powerport_fe")
	
	event.remove({ output: 'bigreactors:energizerpowerport_fe_active' })
	event.shaped('bigreactors:energizerpowerport_fe_active', [
		'IVI',
		'VOV',
		'IVI'
	  ], {
		I: 'bigreactors:energizercasing',
		O: 'immersiveengineering:coil_mv',
		V: '#forge:wires/electrum'
	}).id("deceasedcraft:energizer_powerport_fe_active")


	event.remove({ output: 'bigreactors:energizerchargingport_fe' })
	event.shaped('bigreactors:energizerchargingport_fe', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: '#forge:plates/aluminum',
		X: 'immersiveengineering:wirecoil_electrum',
		O: 'immersiveengineering:charging_station',
		V: '#forge:plates/nickel'
	}).id("deceasedcraft:energizer_charging_port_fe")
	
})

// Reprocessor Recipes
ServerEvents.recipes(event => {
	
	event.remove({ output: 'bigreactors:reprocessorcasing' })
	event.shaped('bigreactors:reprocessorcasing', [
		'IXI',
		'XOX',
		'IXI'
	  ], {
		I: '#forge:plates/lead',
		X: '#forge:plates/steel',
		O: 'refinedstorage:machine_casing'
	}).id("deceasedcraft:reprocessor_casing")
	
	event.remove({ output: 'bigreactors:reprocessorcontroller' })
	event.shaped('bigreactors:reprocessorcontroller', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reprocessorcasing',
		X: 'refinedstorage:advanced_processor',
		O: '#refinedstorage:controller',
		V: 'refinedstorage:cable'
	}).id("deceasedcraft:reprocessor_controller")

	
	event.remove({ output: 'bigreactors:reprocessorcollector' })
	event.shaped('bigreactors:reprocessorcollector', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reprocessorcasing',
		X: '#forge:plates/lead',
		O: '#minecraft:hopper',
		V: 'refinedstorage:cable'
	}).id("deceasedcraft:reprocessor_collector")
	
	event.remove({ output: 'bigreactors:reprocessorwasteinjector' })
	event.shaped('bigreactors:reprocessorwasteinjector', [
		'IKI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reprocessorcasing',
		X: 'create:mechanical_arm',
		O: 'immersiveengineering:steel_scaffolding_standard',
		V: '#forge:plates/lead',
		K: 'minecraft:hopper'
	}).id("deceasedcraft:reprocessor_waste_injector")
	
	event.remove({ output: 'bigreactors:reprocessorfluidinjector' })
	event.shaped('bigreactors:reprocessorfluidinjector', [
		'IKI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reprocessorcasing',
		X: 'create:mechanical_arm',
		O: 'immersiveengineering:metal_barrel',
		V: '#forge:plates/lead',
		K: 'minecraft:hopper'
	}).id("deceasedcraft:reprocessor_fluid_injector")
	
	event.remove({ output: 'bigreactors:reprocessoroutputport' })
	event.shaped('bigreactors:reprocessoroutputport', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reprocessorcasing',
		X: 'minecraft:hopper',
		O: 'minecraft:dispenser',
		V: '#forge:plates/lead'
	}).id("deceasedcraft:reprocessor_output_port")
	
	event.remove({ output: 'bigreactors:reprocessorpowerport' })
	event.shaped('bigreactors:reprocessorpowerport', [
		'IXI',
		'VOV',
		'IXI'
	  ], {
		I: 'bigreactors:reprocessorcasing',
		X: 'refinedstorage:improved_processor',
		O: '#forge:ingots/gold',
		V: '#forge:plates/lead'
	}).id("deceasedcraft:reprocessor_power_port")
})