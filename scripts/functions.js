function formatNumber(number, type='') {
    if (typeof number == "string") return ''
    else if (number < 10 && number >= 0 && type == 'chance')
        return number.toFixed(1)
    else if (number < 10 && number >= 0)
        return number.toFixed(0)
    else if (number >= 10 && number < 1000000)
        return (number.toFixed(0)).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    else if (number >= 1000000)
        return ((number.toExponential(2))).replace("+", "");
}

function selectTab(argument, isFlex) {
    const tabsToHide = ['rollScreen', 'upgradesScreen', 'craftScreen', 'decraftScreen', 'statsScreen', 'settingsScreen', 'raritiesScreen']
    for (const tabId of tabsToHide) {
        const tab = document.getElementById(tabId);
        if (tab) {
            tab.style.display = "none";
        }
    }
    let arg = document.getElementById(argument)
    let rarity_arg = document.getElementById('raritiesScreen')
    const halfElement = document.querySelector('.half');
    if (argument == 'rollScreen' || argument == 'upgradesScreen' || argument == 'craftScreen' || argument == 'decraftScreen') {
        rarity_arg.style.display = "flex"
        halfElement.style.width = '50%'
    }
    else halfElement.style.width = '100%'
    if (!isFlex) arg.style.display = "block"
    else arg.style.display = "flex"
}

function selectSubTab(argument, isFlex) {
    const tabsToHide = ['gameStatsScreen', 'raritiesStatsScreen', 'aboutStatsScreen']
    for (const tabId of tabsToHide) {
        const tab = document.getElementById(tabId);
        if (tab) {
            tab.style.display = "none";
        }
    }
    let arg = document.getElementById(argument)
    if (!isFlex) arg.style.display = "block"
    else arg.style.display = "flex"
}

document.getElementsByClassName('buyableUpgrade')[0].addEventListener("click", function() {
    UPGS.buyable1.buy()
})  
document.getElementsByClassName('buyableUpgrade')[1].addEventListener("click", function() {
    UPGS.buyable2.buy()
})  
document.getElementsByClassName('buyableUpgrade')[2].addEventListener("click", function() {
    UPGS.buyable3.buy()
})  
document.getElementsByClassName('buyableUpgrade')[3].addEventListener("click", function() {
    UPGS.buyable4.buy()
})  
document.getElementsByClassName('buyableUpgrade')[4].addEventListener("click", function() {
    UPGS.buyable5.buy()
})  
document.getElementsByClassName('buyableUpgrade')[5].addEventListener("click", function() {
    UPGS.buyable6.buy()
})  
document.getElementsByClassName('buyableUpgrade')[6].addEventListener("click", function() {
    UPGS.buyable7.buy()
})  
document.getElementsByClassName('buyableUpgrade')[7].addEventListener("click", function() {
    UPGS.buyable8.buy()
})  
document.getElementsByClassName('buyableUpgrade')[8].addEventListener("click", function() {
    UPGS.buyable9.buy()
})  

function hidePopup() {
    windowGame.style.display = "none";
    myPopupBackdrop1.style.display = "none";
    gameHelpWindow.style.display = "none"
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

function showHelpPage(help, helpName) {
    ELS.helpDesc.innerHTML = help;
    helpPageTitle.innerHTML = helpName
}

function openChangelog() {
    window.open('./changelog.txt', '_blank');
}

function craft(rariti1, rariti2, multiplier) {
    if (player.rarities[rariti1].current >= 3*multiplier) {
        player.rarities[rariti1].current -= 3*multiplier
        player.rarities[rariti2].current += multiplier
    }
}

function decraft(rariti1, rariti2, multiplier) {
    if (player.rarities[rariti2].current >= multiplier) {
        player.rarities[rariti2].current -= multiplier
        player.rarities[rariti1].current += 2*multiplier
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
    player.time.auto_save = 0
    if (player.settings.autosave_enabled == 'enabled') {
        player.settings.autosave_enabled = 'disabled'
    }
    else player.settings.autosave_enabled = 'enabled'
}

function calculate_roll() {
    let multi_rolls = 1 
    switch (true) {
        case player.upgrades.buyables[9] >= 8:
            multi_rolls = 100
            break;
        case player.upgrades.buyables[9] >= 7:
            multi_rolls = 75
            break;
        case player.upgrades.buyables[9] >= 6:
            multi_rolls = 50
            break;
        case player.upgrades.buyables[9] >= 5:
            multi_rolls = 35
            break;
        case player.upgrades.buyables[9] >= 4:
            multi_rolls = 20
            break;
        case player.upgrades.buyables[9] >= 3:
            multi_rolls = 10
            break;
        case player.upgrades.buyables[9] >= 2:
            multi_rolls = 5
            break;
        case player.upgrades.buyables[9] >= 1:
            multi_rolls = 3
            break;
        default:
            to_roll = 1
    }
    return multi_rolls
}