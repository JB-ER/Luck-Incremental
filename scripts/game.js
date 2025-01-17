min = 1, max = 1024; //131072
let rollCD = 0;
let tick = 0, language = 'en', to_roll = 1 

function roll() {
    if (rollCD == 0){
        rollCD += 2000/UPGS.buyable3.effect()

        auto_roll()
    }
}

function auto_roll() {
        let double_roll = Math.floor(Math.random() * 100)+1
        to_roll = calculate_roll()

        if (double_roll > 0 && double_roll < UPGS.buyable2.effect()) to_roll *= 2

        for (let i = 0; i < to_roll; i++) {
            player.rolls++;

            let number = Math.floor(Math.random() * max);
            let number_double_rarity = Math.floor(Math.random() * 100)+1;
            let number_upgrade_rarity = Math.floor(Math.random() * 100)+1;
            let lowerBound = 1;
            let to_double = 1, to_upgrade = 0
        
            for (let rariti in rarities) {
                let upperBound = lowerBound + rarities[rariti].chance();

                if (number >= lowerBound && number < upperBound) {
                    const index = Object.keys(rarities).indexOf(rariti)
                    if (number_double_rarity >= 0 && number_double_rarity <= UPGS.buyable7.effect()) {
                        to_double = 2
                        if (index >= player.best_.rarity.id-5 || player.rarities[rariti].current <= 10 || player.rarities[rariti].total <= 25) {
                            text_disappear[1] = 15000
                            ELS.rarity_text[1].style.opacity = 1
                            ELS.rarity_text[1].innerHTML = `You doubled <span class=\"rarityText\" style=\"color: var(--${rariti})\">${rariti.charAt(0).toUpperCase() + rariti.slice(1).replace(/_/g, ' ')}</span> at ${formatNumber(player.rolls)}th roll`
                        }
                    }
                    if (number_upgrade_rarity >= 0 && number_upgrade_rarity <= UPGS.buyable8.effect()) {
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
    }
}

function rollCooldown() {
    const isMobile = (window.outerWidth <= 768)
    if (rollCD > 0) {
        rollCD -= tick
        document.getElementById('cdText').textContent = rollCD > 0 ? `${(rollCD/1000).toFixed(2)}s` : ''
        document.getElementById('rollCooldownProgress').style.width = rollCD > 0 ? isMobile ? (rollCD/2000*UPGS.buyable3.effect())*120 + 'px' : (rollCD/2000*UPGS.buyable3.effect())*80 : 0
    }
    else {
        rollCD = 0
    }
}

function runRollDev(x=10) {
    for (let i = 0; i < x; i++) {
        roll()
        rollCD = 0
    }
}

function updateTick() {
    updateTime()
    rollCooldown()
    UNL.display.check()
    if (player.time.auto_save >= 30000) {
        saveGame()
    }
    max = 1024 * UPGS.buyable5.effect()
    checkMobile()
}

let text_disappear = [0,0,0]
function updateTime() {
    player.time.current = new Date().getTime()
    tick = player.time.current - player.time.saved
    player.time.saved = new Date().getTime()
    if (player.settings.autosave_enabled == 'enabled') player.time.auto_save += tick
    for (let i = 0; i < document.getElementsByClassName('rarity_text').length; i++) {
        const element = document.getElementsByClassName('rarity_text')[i];
        text_disappear[i] -= tick
        element.style.opacity = text_disappear[i]/15000
    }
}



let rarities = {
    nothing: {
        chance: () => max / (2*UPGS.buyable1.effect()), // 1024/2.1=487
        range: () => max - rarities.nothing.chance() //1024-487=537
    },
    absolute_worst: {
        chance: () => rarities.nothing.range() / (2*UPGS.buyable1.effect()), // 537/2.1=255
        range: () => rarities.nothing.range() - rarities.absolute_worst.chance() //537-255=282
    },
    worst: {
        chance: () => rarities.absolute_worst.range() / (2*UPGS.buyable1.effect()), // 282/2.1=134
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
};

const UNL = {
    display: {
        unl(x, y = 'none') { return this[x].req() ? (this[x].element).style.display = this[x].type : (this[x].element).style.display = y},
        check() {
            for (let i = 1; i <= 3; i++)
            if (this[i].type != 'none') this.unl(i)
            else this.unl(i, 'flex')
        },
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
    }
}



function checkMobile() {
    const isMobile = (window.outerWidth <= 768)
    const elements = document.querySelectorAll('.half'); 
    const elements2 = document.querySelectorAll('.whiteButton');
    const elements3 = document.querySelectorAll('.rarityCount');
    const elements4 = document.querySelectorAll('.buyableUpgrade');
    const elements5 = document.querySelectorAll('.settingButton');
    const elements6 = document.querySelectorAll('.craftBlock');
    const elements7 = document.querySelectorAll('.craftButton');
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
        document.querySelector('body').classList.add('mobile')
        document.querySelector('footer').classList.add('mobile')
        document.querySelector('table').classList.add('mobile')
        document.getElementById('raritiesScreen').classList.add('mobile')
        document.getElementById('rollCooldown').classList.add('mobile')
        document.getElementById('rollCooldownProgress').classList.add('mobile')
        document.getElementById('rollsCount').classList.add('mobile')
        document.getElementById('rollButton').classList.add('mobile')
        document.getElementById('cdText').classList.add('mobile')
        document.getElementById('center').classList.add('mobile')
        document.getElementsByClassName('marquee-container')[0].classList.add('mobile')
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
    }
}
