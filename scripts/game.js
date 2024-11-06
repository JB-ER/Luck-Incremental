min = 1, max = 1024; //131072
let rollCD = 0;
let tick = 0, language = 'en';

rollButton.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
            event.preventDefault();
        }})

function roll() {
    if (rollCD == 0){
        rollCD += 2000/UPGS.buyable3.effect()

        let double_roll = Math.floor(Math.random() * 100)+1, to_roll = 1 
        if (double_roll > 0 && double_roll < UPGS.buyable2.effect()) to_roll = 2

        for (let i = 0; i < to_roll; i++) {
            player.rolls++;

            let number = Math.floor(Math.random() * max);
            let lowerBound = 1;
        
            for (let rarity in rarities) {
                let upperBound = lowerBound + rarities[rarity].chance();
                
                if (number >= lowerBound && number < upperBound) {
                    player.rarities[rarity].current++;
                    player.rarities[rarity].total++;
                }
        
                lowerBound = upperBound; // Сдвигаем нижнюю границу для следующей редкости
            }
        }
    }
}

function auto_roll() {
        let double_roll = Math.floor(Math.random() * 100)+1, to_roll = 1 
        if (double_roll > 0 && double_roll < UPGS.buyable2.effect()) to_roll = 2

        for (let i = 0; i < to_roll; i++) {
            player.rolls++;

            let number = Math.floor(Math.random() * max);
            let lowerBound = 1;
        
            for (let rarity in rarities) {
                let upperBound = lowerBound + rarities[rarity].chance();
                
                if (number >= lowerBound && number < upperBound) {
                    player.rarities[rarity].current++;
                    player.rarities[rarity].total++;
                }
        
            lowerBound = upperBound; // Сдвигаем нижнюю границу для следующей редкости
        }
    }
}

function rollCooldown() {
    if (rollCD > 0) {
        rollCD -= tick
        document.getElementById('cdText').textContent = rollCD > 0 ? `${(rollCD/1000).toFixed(2)}s` : ''
        document.getElementById('rollCooldownProgress').style.width = rollCD > 0 ? (rollCD/2000*UPGS.buyable3.effect())*50 + 'px' : 0
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
    if (player.time.auto_save >= 5000) saveGame()
    max = 1024 * UPGS.buyable5.effect()
}

function updateTime() {
    player.time.current = new Date().getTime()
    tick = player.time.current - player.time.saved
    player.time.saved = new Date().getTime()
    player.time.auto_save += tick
}

setInterval(() => {
    updateTick()
}, 50);

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
};