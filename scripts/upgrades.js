let autoclicker
let rarity = Object.keys(rarities)

const BUY = {
    q(x, rarity_arg, cost_arg) {
        if (player.rarities[rarity[rarity_arg[x][0]]].current >= cost_arg[x][0]) {
            player.rarities[rarity[rarity_arg[x][0]]].current -= cost_arg[x][0]
            return 1
        }
    },
    w(x, rarity_arg, cost_arg) {
        if (player.rarities[rarity[rarity_arg[x][0]]].current >= cost_arg[x][0] && player.rarities[rarity[rarity_arg[x][1]]].current >= cost_arg[x][1]) {
            player.rarities[rarity[rarity_arg[x][0]]].current -= cost_arg[x][0]
            player.rarities[rarity[rarity_arg[x][1]]].current -= cost_arg[x][1]
            return 1
        }
    },
    e(x, rarity_arg, cost_arg) {
        if (player.rarities[rarity[rarity_arg[x][0]]].current >= cost_arg[x][0] && player.rarities[rarity[rarity_arg[x][1]]].current >= cost_arg[x][1] && player.rarities[rarity[rarity_arg[x][2]]].current >= cost_arg[x][2]) {
            player.rarities[rarity[rarity_arg[x][0]]].current -= cost_arg[x][0]
            player.rarities[rarity[rarity_arg[x][1]]].current -= cost_arg[x][1]
            player.rarities[rarity[rarity_arg[x][2]]].current -= cost_arg[x][2]
            return 1
        }
    },
}

const UPGS = {
    buyable1: {
        id: 1,
        cost: [
            [20],
            [25],
            [20, 12],
            [15, 5],
            [177, 5],
            [2500, 122, 37],
            [15000, 1600, 12],
            [225, 14],
            [9999]
        ],
        rarity: [
            [0, 0, 0],
            [2, 0, 0],
            [3, 4, 0],
            [5, 7, 0],
            [2, 9, 0],
            [1, 6, 8],
            [0, 4, 13],
            [9, 15, 0],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==1) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==2) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==3) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==4) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==5 && player.upgrades.buyables[6] != 0) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==6) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==7) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
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
            [5, 1],
            [3999, 289, 16],
            [2],
            [9999],
        ],
        rarity: [
            [1, 0, 0],
            [3, 5, 7],
            [10, 0, 0],
            [0, 11, 0],
            [1, 12, 0],
            [12, 15, 0],
            [2, 8, 13],
            [18, 0, 0],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==1) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==2) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==3) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==4) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==5 && player.upgrades.buyables[6] != 0) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==6) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==7) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
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
            [1000, 64],
            [3, 1],
            [66666],
            [9999],
        ],
        rarity: [
            [2, 0, 0],
            [4, 6, 0],
            [0, 5, 0],
            [1, 9, 0],
            [3, 9, 10],
            [5, 9, 0],
            [14, 16, 0],
            [0, 0, 0],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==1) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==2) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==3) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==4) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==5 && player.upgrades.buyables[6] != 0) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==6) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==7) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (bought) player.upgrades.buyables[this.id]++
        },
        effect(x=player.upgrades.buyables[this.id]) {
            return Math.pow(1.17647, x)
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
            [40],
            [15, 3, 1],
            [2],
            [9999],
        ],
        rarity: [
            [3, 0, 0],
            [0, 1, 4],
            [2, 7, 0],
            [6, 8, 0],
            [5, 11, 0],
            [10, 0, 0],
            [11, 13, 15],
            [16, 0, 0],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==1) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==2) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==3) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==4) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==5 && player.upgrades.buyables[6] != 0) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==6) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==7) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (bought) {
                player.upgrades.buyables[this.id]++
                clearInterval(autoclicker)
                autoclicker = ''
                autoclicker = setInterval(() => {
                    if (player.upgrades.buyables[4] != 0) auto_roll()
                }, 3000/this.effect());
            }
        },
        effect(x=player.upgrades.buyables[this.id]) {
            return x != 0 ? x == 1 ? 1 : Math.pow(1.25, x-1) : false
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
            [3,2,1],
            [1000,60,1],
            [2,1],
            [9999],
        ],
        rarity: [
            [7, 0, 0],
            [0, 5, 8],
            [9, 11, 0],
            [12, 13, 0],
            [14, 0, 0],
            [15, 16, 17],
            [7, 11, 18],
            [18, 19, 0],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==1) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==2) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==3) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==4) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==5 && player.upgrades.buyables[6] != 0) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==6) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==7) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
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
            [2],
            [15000, 1000, 10],
            [80, 10],
            [77777, 1],
            [1000000, 3],
            [9999],
        ],
        rarity: [
            [13, 0, 0],
            [0, 5, 11],
            [10, 12, 0],
            [1, 20, 0],
            [0, 21, 0],
            [19, 0, 0],
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==1) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==2) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==3) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==4) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (bought) player.upgrades.buyables[this.id]++
        },
    },
    buyable7: {
        id: 7,
        cost: [
            [18],
            [300, 3],
            [20, 6],
            [2, 1],
            [15],
            [3],
            [600,2],
            [230,10,1],
            [9999],
        ],
        rarity: [
            [10, 0, 0],
            [7, 12, 0],
            [11, 13, 0],
            [14, 15, 0],
            [12, 0, 0],
            [15, 0, 0],
            [8, 16, 0],
            [11, 15, 17],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==1) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==2) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==3) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==4) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==5) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==6) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==7) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (bought) player.upgrades.buyables[this.id]++
        },
        effect(x=player.upgrades.buyables[this.id]) {
            return 2*x
        },
    },
    buyable8: {
        id: 8,
        cost: [
            [8],
            [80, 20],
            [10],
            [4, 3],
            [500, 100],
            [333, 1],
            [5500, 1000],
            [125000, 1],
            [9999],
        ],
        rarity: [
            [11, 0, 0],
            [8, 10, 0],
            [12, 0, 0],
            [13, 14, 0],
            [9, 11, 0],
            [10, 16, 0],
            [4, 8, 0],
            [0, 18, 0],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==1) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==2) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==3) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==4) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==5) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==6) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==7) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (bought) player.upgrades.buyables[this.id]++
        },
        effect(x=player.upgrades.buyables[this.id]) {
            return 6*x
        },
    },
    buyable9: {
        id: 9,
        cost: [
            [1],
            [3, 1],
            [30000, 10],
            [50, 10, 2],
            [3, 1],
            [250000, 5000],
            [5],
            [3, 2, 1],
            [9999],
        ],
        rarity: [
            [14, 0, 0],
            [13, 15, 0],
            [1, 13, 0],
            [12, 14, 16],
            [17, 18, 0],
            [2, 10, 0],
            [19, 0, 0],
            [20, 21, 22],
            [19, 0, 0]
        ],
        buy(x=player.upgrades.buyables[this.id]) {
            let bought = false
            if (x==0) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==1) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==2) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==3) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==4) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==5) {
                if (BUY.w(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==6) {
                if (BUY.q(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (x==7) {
                if (BUY.e(x, this.rarity, this.cost)) {
                    bought = true
                }
            }
            if (bought) player.upgrades.buyables[this.id]++
        },
    },
}