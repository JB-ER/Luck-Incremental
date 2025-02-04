min = 1, max = 1024, mastery_max = 1000000; //131072
let rollCD = [0, 0];
let tick = 0, language = 'en', to_roll = 1 

function roll() {
    if (player.cooldowns.rolls == 0){
        player.cooldowns.rolls += 1500/UPGS.common.buyables.buyable3.effect()*UPGS.prestige.singles.single5.effect()

        auto_roll()
    }
}

function mastery_roll() {
    if (player.cooldowns.mastery_rolls == 0){
        player.cooldowns.mastery_rolls += 60000/UPGS.common.buyables.buyable10.effect()*UPGS.prestige.singles.single5.effect()*UPGS.prestige.singles.single9.effect()

        auto_mastery_roll()
    }
}

function auto_roll() {
        let double_roll = Math.floor(Math.random() * 100)+1
        to_roll = UPGS.common.buyables.buyable9.effect()

        if (double_roll > 0 && double_roll < UPGS.common.buyables.buyable2.effect()) to_roll *= 2

        for (let i = 0; i < to_roll; i++) {
            player.rolls++;

            let number = Math.floor(Math.random() * max);
            player.prestige.upgrades.singles.includes(12) ? number = number+100 : number

            let number_double_rarity = Math.floor(Math.random() * 100)+1;
            let number_upgrade_rarity = Math.floor(Math.random() * 100)+1;
            let lowerBound = 1;
            let to_double = 1, to_upgrade = 0
            let get_mastered_roll = Math.floor(Math.random() * 1000000)+1
        
            for (let rariti in rarities) {
                let upperBound = lowerBound + rarities[rariti].chance();

                if (number >= lowerBound && number < upperBound) {
                    const index = Object.keys(rarities).indexOf(rariti)
                    if (number_double_rarity >= 0 && number_double_rarity <= UPGS.common.buyables.buyable7.effect()) {
                        to_double = 2
                        if (index >= player.best_.rarity.id-5 || player.rarities[rariti].current <= 10 || player.rarities[rariti].total <= 25) {
                            text_disappear[1] = 15000
                            ELS.rarity_text[1].style.opacity = 1
                            ELS.rarity_text[1].innerHTML = `You doubled <span class=\"rarityText\" style=\"color: var(--${rariti})\">${rariti.charAt(0).toUpperCase() + rariti.slice(1).replace(/_/g, ' ')}</span> at ${formatNumber(player.rolls)}th roll`
                        }
                    }
                    if (number_upgrade_rarity >= 0 && number_upgrade_rarity <= UPGS.common.buyables.buyable8.effect()) {
                        to_upgrade = 1
                        if (index >= player.best_.rarity.id-5) {
                            text_disappear[2] = 15000
                            ELS.rarity_text[2].style.opacity = 1
                            ELS.rarity_text[2].innerHTML = `You upgraded <span class=\"rarityText\" style=\"color: var(--${rariti})\">${rariti.charAt(0).toUpperCase() + rariti.slice(1).replace(/_/g, ' ')}</span> to <span class=\"rarityText\" style=\"color: var(--${Object.keys(rarities)[index+1]})\">${Object.keys(rarities)[index+1].charAt(0).toUpperCase() + Object.keys(rarities)[index+1].slice(1).replace(/_/g, ' ')}</span> at ${formatNumber(player.rolls)}th roll`
                        }
                    }

                    const actual_rarity = Object.keys(rarities)[index+to_upgrade]
                    player.rarities[actual_rarity].current += to_double;
                    player.rarities[actual_rarity].total += to_double;
                    if (player.rarities[actual_rarity].first_roll == 0) player.rarities[actual_rarity].first_roll = player.rolls

                    if (player.best_.rarity.id < index) {
                        player.best_.rarity.text = rarity[index]
                        player.best_.rarity.id = index
                    }
                    if (index >= player.best_.rarity.id-5) {
                        text_disappear[0] = 15000
                        ELS.rarity_text[0].style.opacity = 1
                        ELS.rarity_text[0].innerHTML = `You rolled <span class=\"rarityText\" style=\"color: var(--${rariti})\">${rariti.charAt(0).toUpperCase() + rariti.slice(1).replace(/_/g, ' ')}</span> with (1/${formatNumber(max/rarities[rariti].chance())}) chance at ${formatNumber(player.rolls)}th roll`
                    }
                }
        
            lowerBound = upperBound; // Сдвигаем нижнюю границу для следующей редкости
        }
        if (get_mastered_roll <= UPGS.common.buyables.buyable12.effect()*1e6) {
            auto_mastery_roll()
        }
        if (player.prestige.upgrades.singles.includes(14)) {
            player.rarities.nothing.current++
            player.rarities.nothing.total++
        }  
    }
}

