let autoclicker
let rarity = Object.keys(rarities)

const UPGS = {
    buyable1: {
        id: 1,
        cost: [
            [20],
            [25],
            [20, 12],
            [15, 5],
            [177, 5],
            [9999]
        ],
        rarity: [
            [0, 0, 0],
            [2, 0, 0],
            [3, 4, 0],
            [5, 7, 0],
            [2, 9, 0],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], bought = true) : 0
            }
            if (x==1) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], bought = true) : 0
            }
            if (x==2) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (x==3) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (x==4) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (bought) player.upgrades.buyables[this.id]++
        },
        effect(x=player.upgrades.buyables[this.id]) {
            return 1+0.05*x
        },
    },
    buyable2: {
        id: 2,
        cost: [
            [25],
            [40, 6, 2],
            [1],
            [1000, 2],
            [600, 3],
            [9999],
        ],
        rarity: [
            [1, 0, 0],
            [3, 5, 7],
            [10, 0, 0],
            [0, 11, 0],
            [1, 12, 0],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], bought = true) : 0
            }
            if (x==1) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] && player.rarities[rarity[this.rarity[x][2]]].current >= this.cost[x][2]? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], player.rarities[rarity[this.rarity[x][2]]].current -= this.cost[x][2], bought = true) : 0
            }
            if (x==2) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], bought = true) : 0
            }
            if (x==3) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (x==4) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], bought = true) : 0
            }
            if (bought) player.upgrades.buyables[this.id]++
        },
        effect(x=player.upgrades.buyables[this.id]) {
            return 4*x
        },
    },
    buyable3: {
        id: 3,
        cost: [
            [12],
            [5, 1],
            [140, 7],
            [155, 1],
            [199, 5, 2],
            [9999],
        ],
        rarity: [
            [2, 0, 0],
            [4, 6, 0],
            [0, 5, 0],
            [1, 9, 0],
            [3, 9, 10],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], bought = true) : 0
            }
            if (x==1) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (x==2) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (x==3) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (x==4) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (bought) player.upgrades.buyables[this.id]++
        },
        effect(x=player.upgrades.buyables[this.id]) {
            return Math.pow(1.5, x)
        },
    },
    buyable4: {
        id: 4,
        cost: [
            [2],
            [64, 40, 3],
            [85, 4],
            [14, 4],
            [77, 3],
            [9999],
        ],
        rarity: [
            [3, 0, 0],
            [0, 1, 4],
            [2, 7, 0],
            [6, 8, 0],
            [5, 11, 0],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], bought = true) : 0
            }
            if (x==1) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] && player.rarities[rarity[this.rarity[x][2]]].current >= this.cost[x][2]? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], player.rarities[rarity[this.rarity[x][2]]].current -= this.cost[x][2], bought = true) : 0
            }
            if (x==2) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (x==3) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (x==4) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (bought) {
                player.upgrades.buyables[this.id]++
                clearInterval(autoclicker)
                autoclicker = ''
                autoclicker = setInterval(() => {
                    if (player.upgrades.buyables[4] != 0) auto_roll()
                }, 2000/this.effect());
            }
        },
        effect(x=player.upgrades.buyables[this.id]) {
            return x != 0 ? x == 1 ? 1 : Math.pow(1.33333, x-1) : false
        },
    },
    buyable5: {
        id: 5,
        cost: [
            [1],
            [128, 11, 2],
            [5, 2],
            [3, 1],
            [5],
            [9999],
        ],
        rarity: [
            [7, 0, 0],
            [0, 5, 8],
            [9, 11, 0],
            [12, 13, 0],
            [15, 0, 0],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], bought = true) : 0            
            }
            if (x==1) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] && player.rarities[rarity[this.rarity[x][2]]].current >= this.cost[x][2]? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], player.rarities[rarity[this.rarity[x][2]]].current -= this.cost[x][2], bought = true) : 0
            }
            if (x==2) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (x==3) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] && player.rarities[rarity[this.rarity[x][1]]].current >= this.cost[x][1] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], player.rarities[rarity[this.rarity[x][1]]].current -= this.cost[x][1], bought = true) : 0
            }
            if (x==4) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], bought = true) : 0            
            }
            if (bought) player.upgrades.buyables[this.id]++
        },
        effect(x=player.upgrades.buyables[this.id]) {
            return x == 0 ? 1 : Math.pow(4, x) * 2
        },
    },
    buyable6: {
        id: 6,
        cost: [
            [1],
            [9999],
        ],
        rarity: [
            [16, 0, 0],
            [19, 0, 0],
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                player.rarities[rarity[this.rarity[x][0]]].current >= this.cost[x][0] ? 
                (player.rarities[rarity[this.rarity[x][0]]].current -= this.cost[x][0], bought = true) : 0
            }
            // if (x==1) {
            //     player.rarities[this.rarity[0]].current >= this.cost[1][0] && player.rarities[this.rarity[8]].current >= this.cost[1][1] && player.rarities[this.rarity[9]].current >= this.cost[1][2]? 
            //     (player.rarities[this.rarity[0]].current -= this.cost[1][0], player.rarities[this.rarity[8]].current -= this.cost[1][1], player.rarities[this.rarity[9]].current -= this.cost[1][2], bought = true) : 0
            // }
            // if (x==2) {
            //     player.rarities[this.rarity[11]].current >= this.cost[2][0] && player.rarities[this.rarity[12]].current >= this.cost[2][1] ? 
            //     (player.rarities[this.rarity[11]].current -= this.cost[2][0], player.rarities[this.rarity[12]].current -= this.cost[2][1], bought = true) : 0
            // }
            // if (x==3) {
            //     player.rarities[this.rarity[14]].current >= this.cost[3][0] && player.rarities[this.rarity[15]].current >= this.cost[3][1] ? 
            //     (player.rarities[this.rarity[14]].current -= this.cost[3][0], player.rarities[this.rarity[15]].current -= this.cost[3][1], bought = true) : 0
            // }
            // if (x==4) {
            //     player.rarities[this.rarity[15]].current >= this.cost[4][0] && player.rarities[this.rarity[15]].current >= this.cost[4][1] ? 
            //     (player.rarities[this.rarity[15]].current -= this.cost[4][0], player.rarities[this.rarity[15]].current -= this.cost[4][1], bought = true) : 0
            // }
            if (bought) player.upgrades.buyables[this.id]++
        },
    }
}