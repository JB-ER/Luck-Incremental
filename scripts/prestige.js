let PRESTIGE = {
    max: 1000000,
    rarities: {
        unknown: {
            chance: () => 999999
        },
        forgotten: {
            chance: () => 0.9
        },
        obscure: {
            chance: () => 0.09
        },
        unnoted: {
            chance: () => 0.009
        },
        noticed: {
            chance: () => 0.0009
        }
    },
    unl() {
        let completed_prestige_req = 0
        for (let i = 1; i <= 5; i++) {
            if (this.requirements[i]()) completed_prestige_req++
            else break
        }
        return completed_prestige_req == 5
    },
    updateProgressBar() {
        for (let i = 1; i <= Object.keys(this.progressBar).length; i++) {
            this.progressBar[i]()
        }
    },
    progressBar: {
        1() {
            // if (isMobile) document.getElementById('rollCooldownProgress').style.width = (player.cooldowns.rolls/1500*UPGS.common.buyables.buyable3.effect())*120 + 'px'  
            document.getElementsByClassName('prestige-bar')[0].style.width = (Math.min(player.upgrades.buyables[6]/5, 1))*225 + 'px'
            document.getElementsByClassName('prestige-bar-text')[0].innerHTML = `Trophy upgrades: ${player.upgrades.buyables[6]}/5`
        },
        2() {
            // if (isMobile) document.getElementById('rollCooldownProgress').style.width = (player.cooldowns.rolls/1500*UPGS.common.buyables.buyable3.effect())*120 + 'px'  
            document.getElementsByClassName('prestige-bar')[1].style.width = (Math.min(player.rolls/(player.prestige.upgrades.singles.includes(42) ? 7.5e6 : 1e7), 1))*225 + 'px'
            document.getElementsByClassName('prestige-bar-text')[1].innerHTML = `Rolls: ${formatNumber(player.rolls)}/${player.prestige.upgrades.singles.includes(42) ? formatNumber(7.5e6) : formatNumber(1e7)}`
        },
        3() {
            // if (isMobile) document.getElementById('rollCooldownProgress').style.width = (player.cooldowns.rolls/1500*UPGS.common.buyables.buyable3.effect())*120 + 'px'  
            document.getElementsByClassName('prestige-bar')[2].style.width = (Math.min(player.mastery_rolls/(player.prestige.upgrades.singles.includes(42) ? 2000 : 2500), 1))*225 + 'px'
            document.getElementsByClassName('prestige-bar-text')[2].innerHTML = `Mastery rolls: ${player.mastery_rolls}/${player.prestige.upgrades.singles.includes(42) ? formatNumber(2000) : formatNumber(2500)}`
        },
        4() {
            // if (isMobile) document.getElementById('rollCooldownProgress').style.width = (player.cooldowns.rolls/1500*UPGS.common.buyables.buyable3.effect())*120 + 'px'  
            document.getElementsByClassName('prestige-bar')[3].style.width = (Math.min(player.mastery_rarities.newbie.current/(player.prestige.upgrades.singles.includes(42) ? 80 : 100), 1))*225 + 'px'
            document.getElementsByClassName('prestige-bar-text')[3].innerHTML = `Newbie: ${player.mastery_rarities.newbie.current}/${player.prestige.upgrades.singles.includes(42) ? formatNumber(80) : formatNumber(100)}`
        },
        5() {
            // if (isMobile) document.getElementById('rollCooldownProgress').style.width = (player.cooldowns.rolls/1500*UPGS.common.buyables.buyable3.effect())*120 + 'px'  
            document.getElementsByClassName('prestige-bar')[4].style.width = (Math.min((player.prestige.upgrades.singles.includes(42) ? player.rarities.fair.current : player.rarities.fine.current)/1, 1))*225 + 'px'
            player.prestige.upgrades.singles.includes(42) ? document.getElementsByClassName('prestige-bar-text')[4].innerHTML = `Fair: ${player.rarities.fair.current}/1` : document.getElementsByClassName('prestige-bar-text')[4].innerHTML = `Fine: ${player.rarities.fine.current}/1`
        },
    },
    requirements: {
        1() {
            return player.upgrades.buyables[6] >= 5
        },
        2() {
            return player.rolls >= player.prestige.upgrades.singles.includes(42) ? 7.5e6 : 1e7
        },
        3() {
            return player.mastery_rolls >= player.prestige.upgrades.singles.includes(42) ? 2000 : 2500
        },
        4() {
            return player.mastery_rarities.newbie.current >= player.prestige.upgrades.singles.includes(42) ? 80 : 100
        },
        5() {
            return player.prestige.upgrades.singles.includes(42) ? player.rarities.fair.current >= 1 : player.rarities.fine.current >= 1
        }
    },
    reset() {
        if (this.unl()) {
            for (let i = 1; i <= Object.keys(player.upgrades.buyables).length; i++) {
                if (i <= 9) {
                    player.mastery_upgrades.buyables[i] = 0
                }
                player.upgrades.buyables[i] = 0
            }
            rarity.forEach(rariti => {
                player.rarities[rariti].current = 0
            });
            mastery_rarity.forEach(rariti => {
                player.mastery_rarities[rariti].current = 0
            });
            player.rolls = 0
            player.mastery_rolls = 0

            player.prestige.dice += UPGS.prestige.singles.single13.effect()
            player.prestige.resets++
            player.time.current_prestige = new Date().getTime()
        }
    },
    dice: {
        roll() {
            if (player.cooldowns.prestige_rolls == 0 && player.prestige.dice > 0){
                player.cooldowns.prestige_rolls += 3600000*UPGS.prestige.singles.single5.effect()*UPGS.prestige.singles.single15.effect()
        
                PRESTIGE.dice.auto_roll()
            }
        },
        auto_roll() {
            if (player.prestige.dice > 0) {
                player.prestige.rolls++
                player.prestige.dice--
        
            let number = Math.floor(Math.random() * mastery_max);
            let lowerBound = 0;
            
            for (let rarity in PRESTIGE.rarities) {
                let upperBound = lowerBound + PRESTIGE.rarities[rarity].chance();
    
                if (number >= lowerBound && number < upperBound) {
                    const index = Object.keys(PRESTIGE.rarities).indexOf(rarity)
    
                    const actual_rarity = Object.keys(PRESTIGE.rarities)[index]
                    player.prestige.rarities[actual_rarity].current += 1
                    player.prestige.rarities[actual_rarity].total += 1
                    if (player.prestige.rarities[actual_rarity].first_roll == 0) player.prestige.rarities[actual_rarity].first_roll = player.prestige.rolls

                    if (actual_rarity != 'none') {
                        text_disappear[0] = 15000
                        ELS.rarity_text[0].style.opacity = 1
                        ELS.rarity_text[0].innerHTML = `You rolled <span class=\"rarityText\" style=\"color: var(--${rarity})\">${rarity.charAt(0).toUpperCase() + rarity.slice(1).replace(/_/g, ' ')}</span> with (1/${formatNumber(PRESTIGE.max/PRESTIGE.rarities[rarity].chance())}) chance at ${formatNumber(player.prestige.rolls)}th roll`
                    }
                }
            lowerBound = upperBound; // Сдвигаем нижнюю границу для следующей редкости
            }
            }
        },
        rollCooldown() {
            const isMobile = (window.outerWidth <= 768)
            if (player.cooldowns.prestige_rolls > 0) {
                player.cooldowns.prestige_rolls -= tick
                document.getElementById('cdText3').textContent = player.cooldowns.prestige_rolls > 0 ? `${(player.cooldowns.prestige_rolls/1000).toFixed(2)}s` : ''
                if (player.cooldowns.prestige_rolls > 0) {
                    if (isMobile) document.getElementById('rollCooldownProgress3').style.width = (player.cooldowns.prestige_rolls/3600000/UPGS.prestige.singles.single5.effect()/UPGS.prestige.singles.single15.effect())*120 + 'px'  
                    else document.getElementById('rollCooldownProgress3').style.width = (player.cooldowns.prestige_rolls/3600000/UPGS.prestige.singles.single5.effect()/UPGS.prestige.singles.single15.effect())*80 + 'px'
                }  
                else document.getElementById('rollCooldownProgress3').style.width = 0
            }
            else {
                player.cooldowns.prestige_rolls = 0
            }
        }
    }
}