function auto_mastery_roll() {
    player.mastery_rolls++;

        let number = Math.floor(Math.random() * mastery_max);
        let lowerBound = 0;
    
        for (let mastery_rarity in mastery_rarities) {
            let upperBound = lowerBound + mastery_rarities[mastery_rarity].chance();

            if (number >= lowerBound && number < upperBound) {
                const index = Object.keys(mastery_rarities).indexOf(mastery_rarity)

                const actual_rarity = Object.keys(mastery_rarities)[index]
                player.mastery_rarities[actual_rarity].current += 1
                player.mastery_rarities[actual_rarity].total += 1
                if (player.mastery_rarities[actual_rarity].first_roll == 0) player.mastery_rarities[actual_rarity].first_roll = player.mastery_rolls

                // if (player.best_.rarity.id < index) {
                //     player.best_.rarity.text = rarity[index]
                //     player.best_.rarity.id = index
                // }
                if (actual_rarity != 'none') {
                    text_disappear[0] = 15000
                    ELS.rarity_text[0].style.opacity = 1
                    ELS.rarity_text[0].innerHTML = `You rolled <span class=\"masterRarityText masteryRarityColor\" style=\"color: var(--${mastery_rarity})\">${mastery_rarity.charAt(0).toUpperCase() + mastery_rarity.slice(1).replace(/_/g, ' ')}</span> with (1/${formatNumber(mastery_max/mastery_rarities[mastery_rarity].chance())}) chance at ${formatNumber(player.mastery_rolls, 'chance')}th roll`
                }
            }
        lowerBound = upperBound; // Сдвигаем нижнюю границу для следующей редкости
    }
}

function rollCooldown() {
    const isMobile = (window.outerWidth <= 768)
    if (player.cooldowns.rolls > 0) {
        player.cooldowns.rolls -= tick
        document.getElementById('cdText').textContent = player.cooldowns.rolls > 0 ? `${(player.cooldowns.rolls/1000).toFixed(2)}s` : ''
        if (player.cooldowns.rolls > 0) {
            if (isMobile) document.getElementById('rollCooldownProgress').style.width = (player.cooldowns.rolls/1500*UPGS.common.buyables.buyable3.effect()/UPGS.prestige.singles.single5.effect())*120 + 'px'  
            else document.getElementById('rollCooldownProgress').style.width = (player.cooldowns.rolls/1500*UPGS.common.buyables.buyable3.effect()/UPGS.prestige.singles.single5.effect())*80 + 'px'
        }  
        else document.getElementById('rollCooldownProgress').style.width = 0
    }
    else {
        player.cooldowns.rolls = 0
    }
}

function rollCooldown2() {
    const isMobile = (window.outerWidth <= 768)
    if (player.cooldowns.mastery_rolls > 0) {
        player.cooldowns.mastery_rolls -= tick
        document.getElementById('cdText2').textContent = player.cooldowns.mastery_rolls > 0 ? `${(player.cooldowns.mastery_rolls/1000).toFixed(2)}s` : ''
        if (player.cooldowns.mastery_rolls > 0) {
            if (isMobile) document.getElementById('rollCooldownProgress2').style.width = (player.cooldowns.mastery_rolls/60000*UPGS.common.buyables.buyable10.effect()/UPGS.prestige.singles.single5.effect()/UPGS.prestige.singles.single9.effect()*120) + 'px'  
            else document.getElementById('rollCooldownProgress2').style.width = (player.cooldowns.mastery_rolls/60000*UPGS.common.buyables.buyable10.effect()/UPGS.prestige.singles.single5.effect()/UPGS.prestige.singles.single9.effect()*80) + 'px'
        }  
        else document.getElementById('rollCooldownProgress2').style.width = 0
    }
    else {
        player.cooldowns.mastery_rolls = 0
    }
}

