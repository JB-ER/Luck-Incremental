import '../node_modules/i18next/i18next.min.js'

const responseEn = await fetch('./scripts/en.json');
// const responseRu = await fetch('../locales/ru.json');
const translationsEnData = await responseEn.json();
// const translationsRuData = await responseRu.json();
await i18next.init({
    lng: player.language,
    resources: {
        en: { translation: translationsEnData },
        // ru: { translation: translationsRuData }
    },
    interpolation: {
        escapeValue: false,
    }
    });


setInterval(() => {
    loadTranslations()
}, 50);

// Загрузка переводов
function loadTranslations() {
    let buyables = document.getElementsByClassName('buyableUpgrade'), mastery_buyables = document.getElementsByClassName('masteryBuyableUpgrade'), prestige_singles = document.getElementsByClassName('prestigeSingleUpgrade')
    for (let i = 0; i < buyables.length; i++) {
        const index = i+1
        let number_loop = player.upgrades.buyables[index]
        if (player.upgrades.buyables[6] == 0 && player.upgrades.buyables[index] >= 5) 
            number_loop = 12
        else if (player.mastery_upgrades.buyables[6] < 2 && player.upgrades.buyables[index] >= 8) {
            number_loop = 11
        }
        buyables[i].innerHTML = i18next.t(`buyableUpgrade${index}.${number_loop}`, {
            color1: rarity[UPGS.common.buyables[`buyable${index}`].rarity[player.upgrades.buyables[index]][0]],
            color2: rarity[UPGS.common.buyables[`buyable${index}`].rarity[player.upgrades.buyables[index]][1]],
            color3: rarity[UPGS.common.buyables[`buyable${index}`].rarity[player.upgrades.buyables[index]][2]],
            effect2: formatNumber(UPGS.common.buyables[`buyable${index}`].text_effect1(), 'custom', 2, 10),
            effect: formatNumber(UPGS.common.buyables[`buyable${index}`].text_effect2(), 'custom', 2, 10),
            cost1: formatNumber(UPGS.common.buyables[`buyable${index}`].cost[player.upgrades.buyables[index]][0]),
            cost2: formatNumber(UPGS.common.buyables[`buyable${index}`].cost[player.upgrades.buyables[index]][1]),
            cost3: formatNumber(UPGS.common.buyables[`buyable${index}`].cost[player.upgrades.buyables[index]][2]),
            rarity1: rarity[UPGS.common.buyables[`buyable${index}`].rarity[player.upgrades.buyables[index]][0]].charAt(0).toUpperCase() + rarity[UPGS.common.buyables[`buyable${index}`].rarity[player.upgrades.buyables[index]][0]].slice(1).replace(/_/g, ' '),
            rarity2: rarity[UPGS.common.buyables[`buyable${index}`].rarity[player.upgrades.buyables[index]][1]].charAt(0).toUpperCase() + rarity[UPGS.common.buyables[`buyable${index}`].rarity[player.upgrades.buyables[index]][1]].slice(1).replace(/_/g, ' '),
            rarity3: rarity[UPGS.common.buyables[`buyable${index}`].rarity[player.upgrades.buyables[index]][2]].charAt(0).toUpperCase() + rarity[UPGS.common.buyables[`buyable${index}`].rarity[player.upgrades.buyables[index]][2]].slice(1).replace(/_/g, ' '),
        })
    }
    for (let i = 0; i < mastery_buyables.length; i++) {
        const index = i+1
        let number_loop = player.mastery_upgrades.buyables[index]
        // player.mastery_upgrades.buyables[6] == 0 && player.mastery_upgrades.buyables[index] >= 3 ? number_loop = 4 : number_loop = player.mastery_upgrades.buyables[index]
        mastery_buyables[i].innerHTML = i18next.t(`masteryBuyableUpgrade${index}.${number_loop}`, {
            color1: mastery_rarity[UPGS.mastery.buyables[`buyable${index}`].mastery_rarity[player.mastery_upgrades.buyables[index]][0]],
            color2: rarity[UPGS.mastery.buyables[`buyable${index}`].rarity[player.mastery_upgrades.buyables[index]][1]],
            color3: rarity[UPGS.mastery.buyables[`buyable${index}`].rarity[player.mastery_upgrades.buyables[index]][2]],
            cost1: formatNumber(UPGS.mastery.buyables[`buyable${index}`].cost[player.mastery_upgrades.buyables[index]][0]),
            cost2: formatNumber(UPGS.mastery.buyables[`buyable${index}`].cost[player.mastery_upgrades.buyables[index]][1]),
            cost3: formatNumber(UPGS.mastery.buyables[`buyable${index}`].cost[player.mastery_upgrades.buyables[index]][2]),
            rarity1: mastery_rarity[UPGS.mastery.buyables[`buyable${index}`].mastery_rarity[player.mastery_upgrades.buyables[index]][0]].charAt(0).toUpperCase() + mastery_rarity[UPGS.mastery.buyables[`buyable${index}`].mastery_rarity[player.mastery_upgrades.buyables[index]][0]].slice(1).replace(/_/g, ' '),
            rarity2: rarity[UPGS.mastery.buyables[`buyable${index}`].rarity[player.mastery_upgrades.buyables[index]][1]].charAt(0).toUpperCase() + rarity[UPGS.mastery.buyables[`buyable${index}`].rarity[player.mastery_upgrades.buyables[index]][1]].slice(1).replace(/_/g, ' '),
            rarity3: rarity[UPGS.mastery.buyables[`buyable${index}`].rarity[player.mastery_upgrades.buyables[index]][2]].charAt(0).toUpperCase() + rarity[UPGS.mastery.buyables[`buyable${index}`].rarity[player.mastery_upgrades.buyables[index]][2]].slice(1).replace(/_/g, ' '),
        })
    }
    for (let j = 1; j <= 4; j++) {
        for (let i = 0; i < 4; i++) {
            const index = (i+1)+4*(j-1), id = j*10+(i+1)
            let number_loop = +player.prestige.upgrades.singles.includes(id)
            prestige_singles[index-1].innerHTML = i18next.t(`prestigeSingleUpgrade${index}.${number_loop}`, {
                color1: prestige_rarity[UPGS.prestige.singles[`single${index}`].rarity()],
                cost1: formatNumber(UPGS.prestige.singles[`single${index}`].cost()),
                rarity1: prestige_rarity[UPGS.prestige.singles[`single${index}`].rarity()].charAt(0).toUpperCase() + prestige_rarity[UPGS.prestige.singles[`single${index}`].rarity()].slice(1).replace(/_/g, ' '),
            })
        }
    }

    for (let rarity in rarities) {
            document.getElementsByClassName('rarityCount')[Object.keys(rarities).indexOf(rarity)].textContent = `${rarity.charAt(0).toUpperCase() + rarity.slice(1).replace(/_/g, ' ')}: ${formatNumber(player.rarities[rarity].current)} (1/${formatNumber(max/rarities[rarity].chance(), 'chance')})`;

            document.getElementsByClassName('name')[Object.keys(rarities).indexOf(rarity)].textContent = `${rarity.charAt(0).toUpperCase() + rarity.slice(1).replace(/_/g, ' ')}`
            document.getElementsByClassName('amount')[Object.keys(rarities).indexOf(rarity)].textContent = `${formatNumber(player.rarities[rarity].current)}`
            document.getElementsByClassName('chance')[Object.keys(rarities).indexOf(rarity)].textContent = `(1/${formatNumber(max/rarities[rarity].chance())})`
            document.getElementsByClassName('first_roll')[Object.keys(rarities).indexOf(rarity)].textContent = `${formatNumber(player.rarities[rarity].first_roll)}`
            document.getElementsByClassName('total_amount')[Object.keys(rarities).indexOf(rarity)].textContent = `${formatNumber(player.rarities[rarity].total)}`
        }
    for (let mastery_rarity in mastery_rarities) {
        document.getElementsByClassName('masteryRarityCount')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `${mastery_rarity.charAt(0).toUpperCase() + mastery_rarity.slice(1).replace(/_/g, ' ')}: ${formatNumber(player.mastery_rarities[mastery_rarity].current)} (1/${formatNumber(mastery_max/mastery_rarities[mastery_rarity].chance(), 'chance')})`;
    
        document.getElementsByClassName('mastery_name')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `${mastery_rarity.charAt(0).toUpperCase() + mastery_rarity.slice(1).replace(/_/g, ' ')}`
        document.getElementsByClassName('mastery_amount')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `${formatNumber(player.mastery_rarities[mastery_rarity].current)}`
        document.getElementsByClassName('mastery_chance')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `(1/${formatNumber(mastery_max/mastery_rarities[mastery_rarity].chance())})`
        document.getElementsByClassName('mastery_first_roll')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `${formatNumber(player.mastery_rarities[mastery_rarity].first_roll)}`
        document.getElementsByClassName('mastery_total_amount')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `${formatNumber(player.mastery_rarities[mastery_rarity].total)}`
    }

    for (let prestige_rarity in PRESTIGE.rarities) {
        document.getElementsByClassName('prestigeRarityCount')[Object.keys(PRESTIGE.rarities).indexOf(prestige_rarity)].textContent = `${prestige_rarity.charAt(0).toUpperCase() + prestige_rarity.slice(1).replace(/_/g, ' ')}: ${formatNumber(player.prestige.rarities[prestige_rarity].current)} (1/${formatNumber(PRESTIGE.max/PRESTIGE.rarities[prestige_rarity].chance(), 'chance')})`;
    
        // document.getElementsByClassName('mastery_name')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `${mastery_rarity.charAt(0).toUpperCase() + mastery_rarity.slice(1).replace(/_/g, ' ')}`
        // document.getElementsByClassName('mastery_amount')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `${formatNumber(player.mastery_rarities[mastery_rarity].current)}`
        // document.getElementsByClassName('mastery_chance')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `(1/${formatNumber(mastery_max/mastery_rarities[mastery_rarity].chance())})`
        // document.getElementsByClassName('mastery_first_roll')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `${formatNumber(player.mastery_rarities[mastery_rarity].first_roll)}`
        // document.getElementsByClassName('mastery_total_amount')[Object.keys(mastery_rarities).indexOf(mastery_rarity)].textContent = `${formatNumber(player.mastery_rarities[mastery_rarity].total)}`
    }

    document.getElementById('rollsCount').textContent = `Rolls: ${formatNumber(player.rolls)}`;
    document.getElementById('rollsCount2').textContent = `Rolls: ${formatNumber(player.mastery_rolls)}`;
    document.getElementById('diceCount').textContent = `Dice left: ${formatNumber(player.prestige.dice)}`;
    document.getElementById('rollsCount3').textContent = `Rolls: ${formatNumber(player.prestige.rolls)}`;

    document.getElementById('rarityMaxRNG').textContent = `Max RNG: ${formatNumber(max)}`

    text.help.start = i18next.t('startHelpDescription');
    helpTitle.innerHTML = i18next.t('helpTitleText');

    text.changelog.start = i18next.t('startChangelogDescription');
    changelogTitle.innerHTML = i18next.t('changelogTitleText');

    for (let i = 1; i <= 9; i++) {
        text.help[i] = i18next.t(`help${i}`);
    }

    for (let i = 1; i <= 4; i++) {
        text.changelog[i] = i18next.t(`changelog${i}`);
    }

    statistics.innerHTML = i18next.t(`statistics`, {
        time: formatNumber((player.time.current - player.time.start)/1000),
        rolls: formatNumber(player.total_rolls),
        start1: player.time.start1,
        start2: player.time.start2
    });

    statistics2.innerHTML = player.prestige.resets >0 ? i18next.t(`statistics2`, {
        dice: formatNumber(player.prestige.dice),
        resets: formatNumber(player.prestige.resets),
        time: formatNumber((player.time.current - player.time.current_prestige)/1000),
        rolls: player.rolls
    }) : ''

    aboutGame.innerHTML = i18next.t('aboutGame');

    player.settings.autosave_enabled == 'enabled' ? document.querySelector('footer').textContent = `Autosave: ${(temp.time.auto_save/1000).toFixed(2)}s` : document.querySelector('footer').textContent = `Autosave: disabled`
    document.getElementById('autosave_enable').textContent = `Autosave: ${player.settings.autosave_enabled}`
    // document.getElementById('syncCloudSave').textContent = `Cloud sync: ${local.settings.cloud_sync}`

    rollButton.textContent = `Roll (x${UPGS.common.buyables.buyable9.effect()})`
}

