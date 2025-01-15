let player = {
    rolls: 0,
    rarities: {
        nothing: {
            current: 0,
            total: 0,
            first_roll: 0,
            },
        absolute_worst: {
            current: 0,
            total: 0,
            first_roll: 0,
            },
        worst: {
            current: 0,
            total: 0,
            first_roll: 0,
            },
        disgusting: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        abominable: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        repulsive: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        dreadful: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        appaling: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        horrible: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        awful: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        terrible: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        poor: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        unremarkable: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        bad: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        so_so: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        common: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        regular: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        standard: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        decent: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        average: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        usual: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        moderate: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        adequate: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        fair: {
            current: 0,
            total: 0, 
            first_roll: 0,
        },
        fine: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        solid: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        worthy: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        admirable: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        unusual: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        uncommon: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        good: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        valuable: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
    },
    upgrades:{
        buyables:{
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
        }
    },
    time: {
        current: new Date().getTime(),
        saved: 0,
        auto_save: 0,
        start: new Date().getTime(),
    },
    best_: {
        rarity: {
            text: 'nothing',
            id: 0,
        },
    },
    language: "en",
    settings: {
        autosave_enabled: 'enabled'
    }
}

let text = {
    helpTitle: {
        1:'Beginning',
        2:'Roll system',
        3:'Rarities',
        4:'Upgrades',
        7:'FAQ',
        5:'Crafter',
        6:'Decrafter'
    },
    help: {
        start:'',
        1:'',
        2:'',
        3:'',
        4:'',
        5:'',
        6:'',
        7:'',
    },
}

const ELS = {
    helpDesc: document.getElementById("helpDescription"),
    rarity_text: document.getElementsByClassName('rarity_text')
}