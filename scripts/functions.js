function formatNumber(number) {
    if (number < 10 && number > 0 && number != number.toFixed(0))
        return number.toFixed(1)
    else (number >= 10)
        return number.toFixed(0)
}

function selectTab(argument, isFlex) {
    const tabsToHide = ['rollScreen', 'upgradesScreen', '???Screen', 'statsScreen', 'settingsScreen', 'raritiesScreen']
    for (const tabId of tabsToHide) {
        const tab = document.getElementById(tabId);
        if (tab) {
            tab.style.display = "none";
        }
    }
    let arg = document.getElementById(argument)
    let rarity_arg = document.getElementById('raritiesScreen')
    const halfElement = document.querySelector('.half');
    if (argument == 'rollScreen' || argument == 'upgradesScreen' || argument == '???Screen') {
        rarity_arg.style.display = "flex"
        halfElement.style.width = '50%'
    }
    else halfElement.style.width = '100%'
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