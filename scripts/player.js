let player = {
    rolls: 0,
    mastery_rolls: 0,
    total_rolls: 0,
    total_mastery_rolls: 0,
    prestige: {
        resets: 0,
        dice: 0,
        rolls: 0,
        upgrades: {
            singles: []
        },
        rarities: {
            unknown: {
                current: 0,
                total: 0,
                first_roll: 0,
            },
            forgotten: {
                current: 0,
                total: 0,
                first_roll: 0,
            },
            obscure: {
                current: 0,
                total: 0,
                first_roll: 0,
            },
            unnoted: {
                current: 0,
                total: 0,
                first_roll: 0,
            },
            noticed: {
                current: 0,
                total: 0,
                first_roll: 0,
            }
        }
    },
    cooldowns: {
        rolls: 0,
        mastery_rolls: 0
    },
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
        impressive: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        significant: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        important: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        highquality: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        remarkable: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        great: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        exceptional: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        excellent: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        refined: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        exquisite: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        elegant: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        rare: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        extraordinary: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        outstanding: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        satisfactory: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        respectable: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        well_made: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        shining: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
    },
    mastery_rarities: {
        none: {
            current: 0,
            total: 0,
            first_roll: 0,
        },
        newbie: {
            current: 0,
            total: 0,
            first_roll: 0,
        }
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
            10: 0,
            11: 0,
            12: 0
        }
    },
    mastery_upgrades: {
        buyables: {
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
        saved: new Date().getTime(),
        start: new Date().getTime(),
        current_prestige: new Date().getTime()
    },
    best_: {
        rarity: {
            text: 'nothing',
            id: 0,
        },
    },
    language: "en",
    settings: {
        autosave_enabled: 'enabled',
        slider_value: 4,
    }
}

let text = {
    helpTitle: {
        1:'Beginning',
        2:'Roll system',
        3:'Rarities',
        4:'Upgrades',
        8:'FAQ',
        5:'Crafter',
        6:'Decrafter',
        7:'Mastery',
        9:'Prestige'
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
        8:'',
        9:''
    },
    changelogTitle: {
        1:'Alpha',
        2:'Beta 1.X',
        3:'Beta 2.0',
        4:'1.0'
    },
    changelog: {
        start:'',
        1:'',
        2:'',
        3:'',
        4:''
    },
}

const ELS = {
    helpDesc: document.getElementById("helpDescription"),
    changelogDesc: document.getElementById("changelogDescription"),
    rarity_text: document.getElementsByClassName('rarity_text')
}

const OFFLINE = {
    interval: 0,
    ticks: 0,
    completed_ticks: 0,
    completed_rolls: 0,
}

let local = {
    settings: {
        cloud_sync: 'no'
    },
    key: ''
}

let temp = {
    time: {
        auto_save: 0
    }
}