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
    let buyables = document.getElementsByClassName('buyableUpgrade')
    for (let i = 0; i < buyables.length; i++) {
        const index = i+1
        let number_loop = player.upgrades.buyables[index]
        player.upgrades.buyables[6] == 0 && player.upgrades.buyables[index] >= 5 ? number_loop = 9 : number_loop = player.upgrades.buyables[index]
        buyables[i].innerHTML = i18next.t(`buyableUpgrade${index}.${number_loop}`, {
            color1: rarity[UPGS[`buyable${index}`].rarity[player.upgrades.buyables[index]][0]],
            color2: rarity[UPGS[`buyable${index}`].rarity[player.upgrades.buyables[index]][1]],
            color3: rarity[UPGS[`buyable${index}`].rarity[player.upgrades.buyables[index]][2]],
            cost1: formatNumber(UPGS[`buyable${index}`].cost[player.upgrades.buyables[index]][0]),
            cost2: formatNumber(UPGS[`buyable${index}`].cost[player.upgrades.buyables[index]][1]),
            cost3: formatNumber(UPGS[`buyable${index}`].cost[player.upgrades.buyables[index]][2]),
            rarity1: rarity[UPGS[`buyable${index}`].rarity[player.upgrades.buyables[index]][0]].charAt(0).toUpperCase() + rarity[UPGS[`buyable${index}`].rarity[player.upgrades.buyables[index]][0]].slice(1).replace(/_/g, ' '),
            rarity2: rarity[UPGS[`buyable${index}`].rarity[player.upgrades.buyables[index]][1]].charAt(0).toUpperCase() + rarity[UPGS[`buyable${index}`].rarity[player.upgrades.buyables[index]][1]].slice(1).replace(/_/g, ' '),
            rarity3: rarity[UPGS[`buyable${index}`].rarity[player.upgrades.buyables[index]][2]].charAt(0).toUpperCase() + rarity[UPGS[`buyable${index}`].rarity[player.upgrades.buyables[index]][2]].slice(1).replace(/_/g, ' '),
        })
    }

    for (let rarity in rarities) {
            document.getElementsByClassName('rarityCount')[Object.keys(rarities).indexOf(rarity)].textContent = `${rarity.charAt(0).toUpperCase() + rarity.slice(1).replace(/_/g, ' ')}: ${formatNumber(player.rarities[rarity].current)} (1/${formatNumber(max/rarities[rarity].chance(), 'chance')})`;

            document.getElementsByClassName('name')[Object.keys(rarities).indexOf(rarity)].textContent = `${rarity.charAt(0).toUpperCase() + rarity.slice(1).replace(/_/g, ' ')}`
            document.getElementsByClassName('amount')[Object.keys(rarities).indexOf(rarity)].textContent = `${formatNumber(player.rarities[rarity].current)}`
            document.getElementsByClassName('chance')[Object.keys(rarities).indexOf(rarity)].textContent = `(1/${formatNumber(max/rarities[rarity].chance())})`
            document.getElementsByClassName('first_roll')[Object.keys(rarities).indexOf(rarity)].textContent = `${formatNumber(player.rarities[rarity].first_roll)}`
            document.getElementsByClassName('total_amount')[Object.keys(rarities).indexOf(rarity)].textContent = `${formatNumber(player.rarities[rarity].total)}`
        }
    document.getElementById('rollsCount').textContent = `Rolls: ${formatNumber(player.rolls)}`;

    text.help.start = i18next.t('startHelpDescription');
    helpTitle.innerHTML = i18next.t('helpTitleText');

    for (let i = 1; i <= 7; i++) {
        text.help[i] = i18next.t(`help${i}`);
    }

    statistics.innerHTML = i18next.t(`statistics`, {
        time: formatNumber((player.time.current - player.time.start)/1000),
        rolls: formatNumber(player.rolls),
        start1: player.time.start1,
        start2: player.time.start2
    });

    aboutGame.innerHTML = i18next.t('aboutGame');

    player.settings.autosave_enabled == 'enabled' ? document.querySelector('footer').textContent = `Autosave: ${(player.time.auto_save/1000).toFixed(2)}s` : document.querySelector('footer').textContent = `Autosave: disabled`
    document.getElementById('autosave_enable').textContent = `Autosave: ${player.settings.autosave_enabled}`
    document.getElementById('syncCloudSave').textContent = `Cloud sync: ${local.settings.cloud_sync}`

    rollButton.textContent = `Roll (x${calculate_roll()})`
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