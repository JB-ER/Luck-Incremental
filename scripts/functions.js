function formatNumber(number, type='', n=0, m=0) {
    if (typeof number == "string") return ''
    else if (number < 10 && number >= 0 && type == 'chance')
        return number.toFixed(1)
    else if (number < m && type == 'custom')
        return number.toFixed(n)
    else if (number < 10 && number >= 0)
        return number.toFixed(0)
    else if (number >= 10 && number < 1000000)
        return (number.toFixed(0)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else if (number >= 1000000)
        return ((number.toExponential(2))).replace("+", "");
}

function selectTab(argument, isFlex) {
    const tabsToHide = ['rollScreen', 'upgradesScreen', 'craftScreen', 'decraftScreen', 'statsScreen', 'settingsScreen', 'raritiesScreen', 'prestigeScreen']
    const isMobile = (window.outerWidth <= 768)
    for (const tabId of tabsToHide) {
        const tab = document.getElementById(tabId);
        if (tab) {
            tab.style.display = "none";
        }
    }
    let arg = document.getElementById(argument)
    let rarity_arg = document.getElementById('raritiesScreen')
    const halfElement = document.querySelector('.half');
    if (argument == 'rollScreen' || argument == 'upgradesScreen' || argument == 'craftScreen' || argument == 'decraftScreen' || argument == 'prestigeScreen') {
        rarity_arg.style.display = "flex"
        halfElement.style.width = '50%'
        if (isMobile) {
            halfElement.style.height = '35vh'
        }
    }
    else {
        halfElement.style.width = '100%'
        if (isMobile) {
            halfElement.style.height = '80vh'
        }
    }
    if (!isFlex) arg.style.display = "block"
    else arg.style.display = "flex"
}

function selectSubTab(argument, isFlex, group) {
    const tabsToHide1 = ['commonUpgrades', 'masteryUpgrades']
    const tabsToHide2 = ['gameStatsScreen', 'raritiesStatsScreen', 'aboutStatsScreen']
    const tabsToHide3 = ['commonRarities', 'masteryRarities', 'prestigeRarities']
    const tabsToHide4 = ['prestigeReset', 'prestigeUpgrades']
    switch (group) {
        case 'upgrades':
            for (const tabId of tabsToHide1) {
                const tab = document.getElementById(tabId);
                if (tab) {
                    tab.style.display = "none";
                }
            }
            break;
        case 'stats':
            for (const tabId of tabsToHide2) {
                const tab = document.getElementById(tabId);
                if (tab) {
                    tab.style.display = "none";
                }
            }
            break;
        case 'rarities':
            for (const tabId of tabsToHide3) {
                const tab = document.getElementById(tabId);
                if (tab) {
                    tab.style.display = "none";
                }
            }
            break;
        case 'prestige':
            for (const tabId of tabsToHide4) {
                const tab = document.getElementById(tabId);
                if (tab) {
                    tab.style.display = "none";
                }
            }
            break;
        default:
            break;
    }
    let arg = document.getElementById(argument)
    if (!isFlex) arg.style.display = "block"
    else arg.style.display = "flex"
}

document.getElementsByClassName('buyableUpgrade')[0].addEventListener("click", function() {
    UPGS.common.buyables.buyable1.buy()
})  
document.getElementsByClassName('buyableUpgrade')[1].addEventListener("click", function() {
    UPGS.common.buyables.buyable2.buy()
})  
document.getElementsByClassName('buyableUpgrade')[2].addEventListener("click", function() {
    UPGS.common.buyables.buyable3.buy()
})  
document.getElementsByClassName('buyableUpgrade')[3].addEventListener("click", function() {
    UPGS.common.buyables.buyable4.buy()
})  
document.getElementsByClassName('buyableUpgrade')[4].addEventListener("click", function() {
    UPGS.common.buyables.buyable5.buy()
})  
document.getElementsByClassName('buyableUpgrade')[5].addEventListener("click", function() {
    UPGS.common.buyables.buyable6.buy()
})  
document.getElementsByClassName('buyableUpgrade')[6].addEventListener("click", function() {
    UPGS.common.buyables.buyable7.buy()
})  
document.getElementsByClassName('buyableUpgrade')[7].addEventListener("click", function() {
    UPGS.common.buyables.buyable8.buy()
})  
document.getElementsByClassName('buyableUpgrade')[8].addEventListener("click", function() {
    UPGS.common.buyables.buyable9.buy()
})  
document.getElementsByClassName('buyableUpgrade')[9].addEventListener("click", function() {
    UPGS.common.buyables.buyable10.buy()
})  
document.getElementsByClassName('buyableUpgrade')[10].addEventListener("click", function() {
    UPGS.common.buyables.buyable11.buy()
})  
document.getElementsByClassName('buyableUpgrade')[11].addEventListener("click", function() {
    UPGS.common.buyables.buyable12.buy()
})  

document.getElementsByClassName('masteryBuyableUpgrade')[0].addEventListener("click", function() {
    UPGS.mastery.buyables.buyable1.buy()
})  
document.getElementsByClassName('masteryBuyableUpgrade')[1].addEventListener("click", function() {
    UPGS.mastery.buyables.buyable2.buy()
})  
document.getElementsByClassName('masteryBuyableUpgrade')[2].addEventListener("click", function() {
    UPGS.mastery.buyables.buyable3.buy()
})  
document.getElementsByClassName('masteryBuyableUpgrade')[3].addEventListener("click", function() {
    UPGS.mastery.buyables.buyable4.buy()
})  
document.getElementsByClassName('masteryBuyableUpgrade')[4].addEventListener("click", function() {
    UPGS.mastery.buyables.buyable5.buy()
})  
document.getElementsByClassName('masteryBuyableUpgrade')[5].addEventListener("click", function() {
    UPGS.mastery.buyables.buyable6.buy()
})  
document.getElementsByClassName('masteryBuyableUpgrade')[6].addEventListener("click", function() {
    UPGS.mastery.buyables.buyable7.buy()
})  
document.getElementsByClassName('masteryBuyableUpgrade')[7].addEventListener("click", function() {
    UPGS.mastery.buyables.buyable8.buy()
})  
document.getElementsByClassName('masteryBuyableUpgrade')[8].addEventListener("click", function() {
    UPGS.mastery.buyables.buyable9.buy()
})  

document.getElementsByClassName('prestigeSingleUpgrade')[0].addEventListener("click", function() {
    UPGS.prestige.singles.single1.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[1].addEventListener("click", function() {
    UPGS.prestige.singles.single2.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[2].addEventListener("click", function() {
    UPGS.prestige.singles.single3.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[3].addEventListener("click", function() {
    UPGS.prestige.singles.single4.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[4].addEventListener("click", function() {
    UPGS.prestige.singles.single5.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[5].addEventListener("click", function() {
    UPGS.prestige.singles.single6.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[6].addEventListener("click", function() {
    UPGS.prestige.singles.single7.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[7].addEventListener("click", function() {
    UPGS.prestige.singles.single8.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[8].addEventListener("click", function() {
    UPGS.prestige.singles.single9.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[9].addEventListener("click", function() {
    UPGS.prestige.singles.single10.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[10].addEventListener("click", function() {
    UPGS.prestige.singles.single11.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[11].addEventListener("click", function() {
    UPGS.prestige.singles.single12.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[12].addEventListener("click", function() {
    UPGS.prestige.singles.single13.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[13].addEventListener("click", function() {
    UPGS.prestige.singles.single14.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[14].addEventListener("click", function() {
    UPGS.prestige.singles.single15.buy()
})  
document.getElementsByClassName('prestigeSingleUpgrade')[15].addEventListener("click", function() {
    UPGS.prestige.singles.single16.buy()
})  


function hidePopup() {
    windowGame.style.display = "none";
    myPopupBackdrop1.style.display = "none";
    gameHelpWindow.style.display = "none"
    changelogWindow.style.display = "none"
    offlineWindow.style.display = 'none'
}

function hidePopup2() {
    myPopupBackdrop2.style.display = "none";
    offlineWindow.style.display = 'none'
}

myPopupBackdrop1.addEventListener("click", hidePopup);

function openWindow(arg, isFlex) {
    const descsToHide = ['confirmationButtons']
    for (const descId of descsToHide) {
        const desc = document.getElementById(descId);
        if (desc) {
            desc.style.display = "none";
        }
    }
    if (!isFlex) windowGame.style.display = "block"
    else windowGame.style.display = "flex"
    if (arg == 'hardReset') {
        confirmationButtons.style.display = "flex"; windowTitleDiv.style.display = 'block' 
        yesHR.style.display = "block"
    }
    myPopupBackdrop1.style.display = "flex";
}

function reloadPage() {
    location.reload()
    hardReset()
}

function reloadPage2() {
    location.reload()
}

function howToPlay(){
    gameHelpWindow.style.display = "flex"
    myPopupBackdrop1.style.display = "flex";
}

function openChangelog(){
    changelogWindow.style.display = "flex"
    myPopupBackdrop1.style.display = "flex";
}

function startGame() {
    setInterval(() => {
        updateTick()
    }, 33);
}

function offline_prod(){ //10000 ticks per second = 1000 per 100ms = 100 per 10ms
    offlineWindow.style.display = "flex"
    myPopupBackdrop2.style.display = "flex";
    UNL.display.check()
    let to_roll = UPGS.common.buyables.buyable9.effect()

    OFFLINE.interval = (new Date().getTime() - player.time.saved)
    OFFLINE.ticks = Math.min(OFFLINE.interval/50, values[slider.value]) // 50000
    ticks = Math.min(OFFLINE.interval/50, values[slider.value]) // 50000
    OFFLINE.completed_ticks = 0
    let offline_rolls
    player.time.current = new Date().getTime()
    player.time.saved = new Date().getTime()

    window.speedUpOffline = function() {
        if (OFFLINE.ticks >= 100000) {
            ticks /= 2
            OFFLINE.ticks /=2
        }
    }

    window.skipOffline = function() {
        OFFLINE.ticks = 0
    }

    let offline_interval = setInterval(() => {
        let received_ticks = Math.min(533, OFFLINE.ticks)
        let slower = player.prestige.upgrades.singles.includes(13) ? 2 : 5
        OFFLINE.ticks -= received_ticks
        offline_rolls = Math.max(Math.floor(received_ticks/slower/2/UPGS.common.buyables.buyable4.effect()), 0)
        OFFLINE.completed_ticks += Math.min(533, OFFLINE.ticks)
        runRollDev(offline_rolls)
        OFFLINE.completed_rolls += Math.floor(offline_rolls)
        offlineProd.innerHTML = `Loading: ${formatNumber((OFFLINE.completed_ticks/ticks)*100)}% <br> Ticks: ${formatNumber(OFFLINE.completed_ticks)}/${formatNumber(ticks)}`
        if (OFFLINE.ticks < 100000) document.getElementById('speedUpOfflineButton').disabled = true
        if (OFFLINE.completed_ticks >= ticks || OFFLINE.ticks <= 0) {
            clearInterval(offline_interval)
            offlineButtons.style.display = 'none'
            offlineProd.innerHTML = `Welcome back! <br> You were offline ${formatNumber(OFFLINE.interval/1000)} seconds <br> And did: <br> ${OFFLINE.completed_rolls*to_roll} rolls!`
            startGame()
            closeOffline.disabled = false
        }
    }, 33);
}

function showHelpPage(help, helpName) {
    ELS.helpDesc.innerHTML = help;
    helpPageTitle.innerHTML = helpName
}

function showChangelogPage(changelog, changelogName) {
    ELS.changelogDesc.innerHTML = changelog;
    changelogTitle2.innerHTML = changelogName
}

function craft(rariti1, rariti2, multiplier) {
    if (player.rarities[rariti1].current >= 3*multiplier) {
        player.rarities[rariti1].current -= 3*multiplier
        player.rarities[rariti2].current += multiplier
    }
}

function decraft(rariti1, rariti2, multiplier) {
    if (player.rarities[rariti2].current >= 2*multiplier) {
        player.rarities[rariti2].current -= 2*multiplier
        player.rarities[rariti1].current += 3*multiplier
    }
}


function showNotification(text = "Notification", color = "white", width = "150px", duration = 3000) {
    // Создаём элемент уведомления
    const notification = document.createElement("div");
    notification.textContent = text;
    notification.className = "custom-notification";
    
    // Применяем стили из аргументов
    notification.style.backgroundColor = color;
    notification.style.width = width;

    // Добавляем элемент в body
    document.body.appendChild(notification);

    // Анимация появления из правого края
    setTimeout(() => {
        notification.style.right = "-10px";
    }, 100); // Небольшая задержка для корректного перехода

    // Убираем уведомление через определённое время
    setTimeout(() => {
        notification.style.right = "-500px"; // Анимация скрытия
        setTimeout(() => {
            notification.remove(); // Удаляем из DOM
        }, 1000); // Подождём, пока закончится анимация
    }, duration);
}

function switchAutosave() {
    temp.time.auto_save = 0
    if (player.settings.autosave_enabled == 'enabled') {
        player.settings.autosave_enabled = 'disabled'
    }
    else player.settings.autosave_enabled = 'enabled'
}

const slider = document.getElementById("customRange");
const output = document.getElementById("outputValue");

const values = [1000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];

slider.addEventListener("input", () => {
    output.textContent = values[slider.value];
    player.settings.slider_value = slider.value
});

function makeCapital(text){
    return text.charAt(0).toUpperCase() + text.slice(1).replace(/_/g, ' ')
}