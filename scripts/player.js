let player = {
    rolls: 0,
    rarities: {
        nothing: {
            current: 0,
            total: 0,
            },
        absolute_worst: {
            current: 0,
            total: 0,
            },
        worst: {
            current: 0,
            total: 0,
            },
        disgusting: {
            current: 0,
            total: 0,
        },
        abominable: {
            current: 0,
            total: 0,
        },
        repulsive: {
            current: 0,
            total: 0,
        },
        dreadful: {
            current: 0,
            total: 0,
        },
        appaling: {
            current: 0,
            total: 0,
        },
        horrible: {
            current: 0,
            total: 0,
        },
        awful: {
            current: 0,
            total: 0,
        },
        terrible: {
            current: 0,
            total: 0,
        },
        poor: {
            current: 0,
            total: 0,
        },
        unremarkable: {
            current: 0,
            total: 0,
        },
        bad: {
            current: 0,
            total: 0,
        },
        so_so: {
            current: 0,
            total: 0,
        },
        common: {
            current: 0,
            total: 0,
        },
        regular: {
            current: 0,
            total: 0,
        },
        standard: {
            current: 0,
            total: 0,
        },
        decent: {
            current: 0,
            total: 0,
        },
        average: {
            current: 0,
            total: 0
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
        }
    },
    time: {
        current: new Date().getTime(),
        saved: 0,
        auto_save: 0,
        start: new Date().getTime(),
    },
    language: "en"
}

let text = {
    helpTitle: {
        1:'Beginning',
        2:'Roll system',
        3:'Rarities',
        4:'Upgrades',
        5:'FAQ',
    },
    help: {
        start:'',
        1:'',
        2:'',
        3:'',
        4:'',
        5:'',
    },
}

const ELS = {
    helpDesc: document.getElementById("helpDescription"),
}