function runRollDev(x=10) {
    for (let i = 0; i < x; i++) {
        roll()
        // mastery_roll()
        player.cooldowns.rolls = 0
    }
}

function updateTick() {
    updateTime()
    rollCooldown()
    rollCooldown2()
    PRESTIGE.dice.rollCooldown()
    UNL.display.check()
    UPGS.prestige.checkDisable()
    PRESTIGE.updateProgressBar()
    if (temp.time.auto_save >= 30000) {
        if (local.settings.cloud_sync == 'yes') {
            if (player.rolls >= 100) autoSaveGameDB(local.key, JSON.stringify(player))
            else { showNotification("You need 100 or more rolls to sync with cloud. Game saved locally.", "white", "500px"); setTimeout(showNotification("Game autosaved!"), 3000) }
        }
        else showNotification("Game autosaved!")
        saveGame(auto=true)

    }
    max = 1024 * UPGS.common.buyables.buyable5.effect() * UPGS.prestige.singles.single6.effect()
    checkMobile()
}

let text_disappear = [0,0,0]
function updateTime() {
    player.time.current = new Date().getTime()
    tick = player.time.current - player.time.saved
    player.time.saved = new Date().getTime()
    if (player.settings.autosave_enabled == 'enabled') temp.time.auto_save += tick
    for (let i = 0; i < document.getElementsByClassName('rarity_text').length; i++) {
        const element = document.getElementsByClassName('rarity_text')[i];
        text_disappear[i] -= tick
        element.style.opacity = text_disappear[i]/15000
    }
}