const marqueeText = document.getElementById("marquee-text");
let currentIndex = -1;

function createKeyframes() {
    const textWidth = marqueeText.offsetWidth; // Ширина текста
    const screenWidth = window.innerWidth; // Ширина окна

    // Генерируем ключевые кадры
    const keyframes = `
        @keyframes scrollText {
            0% {
                transform: translateX(${screenWidth+500}px); /* Начальная точка */
            }
            100% {
                transform: translateX(-${textWidth}px); /* Конечная точка */
            }
        }
    `;

    // Удаляем старые ключевые кадры, если они существуют
    const existingStyle = document.getElementById("dynamic-keyframes");
    if (existingStyle) {
        existingStyle.remove();
    }

    // Вставляем новые ключевые кадры
    const styleSheet = document.createElement("style");
    styleSheet.id = "dynamic-keyframes";
    styleSheet.textContent = keyframes;
    document.head.appendChild(styleSheet);
}

function showRandomMessage() {
    // Получаем массив сообщений
    const messages = i18next.t("messages", { returnObjects: true });

    // Генерируем случайный индекс
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * messages.length);
    } while (randomIndex === currentIndex); // Исключаем повторения подряд

    currentIndex = randomIndex;

    // Устанавливаем текст
    marqueeText.textContent = messages[currentIndex];

    // Создаём анимацию с учётом размеров текста и окна
    createKeyframes();

    // Сбрасываем и перезапускаем анимацию
    marqueeText.style.animation = "none";
    void marqueeText.offsetWidth; // Трюк для сброса анимации
    marqueeText.style.animation = "scrollText 13s linear infinite";
}

// Интервал для смены текста
setInterval(showRandomMessage, 13000); // Меняем текст каждые 13 секунд
showRandomMessage(); // Показываем первый текст сразу