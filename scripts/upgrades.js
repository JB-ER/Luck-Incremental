let autoclicker
let rarity = Object.keys(rarities)
let mastery_rarity = Object.keys(mastery_rarities)
let prestige_rarity = Object.keys(PRESTIGE.rarities)

const BUY = {
    q(x, rarity_arg, cost_arg) {
        if (
            player.rarities[rarity[rarity_arg[x][0]]].current >= cost_arg[x][0]
        ) 
        {
            player.rarities[rarity[rarity_arg[x][0]]].current -= cost_arg[x][0]
            return 1
        }
    },
    w(x, rarity_arg, cost_arg) {
        if (
            player.rarities[rarity[rarity_arg[x][0]]].current >= cost_arg[x][0] && 
            player.rarities[rarity[rarity_arg[x][1]]].current >= cost_arg[x][1]
        ) 
        {
            player.rarities[rarity[rarity_arg[x][0]]].current -= cost_arg[x][0]
            player.rarities[rarity[rarity_arg[x][1]]].current -= cost_arg[x][1]
            return 1
        }
    },
    e(x, rarity_arg, cost_arg) {
        if (
            player.rarities[rarity[rarity_arg[x][0]]].current >= cost_arg[x][0] && 
            player.rarities[rarity[rarity_arg[x][1]]].current >= cost_arg[x][1] && 
            player.rarities[rarity[rarity_arg[x][2]]].current >= cost_arg[x][2]
        ) 
        {
            player.rarities[rarity[rarity_arg[x][0]]].current -= cost_arg[x][0]
            player.rarities[rarity[rarity_arg[x][1]]].current -= cost_arg[x][1]
            player.rarities[rarity[rarity_arg[x][2]]].current -= cost_arg[x][2]
            return 1
        }
    },
    mq(x, mastery_rarity_arg, rarity_arg, cost_arg) {
        if (
            player.mastery_rarities[mastery_rarity[mastery_rarity_arg[x][0]]].current >= cost_arg[x][0]
        ) 
        {
            player.mastery_rarities[mastery_rarity[mastery_rarity_arg[x][0]]].current -= cost_arg[x][0]
            return 1
        }
    },
    mw(x, mastery_rarity_arg, rarity_arg, cost_arg) {
        if (
            player.mastery_rarities[mastery_rarity[mastery_rarity_arg[x][0]]].current >= cost_arg[x][0] &&
            player.rarities[rarity[rarity_arg[x][1]]].current >= cost_arg[x][1]
        ) 
        {
            player.mastery_rarities[mastery_rarity[mastery_rarity_arg[x][0]]].current -= cost_arg[x][0]
            player.rarities[rarity[rarity_arg[x][1]]].current -= cost_arg[x][1]
            return 1
        }
    },
    me(x, mastery_rarity_arg, rarity_arg, cost_arg) {
        if (
            player.mastery_rarities[mastery_rarity[mastery_rarity_arg[x][0]]].current >= cost_arg[x][0] &&
            player.rarities[rarity[rarity_arg[x][1]]].current >= cost_arg[x][1] &&
            player.rarities[rarity[rarity_arg[x][2]]].current >= cost_arg[x][2]
        ) 
        {
            player.mastery_rarities[mastery_rarity[mastery_rarity_arg[x][0]]].current -= cost_arg[x][0]
            player.rarities[rarity[rarity_arg[x][1]]].current -= cost_arg[x][1]
            player.rarities[rarity[rarity_arg[x][2]]].current -= cost_arg[x][2]
            return 1
        }
    },
    pq(rarity_arg, cost_arg) {
        if (
            player.prestige.rarities[prestige_rarity[rarity_arg]].current >= cost_arg
        ) 
        {
            player.prestige.rarities[prestige_rarity[rarity_arg]].current -= cost_arg
            return 1
        }
    },
    pq_req(rarity_arg, cost_arg) {
        if (
            player.prestige.rarities[prestige_rarity[rarity_arg]].current >= cost_arg
        ) 
        {
            return 1
        }
    },
}