let rarities = {
    nothing: {
        chance: () => max / (2*UPGS.common.buyables.buyable1.effect()), // 1024/2.1=487
        range: () => max - rarities.nothing.chance() //1024-487=537
    },
    absolute_worst: {
        chance: () => rarities.nothing.range() / (2*UPGS.common.buyables.buyable1.effect()), // 537/2.1=255
        range: () => rarities.nothing.range() - rarities.absolute_worst.chance() //537-255=282
    },
    worst: {
        chance: () => rarities.absolute_worst.range() / (2*UPGS.common.buyables.buyable1.effect()), // 282/2.1=134
        range: () => rarities.absolute_worst.range() - rarities.worst.chance() //282-134=148
    },
    disgusting: {

        chance: () => rarities.worst.range() / 2, // 148/2=74
    },
    abominable: {
        chance: () => rarities.disgusting.chance() / 2, // 74/2=36
    },
    repulsive: {
        chance: () => rarities.abominable.chance() / 2, // 36/2=18
    },
    dreadful: {
        chance: () => rarities.repulsive.chance() / 2, // 18/2=9
    },
    appaling: {
        chance: () => rarities.dreadful.chance() / 2, // 9/2=4
    },
    horrible: {
        chance: () => rarities.appaling.chance() / 2, // 4/2=2
    },
    awful: {
        chance: () => rarities.horrible.chance() / 2, // 2/2=1
    },
    terrible: {
        chance: () => rarities.awful.chance() / 2, // 2/2=1
    },
    poor: {
        chance: () => rarities.terrible.chance() / 2, // 2/2=1
    },
    unremarkable: {
        chance: () => rarities.poor.chance() / 2, // 2/2=1
    },
    bad: {
        chance: () => rarities.unremarkable.chance() / 2, // 2/2=1
    },
    so_so: {
        chance: () => rarities.bad.chance() / 2, // 2/2=1
    },
    common: {
        chance: () => rarities.so_so.chance() / 2, // 2/2=1
    },
    regular: {
        chance: () => rarities.common.chance() / 2, // 2/2=1
    },
    standard: {
        chance: () => rarities.regular.chance() / 2, // 2/2=1
    },
    decent: {
        chance: () => rarities.standard.chance() / 2, // 2/2=1
    },
    average: {
        chance: () => rarities.decent.chance() / 2, // 2/2=1
    },
    usual: {
        chance: () => rarities.average.chance() / 2, // 2/2=1
    },
    moderate: {
        chance: () => rarities.usual.chance() / 2, // 2/2=1
    },
    adequate: {
        chance: () => rarities.moderate.chance() / 2, // 2/2=1
    },
    fair: {
        chance: () => rarities.adequate.chance() / 2, // 2/2=1
    },
    fine: {
        chance: () => rarities.fair.chance() / 2, // 2/2=1
    },
    solid: {
        chance: () => rarities.fine.chance() / 2, // 2/2=1
    },
    worthy: {
        chance: () => rarities.solid.chance() / 2, // 2/2=1
    },
    admirable: {
        chance: () => rarities.worthy.chance() / 2, // 2/2=1
    },
    unusual: {
        chance: () => rarities.admirable.chance() / 2, // 2/2=1
    },
    uncommon: {
        chance: () => rarities.unusual.chance() / 2, // 2/2=1
    },
    good: {
        chance: () => rarities.uncommon.chance() / 2, // 2/2=1
    },
    valuable: {
        chance: () => rarities.good.chance() / 2, // 2/2=1
    },
    impressive: {
        chance: () => rarities.valuable.chance() / 2, // 2/2=1
    },
    significant: {
        chance: () => rarities.impressive.chance() / 2, // 2/2=1
    },
    important: {
        chance: () => rarities.significant.chance() / 2, // 2/2=1
    },
    highquality: {
        chance: () => rarities.important.chance() / 2, // 2/2=1
    },
    remarkable: {
        chance: () => rarities.highquality.chance() / 2, // 2/2=1
    },
    great: {
        chance: () => rarities.remarkable.chance() / 2, // 2/2=1
    },
    exceptional: {
        chance: () => rarities.great.chance() / 2, // 2/2=1
    },
    excellent: {
        chance: () => rarities.exceptional.chance() / 2, // 2/2=1
    },
    refined: {
        chance: () => rarities.excellent.chance() / 2, // 2/2=1
    },
    exquisite: {
        chance: () => rarities.refined.chance() / 2, // 2/2=1
    },
    elegant: {
        chance: () => rarities.exquisite.chance() / 2, // 2/2=1
    },
    rare: {
        chance: () => rarities.elegant.chance() / 2, // 2/2=1
    },
    extraordinary: {
        chance: () => rarities.rare.chance() / 2, // 2/2=1
    },
    outstanding: {
        chance: () => rarities.extraordinary.chance() / 2, // 2/2=1
    },
    satisfactory: {
        chance: () => rarities.outstanding.chance() / 2, // 2/2=1
    },
    respectable: {
        chance: () => rarities.satisfactory.chance() / 2, // 2/2=1
    },
    well_made: {
        chance: () => rarities.respectable.chance() / 2, // 2/2=1
    },
    shining: {
        chance: () => rarities.well_made.chance() / 2, // 2/2=1
    },
};

let mastery_rarities = {
    none: {
        chance: () => mastery_max * (UPGS.common.buyables.buyable11.effect()),
        range: () => mastery_max - mastery_rarities.none.chance() //1024-487=537
    },
    newbie: {
        chance: () => mastery_rarities.none.range()
    }
}

