import '/node_modules/i18next/i18next.min.js'

const responseEn = await fetch('/locales/en.json');
// const responseRu = await fetch('/locales/ru.json');
const translationsEnData = await responseEn.json();
// const translationsRuData = await responseRu.json();
await i18next.init({
    lng: language,
    resources: {
        en: { translation: translationsEnData },
        // ru: { translation: translationsRuData }
    },
    interpolation: {
        escapeValue: false,
    }
    });

// const loadTranslationsFromChangeLanguage = async () => {
// try {

// }
// catch (error) {
//     console.error('Ошибка загрузки и инициализации переводов:', error);
// }
// }

// loadTranslationsFromChangeLanguage()

setInterval(() => {
    loadTranslations()
}, 50);

// Загрузка переводов
function loadTranslations() {
    document.getElementsByClassName('buyableUpgrade')[0].innerHTML = i18next.t(`buyableUpgrade1.${player.upgrades.buyables[1]}`, {
        color1: rarity[UPGS.buyable1.rarity[player.upgrades.buyables[1]][0]],
        color2: rarity[UPGS.buyable1.rarity[player.upgrades.buyables[1]][1]],
        color3: rarity[UPGS.buyable1.rarity[player.upgrades.buyables[1]][2]],
        cost1: UPGS.buyable1.cost[player.upgrades.buyables[1]][0],
        cost2: UPGS.buyable1.cost[player.upgrades.buyables[1]][1],
        cost3: UPGS.buyable1.cost[player.upgrades.buyables[1]][2],
        rarity1: rarity[UPGS.buyable1.rarity[player.upgrades.buyables[1]][0]].charAt(0).toUpperCase() + rarity[UPGS.buyable1.rarity[player.upgrades.buyables[1]][0]].slice(1).replace(/_/g, ' '),
        rarity2: rarity[UPGS.buyable1.rarity[player.upgrades.buyables[1]][1]].charAt(0).toUpperCase() + rarity[UPGS.buyable1.rarity[player.upgrades.buyables[1]][1]].slice(1).replace(/_/g, ' '),
        rarity3: rarity[UPGS.buyable1.rarity[player.upgrades.buyables[1]][2]].charAt(0).toUpperCase() + rarity[UPGS.buyable1.rarity[player.upgrades.buyables[1]][2]].slice(1).replace(/_/g, ' '),
    });
    document.getElementsByClassName('buyableUpgrade')[1].innerHTML = i18next.t(`buyableUpgrade2.${player.upgrades.buyables[2]}`, {
        color1: rarity[UPGS.buyable2.rarity[player.upgrades.buyables[2]][0]],
        color2: rarity[UPGS.buyable2.rarity[player.upgrades.buyables[2]][1]],
        color3: rarity[UPGS.buyable2.rarity[player.upgrades.buyables[2]][2]],
        cost1: UPGS.buyable2.cost[player.upgrades.buyables[2]][0],
        cost2: UPGS.buyable2.cost[player.upgrades.buyables[2]][1],
        cost3: UPGS.buyable2.cost[player.upgrades.buyables[2]][2],
        rarity1: rarity[UPGS.buyable2.rarity[player.upgrades.buyables[2]][0]].charAt(0).toUpperCase() + rarity[UPGS.buyable2.rarity[player.upgrades.buyables[2]][0]].slice(1).replace(/_/g, ' '),
        rarity2: rarity[UPGS.buyable2.rarity[player.upgrades.buyables[2]][1]].charAt(0).toUpperCase() + rarity[UPGS.buyable2.rarity[player.upgrades.buyables[2]][1]].slice(1).replace(/_/g, ' '),
        rarity3: rarity[UPGS.buyable2.rarity[player.upgrades.buyables[2]][2]].charAt(0).toUpperCase() + rarity[UPGS.buyable2.rarity[player.upgrades.buyables[2]][2]].slice(1).replace(/_/g, ' '),
    });
    document.getElementsByClassName('buyableUpgrade')[2].innerHTML = i18next.t(`buyableUpgrade3.${player.upgrades.buyables[3]}`, {
        color1: rarity[UPGS.buyable3.rarity[player.upgrades.buyables[3]][0]],
        color2: rarity[UPGS.buyable3.rarity[player.upgrades.buyables[3]][1]],
        color3: rarity[UPGS.buyable3.rarity[player.upgrades.buyables[3]][2]],
        cost1: UPGS.buyable3.cost[player.upgrades.buyables[3]][0],
        cost2: UPGS.buyable3.cost[player.upgrades.buyables[3]][1],
        cost3: UPGS.buyable3.cost[player.upgrades.buyables[3]][2],
        rarity1: rarity[UPGS.buyable3.rarity[player.upgrades.buyables[3]][0]].charAt(0).toUpperCase() + rarity[UPGS.buyable3.rarity[player.upgrades.buyables[3]][0]].slice(1).replace(/_/g, ' '),
        rarity2: rarity[UPGS.buyable3.rarity[player.upgrades.buyables[3]][1]].charAt(0).toUpperCase() + rarity[UPGS.buyable3.rarity[player.upgrades.buyables[3]][1]].slice(1).replace(/_/g, ' '),
        rarity3: rarity[UPGS.buyable3.rarity[player.upgrades.buyables[3]][2]].charAt(0).toUpperCase() + rarity[UPGS.buyable3.rarity[player.upgrades.buyables[3]][2]].slice(1).replace(/_/g, ' '),
    });
    document.getElementsByClassName('buyableUpgrade')[3].innerHTML = i18next.t(`buyableUpgrade4.${player.upgrades.buyables[4]}`, {
        color1: rarity[UPGS.buyable4.rarity[player.upgrades.buyables[4]][0]],
        color2: rarity[UPGS.buyable4.rarity[player.upgrades.buyables[4]][1]],
        color3: rarity[UPGS.buyable4.rarity[player.upgrades.buyables[4]][2]],
        cost1: UPGS.buyable4.cost[player.upgrades.buyables[4]][0],
        cost2: UPGS.buyable4.cost[player.upgrades.buyables[4]][1],
        cost3: UPGS.buyable4.cost[player.upgrades.buyables[4]][2],
        rarity1: rarity[UPGS.buyable4.rarity[player.upgrades.buyables[4]][0]].charAt(0).toUpperCase() + rarity[UPGS.buyable4.rarity[player.upgrades.buyables[4]][0]].slice(1).replace(/_/g, ' '),
        rarity2: rarity[UPGS.buyable4.rarity[player.upgrades.buyables[4]][1]].charAt(0).toUpperCase() + rarity[UPGS.buyable4.rarity[player.upgrades.buyables[4]][1]].slice(1).replace(/_/g, ' '),
        rarity3: rarity[UPGS.buyable4.rarity[player.upgrades.buyables[4]][2]].charAt(0).toUpperCase() + rarity[UPGS.buyable4.rarity[player.upgrades.buyables[4]][2]].slice(1).replace(/_/g, ' '),
    });
    document.getElementsByClassName('buyableUpgrade')[4].innerHTML = i18next.t(`buyableUpgrade5.${player.upgrades.buyables[5]}`, {
        color1: rarity[UPGS.buyable5.rarity[player.upgrades.buyables[5]][0]],
        color2: rarity[UPGS.buyable5.rarity[player.upgrades.buyables[5]][1]],
        color3: rarity[UPGS.buyable5.rarity[player.upgrades.buyables[5]][2]],
        cost1: UPGS.buyable5.cost[player.upgrades.buyables[5]][0],
        cost2: UPGS.buyable5.cost[player.upgrades.buyables[5]][1],
        cost3: UPGS.buyable5.cost[player.upgrades.buyables[5]][2],
        rarity1: rarity[UPGS.buyable5.rarity[player.upgrades.buyables[5]][0]].charAt(0).toUpperCase() + rarity[UPGS.buyable5.rarity[player.upgrades.buyables[5]][0]].slice(1).replace(/_/g, ' '),
        rarity2: rarity[UPGS.buyable5.rarity[player.upgrades.buyables[5]][1]].charAt(0).toUpperCase() + rarity[UPGS.buyable5.rarity[player.upgrades.buyables[5]][1]].slice(1).replace(/_/g, ' '),
        rarity3: rarity[UPGS.buyable5.rarity[player.upgrades.buyables[5]][2]].charAt(0).toUpperCase() + rarity[UPGS.buyable5.rarity[player.upgrades.buyables[5]][2]].slice(1).replace(/_/g, ' '),
    });
    document.getElementsByClassName('buyableUpgrade')[5].innerHTML = i18next.t(`buyableUpgrade6.${player.upgrades.buyables[6]}`, {
        color1: rarity[UPGS.buyable6.rarity[player.upgrades.buyables[6]][0]],
        color2: rarity[UPGS.buyable6.rarity[player.upgrades.buyables[6]][1]],
        color3: rarity[UPGS.buyable6.rarity[player.upgrades.buyables[6]][2]],
        cost1: UPGS.buyable6.cost[player.upgrades.buyables[6]][0],
        cost2: UPGS.buyable6.cost[player.upgrades.buyables[6]][1],
        cost3: UPGS.buyable6.cost[player.upgrades.buyables[6]][2],
        rarity1: rarity[UPGS.buyable6.rarity[player.upgrades.buyables[6]][0]].charAt(0).toUpperCase() + rarity[UPGS.buyable6.rarity[player.upgrades.buyables[6]][0]].slice(1).replace(/_/g, ' '),
        rarity2: rarity[UPGS.buyable6.rarity[player.upgrades.buyables[6]][1]].charAt(0).toUpperCase() + rarity[UPGS.buyable6.rarity[player.upgrades.buyables[6]][1]].slice(1).replace(/_/g, ' '),
        rarity3: rarity[UPGS.buyable6.rarity[player.upgrades.buyables[6]][2]].charAt(0).toUpperCase() + rarity[UPGS.buyable6.rarity[player.upgrades.buyables[6]][2]].slice(1).replace(/_/g, ' '),
    });

    for (let rarity in rarities) {
            document.getElementsByClassName('rarityCount')[Object.keys(rarities).indexOf(rarity)].textContent = `${rarity.charAt(0).toUpperCase() + rarity.slice(1).replace(/_/g, ' ')}: ${player.rarities[rarity].current} (1/${formatNumber(max/rarities[rarity].chance())})`;
        }
    document.getElementById('rollsCount').textContent = `Rolls: ${player.rolls}`;

    text.help.start = i18next.t('startHelpDescription');
    helpTitle.innerHTML = i18next.t('helpTitleText');

    for (let i = 1; i <= 5; i++) {
        text.help[i] = i18next.t(`help${i}`);
    }

    statistics.innerHTML = i18next.t(`statistics`, {
        time: ((player.time.current - player.time.start)/1000).toFixed(0),
        rolls: player.rolls,
        start1: player.time.start1,
        start2: player.time.start2
    });
}