const UPGS = {
    common: {
        buyables: {
            buyable1: {
                id: 1,
                cost: [
                    [20],
                    [25],
                    [20, 10],
                    [13, 4],
                    [150, 5],
                    [2000, 100, 30],
                    [13500, 1450, 10],
                    [200, 13],
                    [70000, 2000, 3],
                    [350000, 2000, 600],
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
                    [2, 9, 18],
                    [0, 10, 12],
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
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.upgrades.buyables[this.id]++
                },
                effect(x=player.upgrades.buyables[this.id]) {
                    return 1+(0.05+UPGS.mastery.buyables.buyable1.effect()/100)*x
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return (5+UPGS.mastery.buyables.buyable1.effect())*x
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return (5+UPGS.mastery.buyables.buyable1.effect())*x
                }
            },
            buyable2: {
                id: 2,
                cost: [
                    [25],
                    [30, 4, 1],
                    [1],
                    [800, 2],
                    [500, 3],
                    [4, 1],
                    [3000, 250, 14],
                    [2],
                    [225, 65, 25],
                    [6750, 2],
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
                    [13, 14, 15],
                    [8, 18, 0],
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
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.w(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.upgrades.buyables[this.id]++
                },
                effect(x=player.upgrades.buyables[this.id]) {
                    return (4+UPGS.mastery.buyables.buyable2.effect())*x
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return (4+UPGS.mastery.buyables.buyable2.effect())*x
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return (4+UPGS.mastery.buyables.buyable2.effect())*x
                }
            },
            buyable3: {
                id: 3,
                cost: [
                    [12],
                    [5, 1],
                    [130, 6],
                    [140, 1],
                    [170, 4, 2],
                    [1000, 50],
                    [2, 1],
                    [55555],
                    [600, 9, 2],
                    [12, 1],
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
                    [10, 16, 19],
                    [17, 20, 0],
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
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.w(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.upgrades.buyables[this.id]++
                },
                effect(x=player.upgrades.buyables[this.id]) {
                    return Math.pow(1.17647, x)
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return 1.5/Math.pow(1.17647, x)-UPGS.mastery.buyables.buyable3.effect()
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return 1.5/Math.pow(1.17647, x)-UPGS.mastery.buyables.buyable3.effect()
                }
            },
            buyable4: {
                id: 4,
                cost: [
                    [2],
                    [60, 34, 3],
                    [70, 4],
                    [12, 4],
                    [60, 3],
                    [36],
                    [12, 3, 1],
                    [2],
                    [20000, 350, 3],
                    [50000, 250, 8],
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
                    [6, 11, 17],
                    [5, 12, 16],
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
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.e(x, this.rarity, this.cost)) {
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
                    return x != 0 ? x == 1 ? 1 : Math.pow(1.25, x-1) - UPGS.mastery.buyables.buyable4.effect()/100 : false
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return 3/Math.pow(1.25, x-1) - UPGS.mastery.buyables.buyable4.effect()
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return 3/Math.pow(1.25, x-1) - UPGS.mastery.buyables.buyable4.effect()
                }
            },
            buyable5: {
                id: 5,
                cost: [
                    [1],
                    [114, 10, 2],
                    [4, 2],
                    [3, 1],
                    [5],
                    [3,2,1],
                    [800,50,1],
                    [2,1],
                    [3500],
                    [60000, 700, 1],
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
                    [9, 0, 0],
                    [4, 11, 20],
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
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.q(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.upgrades.buyables[this.id]++
                },
                effect(x=player.upgrades.buyables[this.id]) {
                    return x == 0 ? 1 : Math.pow(4+UPGS.mastery.buyables.buyable5.effect(), x) * 2
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return 1024*Math.pow(4+UPGS.mastery.buyables.buyable5.effect(), x) * 2
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return 1024*Math.pow(4+UPGS.mastery.buyables.buyable5.effect(), x) * 2
                }
            },
            buyable6: {
                id: 6,
                cost: [
                    [2],
                    [12500, 800, 8],
                    [75, 10],
                    [70000, 1],
                    [500000, 3],
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
                effect(){
                    return 1
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return 1
                },
                text_effect2(x=player.upgrades.buyables[this.id]) {
                    return 1
                }
            },
            buyable7: {
                id: 7,
                cost: [
                    [18],
                    [250, 3],
                    [18, 6],
                    [2, 1],
                    [13],
                    [3],
                    [550,2],
                    [200,10,1],
                    [60000, 7000],
                    [2, 1],
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
                    [2, 6, 0],
                    [19, 20, 0],
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
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.w(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.w(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.upgrades.buyables[this.id]++
                },
                effect(x=player.upgrades.buyables[this.id]) {
                    return (2+UPGS.mastery.buyables.buyable7.effect())*x
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return (2+UPGS.mastery.buyables.buyable7.effect())*x
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return (2+UPGS.mastery.buyables.buyable7.effect())*x
                }
            },
            buyable8: {
                id: 8,
                cost: [
                    [8],
                    [75, 15],
                    [8],
                    [4, 3],
                    [400, 100],
                    [300, 1],
                    [5000, 750],
                    [100000, 1],
                    [45000, 200, 4],
                    [75],
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
                    [3, 13, 16],
                    [15, 0, 0],
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
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.q(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.upgrades.buyables[this.id]++
                },
                effect(x=player.upgrades.buyables[this.id]) {
                    return (6+UPGS.mastery.buyables.buyable8.effect())*x
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return (6+UPGS.mastery.buyables.buyable8.effect())*x
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return (6+UPGS.mastery.buyables.buyable8.effect())*x
                }
            },
            buyable9: {
                id: 9,
                cost: [
                    [1],
                    [3, 1],
                    [25000, 10],
                    [45, 5, 2],
                    [3, 1],
                    [200000, 4000],
                    [5],
                    [3, 2, 1],
                    [100000, 3000, 3],
                    [1000, 40, 2],
                    [9999],
                ],
                rarity: [
                    [14, 0, 0],
                    [13, 15, 0],
                    [1, 13, 0],
                    [12, 14, 16],
                    [17, 18, 0],
                    [2, 10, 0],
                    [18, 0, 0],
                    [19, 20, 21],
                    [0, 7, 18],
                    [10, 15, 20],
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
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.upgrades.buyables[this.id]++
                },
                effect(){
                    let multi_rolls = 1 
                    switch (true) {
                        case player.upgrades.buyables[9] >= 10:
                            multi_rolls = 25
                            break;
                        case player.upgrades.buyables[9] >= 9:
                            multi_rolls = 20
                            break;
                        case player.upgrades.buyables[9] >= 8:
                            multi_rolls = 15
                            break;
                        case player.upgrades.buyables[9] >= 7:
                            multi_rolls = 10
                            break;
                        case player.upgrades.buyables[9] >= 6:
                            multi_rolls = 8
                            break;
                        case player.upgrades.buyables[9] >= 5:
                            multi_rolls = 6
                            break;
                        case player.upgrades.buyables[9] >= 4:
                            multi_rolls = 5
                            break;
                        case player.upgrades.buyables[9] >= 3:
                            multi_rolls = 4
                            break;
                        case player.upgrades.buyables[9] >= 2:
                            multi_rolls = 3
                            break;
                        case player.upgrades.buyables[9] >= 1:
                            multi_rolls = 2
                            break;
                        default:
                            multi_rolls = 1
                    }
                    player.prestige.upgrades.singles.includes(11) ? multi_rolls *= 2: multi_rolls
                    multi_rolls += UPGS.mastery.buyables.buyable9.effect()
                    return multi_rolls
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return 1
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return 1
                }
            },
            buyable10: {
                id: 10,
                cost: [
                    [2500],
                    [150],
                    [50000],
                    [75, 4],
                    [600, 65],
                    [14],
                    [40000, 60],
                    [12500, 4500, 2250],
                    [777, 13, 3],
                    [650000, 4],
                    [9999],
                ],
                rarity: [
                    [6, 0, 0],
                    [11, 0, 0],
                    [3, 0, 0],
                    [13, 17, 0],
                    [10, 14, 0],
                    [16, 0, 0],
                    [5, 15, 0],
                    [7, 8, 9],
                    [12, 17, 19],
                    [1, 20, 0],
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
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.w(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.upgrades.buyables[this.id]++
                },
                effect(x=player.upgrades.buyables[this.id]) {
                    return Math.pow(1.17647, x)
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return 1
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return 1
                }
            },
            buyable11: {
                id: 11,
                cost: [
                    [7000],
                    [75000, 15],
                    [8, 4],
                    [280, 75],
                    [500],
                    [10000, 7],
                    [1],
                    [50000, 70],
                    [300000, 7],
                    [700, 8, 2],
                    [9999],
                ],
                rarity: [
                    [4, 0, 0],
                    [0, 15, 0],
                    [16, 17, 0],
                    [12, 14, 0],
                    [11, 0, 0],
                    [7, 17, 0],
                    [21, 0, 0],
                    [6, 13, 9],
                    [2, 18, 0],
                    [12, 18, 20],
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
                        if (BUY.w(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.w(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.upgrades.buyables[this.id]++
                },
                effect(x=player.upgrades.buyables[this.id]) {
                    return 1-((0.005*x)/UPGS.prestige.singles.single9.effect())-0.02
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return 1
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return 1
                }
            },
            buyable12: {
                id: 12,
                cost: [
                    [1],
                    [280],
                    [1800, 30],
                    [9],
                    [22500, 70],
                    [1,1,1],
                    [70000, 400, 8],
                    [750],
                    [75, 7, 2],
                    [2000, 300],
                    [9999],
                ],
                rarity: [
                    [18, 0, 0],
                    [10, 0, 0],
                    [9, 15, 0],
                    [16, 0, 0],
                    [6, 14, 0],
                    [18, 19, 20],
                    [5, 11, 17],
                    [12,0,0],
                    [15, 16, 17],
                    [10, 13, 0],
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
                        if (BUY.q(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==4) {
                        if (BUY.w(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==5) {
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
                        if (BUY.q(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==8 && player.mastery_upgrades.buyables[6] >= 2) {
                        if (BUY.e(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==9) {
                        if (BUY.w(x, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.upgrades.buyables[this.id]++
                },
                effect(x=player.upgrades.buyables[this.id]) {
                    return x/10000
                },
                text_effect1(x=player.upgrades.buyables[this.id]) {
                    return 1
                },
                text_effect2(x=player.upgrades.buyables[this.id]+1) {
                    return 1
                }
            },
        }
    },
    mastery: {
        buyables: {
            buyable1: {
                id: 1,
                cost: [
                    [1],
                    [2, 50],
                    [4,10,1],
                    [9999]
                ],
                rarity: [
                    [0, 0, 0],
                    [0, 15, 0],
                    [0, 18, 20],
                    [25, 25, 0],
                ],
                mastery_rarity: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0]
                ],
                buy(x=player.mastery_upgrades.buyables[this.id]) {
                    let bought = false
                    if (x==0) {
                        if (BUY.mq(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==1) {
                        if (BUY.mw(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==2) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.mastery_upgrades.buyables[this.id]++
                },
                effect(x=player.mastery_upgrades.buyables[this.id]) {
                    return x*UPGS.prestige.singles.single10.effect()
                },
            },
            buyable2: {
                id: 2,
                cost: [
                    [1],
                    [2, 40000, 200],
                    [4, 350000, 3],
                    [9999]
                ],
                rarity: [
                    [0, 0, 0],
                    [0, 3, 13],
                    [0, 1, 22],
                    [25, 25, 0],
                ],
                mastery_rarity: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0]
                ],
                buy(x=player.mastery_upgrades.buyables[this.id]) {
                    let bought = false
                    if (x==0) {
                        if (BUY.mq(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==1) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==2) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.mastery_upgrades.buyables[this.id]++
                },
                effect(x=player.mastery_upgrades.buyables[this.id]) {
                    return x*UPGS.prestige.singles.single10.effect()
                },
            },
            buyable3: {
                id: 3,
                cost: [
                    [1],
                    [2, 2500, 120],
                    [4, 8, 2],
                    [9999]
                ],
                rarity: [
                    [0, 0, 0],
                    [0, 10, 14],
                    [0, 19, 23],
                    [25, 25, 0],
                ],
                mastery_rarity: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0]
                ],
                buy(x=player.mastery_upgrades.buyables[this.id]) {
                    let bought = false
                    if (x==0) {
                        if (BUY.mq(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==1) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==2) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.mastery_upgrades.buyables[this.id]++
                },
                effect(x=player.mastery_upgrades.buyables[this.id]) {
                    return 0.025*x*UPGS.prestige.singles.single10.effect()
                },
            },
            buyable4: {
                id: 4,
                cost: [
                    [1],
                    [2, 650],
                    [4, 10000, 45],
                    [9999]
                ],
                rarity: [
                    [0, 0, 0],
                    [0, 12, 0],
                    [0, 9, 17],
                    [25, 25, 0],
                ],
                mastery_rarity: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0]
                ],
                buy(x=player.mastery_upgrades.buyables[this.id]) {
                    let bought = false
                    if (x==0) {
                        if (BUY.mq(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==1) {
                        if (BUY.mw(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==2) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.mastery_upgrades.buyables[this.id]++
                },
                effect(x=player.mastery_upgrades.buyables[this.id]) {
                    return 0.025*x*UPGS.prestige.singles.single10.effect()
                },
            },
            buyable5: {
                id: 5,
                cost: [
                    [1],
                    [2, 40, 300000],
                    [4, 5, 1],
                    [9999]
                ],
                rarity: [
                    [0, 0, 0],
                    [0, 16, 2],
                    [0, 22, 24],
                    [25, 25, 0],
                ],
                mastery_rarity: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0]
                ],
                buy(x=player.mastery_upgrades.buyables[this.id]) {
                    let bought = false
                    if (x==0) {
                        if (BUY.mq(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==1) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==2) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.mastery_upgrades.buyables[this.id]++
                },
                effect(x=player.mastery_upgrades.buyables[this.id]) {
                    return x/2*UPGS.prestige.singles.single10.effect()
                },
            },
            buyable6: {
                id: 6,
                cost: [
                    [1],
                    [3, 500000, 25],
                    [5, 75000, 1],
                    [9999]
                ],
                rarity: [
                    [0, 0, 0],
                    [0, 0, 17],
                    [0, 4, 25],
                    [25, 25, 0],
                ],
                mastery_rarity: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0]
                ],
                buy(x=player.mastery_upgrades.buyables[this.id]) {
                    let bought = false
                    if (x==0) {
                        if (BUY.mq(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==1) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==2) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.mastery_upgrades.buyables[this.id]++
                },
            },
            buyable7: {
                id: 7,
                cost: [
                    [2],
                    [3, 125, 56],
                    [4, 25000, 22],
                    [9999]
                ],
                rarity: [
                    [0, 0, 0],
                    [0, 15, 16],
                    [0, 8, 18],
                    [25, 25, 0],
                ],
                mastery_rarity: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0]
                ],
                buy(x=player.mastery_upgrades.buyables[this.id]) {
                    let bought = false
                    if (x==0) {
                        if (BUY.mq(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==1) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==2) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.mastery_upgrades.buyables[this.id]++
                },
                effect(x=player.mastery_upgrades.buyables[this.id]) {
                    return x/2*UPGS.prestige.singles.single10.effect()
                },
            },
            buyable8: {
                id: 8,
                cost: [
                    [2],
                    [3, 1500, 4],
                    [4, 300000, 105000],
                    [9999]
                ],
                rarity: [
                    [0, 0, 0],
                    [0, 11, 18],
                    [0, 1, 3],
                    [25, 25, 0],
                ],
                mastery_rarity: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0]
                ],
                buy(x=player.mastery_upgrades.buyables[this.id]) {
                    let bought = false
                    if (x==0) {
                        if (BUY.mq(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==1) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==2) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.mastery_upgrades.buyables[this.id]++
                },
                effect(x=player.mastery_upgrades.buyables[this.id]) {
                    return x/1.33333333*UPGS.prestige.singles.single10.effect()
                },
            },
            buyable9: {
                id: 9,
                cost: [
                    [2],
                    [4, 3, 1],
                    [6, 8000, 25],
                    [9999]
                ],
                rarity: [
                    [0, 0, 0],
                    [0, 20, 21],
                    [0, 10, 18],
                    [25, 25, 0],
                ],
                mastery_rarity: [
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0],
                    [1, 0, 0]
                ],
                buy(x=player.mastery_upgrades.buyables[this.id]) {
                    let bought = false
                    if (x==0) {
                        if (BUY.mq(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==1) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (x==2) {
                        if (BUY.me(x, this.mastery_rarity, this.rarity, this.cost)) {
                            bought = true
                        }
                    }
                    if (bought) player.mastery_upgrades.buyables[this.id]++
                },
                effect(x=player.mastery_upgrades.buyables[this.id]) {
                    return x*3*UPGS.prestige.singles.single10.effect()
                },
            }
        }
    },
    prestige: {
        checkDisable() {
            for (let i = 0; i < Object.keys(this.singles).length; i++) {
                if (this.singles[`single${i+1}`].disable()) document.getElementsByClassName('prestigeSingleUpgrade')[i].disabled = true
                else document.getElementsByClassName('prestigeSingleUpgrade')[i].disabled = false

                if (this.singles[`single${i+1}`].bought()) document.getElementsByClassName('prestigeSingleUpgrade')[i].classList.add('purchased')
            }
        },
        singles: {
            single1: {
                id: 11,
                cost() { return 1 },
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 1+x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 1+x
                },
            },
            single2: {
                id: 12,
                cost() { return 1 },
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 100*x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 100*x
                },
            },
            single3: {
                id: 13,
                cost() { return 2 },
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 3*x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 3*x
                },
            },
            single4: {
                id: 14,
                cost() { return 25},
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
            },
            single5: {
                id: 21,
                cost() { return 1},
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 1-0.1*x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 1-0.1*x
                },
            },
            single6: {
                id: 22,
                cost() { return 2},
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return Math.pow(16, x)
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return Math.pow(16, x)
                },
            },
            single7: {
                id: 23,
                cost() { return 1000},
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return Math.pow(3, x)
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return Math.pow(3, x)
                },
            },
            single8: {
                id: 24,
                cost() { return 100 },
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
            },
            single9: {
                id: 31,
                cost() { return 1},
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 1-0.1*x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 1-0.1*x
                },
            },
            single10: {
                id: 32,
                cost() { return 5 },
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 1+0.1*x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 1+0.1*x
                },
            },
            single11: {
                id: 33,
                cost() { return 99999},
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
            },
            single12: {
                id: 34,
                cost() { return 99999},
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
            },
            single13: {
                id: 41,
                cost() { return 10 },
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return Math.pow(3, x)
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return Math.pow(3, x)
                },
            },
            single14: {
                id: 42,
                cost() { return 25 },
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
            },
            single15: {
                id: 43,
                cost() { return 15 },
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 1-0.5*x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return 1-0.5*x
                },
            },
            single16: {
                id: 44,
                cost() { return 10000},
                rarity() { return 0 },
                disable() { return !BUY.pq_req(this.rarity(), this.cost()) && !player.prestige.upgrades.singles.includes(this.id)},
                bought() { return player.prestige.upgrades.singles.includes(this.id) },
                buy(x=player.prestige.upgrades.singles.includes(this.id)) {
                    if (x == 0) {
                        if (BUY.pq(this.rarity(), this.cost()))
                        player.prestige.upgrades.singles.push(this.id)
                    }
                },
                effect(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
                text_effect1(x=player.prestige.upgrades.singles.includes(this.id)) {
                    return x
                },
            },
        }
    }
}