const UNL = {
    display: {
        unl(x, y = 'none') { return this.ids[x].req() ? (this.ids[x].element).style.display = this.ids[x].type : (this.ids[x].element).style.display = y},
        check() {
            for (let i = 1; i <= Object.keys(UNL.display.ids).length; i++)
            if (this.ids[i].type != 'none') this.unl(i)
            else this.unl(i, 'flex')
        },
        ids: {
            1: {
                name: '',
                type: 'block',
                element: document.getElementById('craftScreenButton'),
                req() {return player.upgrades.buyables[6] >= 2},
            },
            2: {
                name: '',
                type: 'block',
                element: document.getElementById('decraftScreenButton'),
                req() {return player.upgrades.buyables[6] >= 3},
            },
            3: {
                name: 'buyAll',
                type: 'flex',
                element: document.getElementById('thirdUpgradeRow'),
                req() {return player.upgrades.buyables[6] >= 1},
            },
            4: {
                name: 'rollButton2',
                type: 'flex',
                element: document.getElementById('roll2'),
                req() {return player.upgrades.buyables[6] >= 4},
            },
            5: {
                name: 'masteryUpgradesTab',
                type: 'flex',
                element: document.getElementById('masteryUpgradesTab'),
                req() {return player.upgrades.buyables[6] >= 4},
            },
            6: {
                name: 'fourthUpgradeRow',
                type: 'flex',
                element: document.getElementById('fourthUpgradeRow'),
                req() {return player.mastery_upgrades.buyables[6] >= 1},
            },
            7: {
                name: 'thirdMasteryUpgradeRow',
                type: 'flex',
                element: document.getElementById('thirdMasteryUpgradeRow'),
                req() {return player.mastery_upgrades.buyables[6] >= 3},
            },
            8: {
                name: 'masteryRarityTable1',
                type: 'block',
                element: document.getElementById('masteryRarityTable1'),
                req() {return player.upgrades.buyables[6] >= 4},
            },
            9: {
                name: 'masteryRaritiesButton',
                type: 'flex',
                element: document.getElementById('masteryRaritiesButton'),
                req() {return player.upgrades.buyables[6] >= 4},
            },
            10: {
                name: 'prestigeTab',
                type: 'block',
                element: document.getElementById('prestigeScreenButton'),
                req() {return player.upgrades.buyables[6] >= 5 || player.prestige.resets > 0}
            },
            11: {
                name: 'prestigeRaritiesButton',
                type: 'flex',
                element: document.getElementById('prestigeRaritiesButton'),
                req() {return player.upgrades.buyables[6] >= 5 || player.prestige.resets > 0}
            },
            12: {
                name: 'aaa',
                type: 'flex',
                element: document.getElementById('roll3'),
                req() {return player.prestige.resets > 0}
            }
        }
    }
}

discordServer.addEventListener('click', function() {
    window.open('https://discord.gg/BY6E6Gd8', '_blank');
});


