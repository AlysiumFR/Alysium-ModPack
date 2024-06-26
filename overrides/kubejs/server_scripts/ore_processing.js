//
//  Written by Mitchell52
//  this file extends ore processing where the postunify scripts cannot due to some mods not allowing tag outputs, and coz one file is cleaner..
//  
// Contents
//  Create Crushing, ImmersiveEngineering Arc Furnace, Thermal Pulveriser and Induction smelter for ATM trio, and ATO iridium
//  Thermal Induction smelter for platinum
//  Thermal Pulverizer and induction smelter for Sgear ores
//  Thermal Pulverizer for missing Raw ato chunks, moved from /mods/thermal/thermal.js
//  Fixes other Redstone and Quartz Create crushing
//  Thermal extra dusts, Apatite, soulsand, cinnabar, amethyst, niter, in Mek, Create, and IE Crushers


ServerEvents.recipes(event =>{
// ATM trio
    ['allthemodium', 'vibranium','unobtainium'].forEach(atm_ore =>{
        event.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:raw_materials/${atm_ore}`}],
            processingTime: 400,
            results: [
              {item: `allthemodium:${atm_ore}_dust`},
              {chance: 0.75, item: 'create:experience_nugget'}
            ]
        }).id(`kubejs:create/crushing/alysium_raw_${atm_ore}_dust`)
        event.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:storage_blocks/raw_${atm_ore}`}],
            processingTime: 400,
            results: [
              {count: 9,item: `allthemodium:${atm_ore}_dust`},
              {chance: 0.75, count: 9, item: 'create:experience_nugget'}
            ]
        }).id(`kubejs:create/crushing/alysium_raw_block_${atm_ore}_dust`)
        event.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:ores/${atm_ore}`}],
            processingTime: 400,
            results: [
              {item: `allthemodium:${atm_ore}_dust`},
              {chance: 0.75, item: `allthemodium:${atm_ore}_dust`},
              {chance: 0.75, item: 'create:experience_nugget'}
            ]
        }).id(`kubejs:create/crushing/alysium_ore_${atm_ore}_dust`)
        //Immersive
        event.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 25600,
            input: {tag: `forge:raw_materials/${atm_ore}`},
            results: [{base_ingredient: {item: `allthemodium:${atm_ore}_ingot`}}],
            secondaries: [{chance: 0.5, output: {item: `allthemodium:${atm_ore}_ingot`}}],
            time: 100
        }).id(`kubejs:ie/arcfurnace/alysium_raw_${atm_ore}_ingot`)
        event.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 102400,
            input: {tag: `forge:ores/${atm_ore}`},
            results: [{base_ingredient: {item: `allthemodium:${atm_ore}_ingot`},count: 2}],
            slag: {tag: 'forge:slag'},
            time: 200
        }).id(`kubejs:ie/arcfurnace/alysium_ore_${atm_ore}_ingot`)
        event.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 230400,
            input: {tag: `forge:storage_blocks/raw_${atm_ore}`},
            results: [{base_ingredient: {item: `allthemodium:${atm_ore}_ingot`},count: 13}],
            secondaries: [{chance: 0.5, output: {item: `allthemodium:${atm_ore}_ingot`}}],
            time: 900
        }).id(`kubejs:ie/arcfurnace/alysium_raw_block_${atm_ore}_ingot`)
        event.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 51200,
            input: {tag: `forge:dusts/${atm_ore}`},
            results: [{item: `allthemodium:${atm_ore}_ingot`}],
            time: 100
        }).id(`kubejs:ie/arcfurnace/alysium_dust_${atm_ore}_ingot`)
        //Thermal Pulverizer
        event.custom({
            type: 'thermal:pulverizer',
            ingredient: {item: `allthemodium:raw_${atm_ore}`},
            result: [
                {item: `allthemodium:${atm_ore}_dust`,chance: 1.25},
                {item: 'alltheores:netherite_dust',chance: 0.05}
            ],
            experience: 0.1
        }).id(`kubejs:thermal/pulverizing/alysium_${atm_ore}`)
        //Thermal Induction smelter
        event.custom({
            type: 'thermal:smelter',
            ingredient: {item: `allthemodium:raw_${atm_ore}`},
            result: [
                {item: `allthemodium:${atm_ore}_ingot`,chance: 1.5,locked: true},
                {item: 'thermal:netherite_nugget',chance: 1.0}
            ],
            experience: 0.1
        }).id(`kubejs:thermal/inductsmelter/alysium_raw_${atm_ore}`)
        event.custom({
            type: 'thermal:smelter',
            ingredient: {tag: `forge:ores/${atm_ore}`},
            result: [
                {item: `allthemodium:${atm_ore}_ingot`,chance: 1.0},
                {item: 'minecraft:netherite_ingot',chance: 0.2},
                {item: 'thermal:rich_slag',chance: 0.2}
            ],
            experience: 0.1
        }).id(`kubejs:thermal/inductsmelter/alysium_ore_${atm_ore}`)
    })

// Iridium
let atoore = ['iridium']
    atoore.forEach(ato_ore =>{
        event.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:raw_materials/${ato_ore}`}],
            processingTime: 400,
            results: [
              {item: `alltheores:${ato_ore}_dust`},
              {chance: 0.75, item: 'create:experience_nugget'}
            ]
        }).id(`kubejs:create/crushing/alysium_raw_${ato_ore}_dust`)
        event.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:storage_blocks/raw_${ato_ore}`}],
            processingTime: 400,
            results: [
              {count: 9,item: `alltheores:${ato_ore}_dust`},
              {chance: 0.75, count: 9, item: 'create:experience_nugget'}
            ]
        }).id(`kubejs:create/crushing/alysium_raw_block_${ato_ore}_dust`)
        event.custom({
            type: 'create:crushing',
            ingredients: [{tag: `forge:ores/${ato_ore}`}],
            processingTime: 400,
            results: [
              {item: `alltheores:${ato_ore}_dust`},
              {chance: 0.75, item: `alltheores:${ato_ore}_dust`},
              {chance: 0.75, item: 'create:experience_nugget'}
            ]
        }).id(`kubejs:create/crushing/alysium_ore_${ato_ore}_dust`)
        //Immersive
        event.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 25600,
            input: {tag: `forge:raw_materials/${ato_ore}`},
            results: [{base_ingredient: {item: `alltheores:${ato_ore}_ingot`}}],
            secondaries: [{chance: 0.5, output: {item: `alltheores:${ato_ore}_ingot`}}],
            time: 100
        }).id(`kubejs:ie/arcfurnace/alysium_raw_${ato_ore}_ingot`)
        event.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 102400,
            input: {tag: `forge:ores/${ato_ore}`},
            results: [{base_ingredient: {item: `alltheores:${ato_ore}_ingot`},count: 2}],
            slag: {tag: 'forge:slag'},
            time: 200
        }).id(`kubejs:ie/arcfurnace/alysium_ore_${ato_ore}_ingot`)
        event.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 230400,
            input: {tag: `forge:storage_blocks/raw_${ato_ore}`},
            results: [{base_ingredient: {item: `alltheores:${ato_ore}_ingot`},count: 13}],
            secondaries: [{chance: 0.5, output: {item: `alltheores:${ato_ore}_ingot`}}],
            time: 900
        }).id(`kubejs:ie/arcfurnace/alysium_raw_block_${ato_ore}_ingot`)
        event.custom({
            type: 'immersiveengineering:arc_furnace',
            additives: [],
            energy: 51200,
            input: {tag: `forge:dusts/${ato_ore}`},
            results: [{item: `alltheores:${ato_ore}_ingot`}],
            time: 100
        }).id(`kubejs:ie/arcfurnace/alysium_dust_${ato_ore}_ingot`)
        //Thermal Pulverizer
        event.custom({
            type: 'thermal:pulverizer',
            ingredient: {item: `alltheores:raw_${ato_ore}`},
            result: [
                {item: `alltheores:${ato_ore}_dust`,chance: 1.25},
                {item: 'alltheores:platinum_dust',chance: 0.05}
            ],
            experience: 0.1
        }).id(`kubejs:thermal/pulverizing/alysium_${ato_ore}`)
        //Thermal Induction smelter
        event.custom({
            type: 'thermal:smelter',
            ingredient: {item: `alltheores:raw_${ato_ore}`},
            result: [
                {item: `alltheores:${ato_ore}_ingot`,chance: 1.5,locked: true},
                {item: 'alltheores:platinum_nugget',chance: 1.0}
            ],
            experience: 0.1
        }).id(`kubejs:thermal/inductsmelter/alysium_raw_${ato_ore}`)
        event.custom({
            type: 'thermal:smelter',
            ingredient: {tag: `forge:ores/${ato_ore}`},
            result: [
                {item: `alltheores:${ato_ore}_ingot`,chance: 1.0},
                {item: 'alltheores:platinum_ingot',chance: 0.2},
                {item: 'thermal:rich_slag',chance: 0.2}
            ],
            experience: 0.1
        }).id(`kubejs:thermal/inductsmelter/alysium_ore_${ato_ore}`)
    })

// Platinum
event.custom({
    type: 'thermal:smelter',
    ingredient: {item: `alltheores:raw_platinum`},
    result: [
        {item: `alltheores:platinum_ingot`,chance: 1.5,locked: true},
        {item: 'alltheores:tin_nugget',chance: 1.0}
    ],
    experience: 0.1
}).id(`kubejs:thermal/inductsmelter/alysium_raw_platinum`)
event.custom({
    type: 'thermal:smelter',
    ingredient: {tag: `forge:ores/platinum`},
    result: [
        {item: `alltheores:platinum_ingot`,chance: 1.0},
        {item: 'alltheores:tin_ingot',chance: 0.2},
        {item: 'thermal:rich_slag',chance: 0.2}
    ],
    experience: 0.1
}).id(`kubejs:thermal/inductsmelter/alysium_ore_platinum`)

// Sgear Crimson iron, Azure silver
event.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: `silentgear:raw_azure_silver`},
    result: [
        {item: `silentgear:azure_silver_dust`,chance: 1.25},
        {item: 'alltheores:silver_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`kubejs:pulverizing_azure_silver`)
event.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: 'silentgear:raw_crimson_iron'},
    result: [
        {item: 'silentgear:crimson_iron_dust',chance: 1.25},
        {item: 'alltheores:iron_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`kubejs:pulverizing_crimson_iron`)

//// ATO ores, aluminum, platinum, uranium, zinc, osmium
//aluminum
event.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: `alltheores:raw_aluminum`},
    result: [
        {item: `alltheores:aluminum_dust`,chance: 1.25},
        {item: 'alltheores:tin_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`kubejs:pulverizing_ato_aluminum`)
//platinum
event.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: `alltheores:raw_platinum`},
    result: [
        {item: `alltheores:platinum_dust`,chance: 1.25},
        {item: 'alltheores:tin_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`kubejs:pulverizing_ato_platinum`)
//uranium
event.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: `alltheores:raw_uranium`},
    result: [
        {item: `alltheores:uranium_dust`,chance: 1.25},
        {item: 'alltheores:lead_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`kubejs:pulverizing_ato_uranium`)
//zinc
event.custom({
    type: 'thermal:pulverizer',
    ingredient: {
      item: `alltheores:raw_zinc`},
    result: [
        {item: `alltheores:zinc_dust`,chance: 1.25},
        {item: 'alltheores:copper_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`kubejs:pulverizing_ato_zinc`)
//osmium
event.custom({
    type: 'thermal:pulverizer',
    ingredient: {item: `alltheores:raw_osmium`},
    result: [
        {item: `alltheores:osmium_dust`,chance: 1.25},
        {item: 'alltheores:copper_dust',chance: 0.05}
    ],
    experience: 0.1
}).id(`kubejs:pulverizing_ato_osmium`)

// Other redstone and quartz
event.custom({
    type: 'create:crushing',
    ingredients: [{item: 'alltheores:other_redstone_ore'}],
    processingTime: 400,
    results: [
      {count: 8, item: 'minecraft:redstone'},
      {chance: 0.75, item: 'minecraft:redstone'},
      {chance: 0.75, item: 'create:experience_nugget'},
      {chance: 0.12, item: 'allthemodium:ancient_stone'}
    ]
}).id(`kubejs:create/crushing/alysium_ore_redstone_dust`)

event.custom({
    type: 'create:crushing',
    ingredients: [{item: 'alltheores:other_quartz_ore'}],
    processingTime: 400,
    results: [
      {count: 3, item: 'minecraft:quartz'},
      {chance: 0.75, item: 'minecraft:quartz'},
      {chance: 0.75, item: 'create:experience_nugget'},
      {chance: 0.12, item: 'allthemodium:ancient_stone'}
    ]
}).id(`kubejs:create/crushing/alysium_ore_quartz_dust`)
    
//Thermal extra dusts, apatite, soulsand, cinnabar, amethyst, niter
let thermdust =['apatite','cinnabar', 'niter']
thermdust.forEach(thermal =>{
    event.custom({
        type: 'create:crushing',
        ingredients: [{item: `thermal:${thermal}`}],
        processingTime: 400,
        results: [
          {count: 1, item: `thermal:${thermal}_dust`},
          {chance: 0.5, item: `thermal:${thermal}_dust`}
        ]
    }).id(`kubejs:create/crushing/alysium_thermal_${thermal}_dust`)
    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 1600,
        input: {item: `thermal:${thermal}`},
        result: {item: `thermal:${thermal}_dust`},
        secondaries: [{chance: 0.1, output: {item: `thermal:${thermal}_dust`}}]
    }).id(`kubejs:immersive/crushing/alysium_thermal_${thermal}_dust`)
    event.custom({
        type: 'mekanism:crushing',
        input: {ingredient:{item: `thermal:${thermal}`}},
        output:{item: `thermal:${thermal}_dust`}
    }).id(`kubejs:mekanism/crushing/alysium_thermal_${thermal}_dust`)
    })
    // Thermal Extra Soulsand dust
    event.custom({
        type: 'create:crushing',
        ingredients: [{item: 'minecraft:soul_sand'}],
        processingTime: 400,
        results: [
          {count: 1, item: `thermal_extra:soul_sand_dust`},
          {chance: 0.5, item: `thermal_extra:soul_sand_dust`}
        ]
    }).id(`kubejs:create/crushing/alysium_te_soul_sand_dust`)
    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 1600,
        input: {item: 'minecraft:soul_sand'},
        result: {item: `thermal_extra:soul_sand_dust`},
        secondaries: [{chance: 0.1, output: {item: `thermal_extra:soul_sand_dust`}}]
    }).id(`kubejs:immersive/crushing/alysium_te_soul_sand_dust`)
    event.custom({
        type: 'mekanism:crushing',
        input: {ingredient:{item: 'minecraft:soul_sand'}},
        output:{item: `thermal_extra:soul_sand_dust`}
    }).id(`kubejs:mekanism/crushing/alysium_te_soul_sand_dust`)
    //hexcasting Amethyst
    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 1600,
        input: {item: 'minecraft:amethyst_shard'},
        result: {count: 4, item: 'hexcasting:amethyst_dust'},
        secondaries: [{chance: 0.1, output: {tag: 'forge:dusts/amethyst'}}]
    }).id(`kubejs:immersive/crushing/alysium_hex_amethyst_dust`)
    event.custom({
        type: 'mekanism:crushing',
        input: {ingredient:{item: 'minecraft:amethyst_shard'}},
        output:{item: 'hexcasting:amethyst_dust', count: 4}
    }).id(`kubejs:mekanism/crushing/alysium_hex_amethyst_dust`)

})