function checkMobile() {
    const isMobile = (window.outerWidth <= 768)
    const elements = document.querySelectorAll('.half'); 
    const elements2 = document.querySelectorAll('.whiteButton');
    const elements3 = document.querySelectorAll('.rarityCount');
    const elements4 = document.querySelectorAll('.buyableUpgrade');
    const elements5 = document.querySelectorAll('.settingButton');
    const elements6 = document.querySelectorAll('.craftBlock');
    const elements7 = document.querySelectorAll('.craftButton');
    const elements12 = document.querySelectorAll('.decraftButton');
    const elements8 = document.querySelectorAll('.masteryRarityCount');
    const elements9 = document.querySelectorAll('.masteryBuyableUpgrade');
    const elements10 = document.querySelectorAll('.optionList');
    const elements11 = document.querySelectorAll('.expandable-list');
    const elements13 = document.querySelectorAll('.prestige-bar');
    
    if (isMobile) {
        document.getElementById('game').classList.add('mobile')
        elements.forEach(element => {
        element.classList.add('mobile')
        });
        elements2.forEach(element => {
            element.classList.add('mobile')
        });
        elements3.forEach(element => {
            element.classList.add('mobile')
        });
        elements4.forEach(element => {
            element.classList.add('mobile')
        });
        elements5.forEach(element => {
            element.classList.add('mobile')
        });
        elements6.forEach(element => {
            element.classList.add('mobile')
        });
        elements7.forEach(element => {
            element.classList.add('mobile')
        });
        elements8.forEach(element => {
            element.classList.add('mobile')
        });
        elements9.forEach(element => {
            element.classList.add('mobile')
        });
        elements10.forEach(element => {
            element.classList.add('mobile')
        });
        elements11.forEach(element => {
            element.classList.add('mobile')
        });
        elements12.forEach(element => {
            element.classList.add('mobile')
        });
        elements13.forEach(element => {
            element.classList.add('mobile')
        });
        document.querySelector('body').classList.add('mobile')
        document.querySelector('footer').classList.add('mobile')
        document.querySelector('table').classList.add('mobile')
        document.getElementById('raritiesScreen').classList.add('mobile')
        document.getElementById('rollCooldown').classList.add('mobile')
        document.getElementById('rollCooldownProgress').classList.add('mobile')
        document.getElementById('rollsCount').classList.add('mobile')
        document.getElementById('rollButton').classList.add('mobile')
        document.getElementById('cdText').classList.add('mobile')
        document.getElementById('rollCooldown2').classList.add('mobile')
        document.getElementById('rollCooldownProgress2').classList.add('mobile')
        document.getElementById('rollsCount2').classList.add('mobile')
        document.getElementById('rollButton2').classList.add('mobile')
        document.getElementById('cdText2').classList.add('mobile')
        document.getElementById('craftScreen').classList.add('mobile')
        document.getElementById('decraftScreen').classList.add('mobile')
        document.getElementById('craftBlock').classList.add('mobile')
        document.getElementById('decraftBlock').classList.add('mobile')
        document.getElementById('center').classList.add('mobile')
        document.getElementsByClassName('marquee-container')[0].classList.add('mobile')
        document.getElementById('toggleButton').classList.add('mobile')
        document.getElementById('toggleButton2').classList.add('mobile')

        document.getElementById('rollCooldown3').classList.add('mobile')
        document.getElementById('rollCooldownProgress3').classList.add('mobile')
        document.getElementById('rollsCount3').classList.add('mobile')
        document.getElementById('rollButton3').classList.add('mobile')
        document.getElementById('cdText3').classList.add('mobile')
    }
    else {
        document.getElementById('game').classList.remove('mobile')
        elements.forEach(element => {
            element.classList.remove('mobile')
        });
        elements2.forEach(element => {
            element.classList.remove('mobile')
        });
        elements3.forEach(element => {
            element.classList.remove('mobile')
        });
        elements4.forEach(element => {
            element.classList.remove('mobile')
        });
        elements5.forEach(element => {
            element.classList.remove('mobile')
        });
        elements6.forEach(element => {
            element.classList.remove('mobile')
        });
        elements7.forEach(element => {
            element.classList.remove('mobile')
        });
        elements8.forEach(element => {
            element.classList.remove('mobile')
        });
        elements9.forEach(element => {
            element.classList.remove('mobile')
        });
        elements10.forEach(element => {
            element.classList.remove('mobile')
        });
        elements11.forEach(element => {
            element.classList.remove('mobile')
        });
        elements12.forEach(element => {
            element.classList.remove('mobile')
        });
        elements13.forEach(element => {
            element.classList.remove('mobile')
        });
        document.querySelector('body').classList.remove('mobile')
        document.querySelector('footer').classList.remove('mobile')
        document.querySelector('table').classList.remove('mobile')
        document.getElementById('raritiesScreen').classList.remove('mobile')
        document.getElementById('rollCooldown').classList.remove('mobile')
        document.getElementById('rollCooldownProgress').classList.remove('mobile')
        document.getElementById('cdText').classList.remove('mobile')
        document.getElementById('rollsCount').classList.remove('mobile')
        document.getElementById('rollButton').classList.remove('mobile')
        document.getElementById('center').classList.remove('mobile')
        document.getElementsByClassName('marquee-container')[0].classList.remove('mobile')

        document.getElementById('rollCooldown2').classList.remove('mobile')
        document.getElementById('rollCooldownProgress2').classList.remove('mobile')
        document.getElementById('rollsCount2').classList.remove('mobile')
        document.getElementById('rollButton2').classList.remove('mobile')
        document.getElementById('cdText2').classList.remove('mobile')
        document.getElementById('craftScreen').classList.remove('mobile')
        document.getElementById('decraftScreen').classList.remove('mobile')
        document.getElementById('craftBlock').classList.remove('mobile')
        document.getElementById('decraftBlock').classList.remove('mobile')
        document.getElementById('toggleButton').classList.remove('mobile')
        document.getElementById('toggleButton2').classList.remove('mobile')

        document.getElementById('rollCooldown3').classList.remove('mobile')
        document.getElementById('rollCooldownProgress3').classList.remove('mobile')
        document.getElementById('rollsCount3').classList.remove('mobile')
        document.getElementById('rollButton3').classList.remove('mobile')
        document.getElementById('cdText3').classList.remove('mobile')
    }
}

const toggleButton = document.getElementById('toggleButton'), toggleButton2 = document.getElementById('toggleButton2');
const expandableList = document.getElementById('expandableList'), expandableList2 = document.getElementById('expandableList2');


    toggleButton.addEventListener('click', () => {
        expandableList.classList.toggle('open');
    });
    toggleButton2.addEventListener('click', () => {
        expandableList2.classList.toggle('open');
    });

function openCraftRarity(x) {
    toggleButton.innerHTML = `<span class=\"rarityText\" style=\"color: var(--${rarity[x]});\">${makeCapital(rarity[x])}</span> ⯆`
    expandableList.classList.remove('open');
    let buttons = {}, spans = {}

    craftRarities.querySelectorAll("span").forEach(span => span.remove())
    document.querySelectorAll(".craftButton").forEach(button => button.remove())

    document.documentElement.style.setProperty("--gradient-start", `var(--${rarity[x-1]})`)
    document.documentElement.style.setProperty("--gradient-end", `var(--${rarity[x]})`)

    spans[`span1`] = document.createElement("span")
    spans[`span1`].textContent = `${makeCapital(rarity[x-1])}`
    spans[`span1`].classList.add('rarityText')
    spans[`span1`].style.color = `var(--${rarity[x-1]})`
    craftRarities.appendChild(spans[`span1`])

    spans[`span2`] = document.createElement("span")
    spans[`span2`].textContent = `➔`
    spans[`span2`].classList.add('gradient-text')
    craftRarities.appendChild(spans[`span2`])

    spans[`span3`] = document.createElement("span")
    spans[`span3`].textContent = `${makeCapital(rarity[x])}`
    spans[`span3`].classList.add('rarityText')
    spans[`span3`].style.color = `var(--${rarity[x]})`
    craftRarities.appendChild(spans[`span3`])

    for (let i = 1; i <= 5; i++) {
        buttons[`button${i}`] = document.createElement("button")
        buttons[`button${i}`].textContent = `${3*Math.pow(10, i-1)} ➔ ${Math.pow(10, i-1)}`

        buttons[`button${i}`].addEventListener("click", () => craft(rarity[x-1], rarity[x], Math.pow(10, i-1)))

        buttons[`button${i}`].classList.add('craftButton')

        craftBlock.appendChild(buttons[`button${i}`])
}
}

function openDecraftRarity(x) {
    toggleButton2.innerHTML = `<span class=\"rarityText\" style=\"color: var(--${rarity[x]});\">${makeCapital(rarity[x])}</span> ⯆`
    expandableList2.classList.remove('open');
    let buttons = {}, spans = {}

    decraftRarities.querySelectorAll("span").forEach(span => span.remove())
    document.querySelectorAll(".decraftButton").forEach(button => button.remove())

    document.documentElement.style.setProperty("--gradient-start", `var(--${rarity[x]})`)
    document.documentElement.style.setProperty("--gradient-end", `var(--${rarity[x-1]})`)

    spans[`span1`] = document.createElement("span")
    spans[`span1`].textContent = `${makeCapital(rarity[x])}`
    spans[`span1`].classList.add('rarityText')
    spans[`span1`].style.color = `var(--${rarity[x]})`
    decraftRarities.appendChild(spans[`span1`])

    spans[`span2`] = document.createElement("span")
    spans[`span2`].textContent = `➔`
    spans[`span2`].classList.add('gradient-text')
    decraftRarities.appendChild(spans[`span2`])

    spans[`span3`] = document.createElement("span")
    spans[`span3`].textContent = `${makeCapital(rarity[x-1])}`
    spans[`span3`].classList.add('rarityText')
    spans[`span3`].style.color = `var(--${rarity[x-1]})`
    decraftRarities.appendChild(spans[`span3`])

    for (let i = 1; i <= 5; i++) {
        buttons[`button${i}`] = document.createElement("button")
        buttons[`button${i}`].textContent = `${2*Math.pow(10, i-1)} ➔ ${3*Math.pow(10, i-1)}`

        buttons[`button${i}`].addEventListener("click", () => decraft(rarity[x-1], rarity[x], Math.pow(10, i-1)))

        buttons[`button${i}`].classList.add('decraftButton')

        decraftBlock.appendChild(buttons[`button${i}`])
}
}