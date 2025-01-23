const API_URL = 'https://www.freesoundworld.ru/save.php';


async function saveGameDB(saveData) {
    let userId = prompt('Enter secret key to save your file into database (and remember it, since you need it for load', local.key)
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                action: 'save', 
                userId: userId,
                saveData: btoa(saveData),
            }),
        });

        if (!response.ok) {
            throw new Error(`SERVER ERROR (contact developer): ${response.status}`);
        }
        const result = await response.json();
        console.log(result)
        if (userId != null) showNotification("Game saved into cloud!", "white", "250px")
        else alert('Request cancelled.')
    } catch (error) {
        console.error('SAVE ERROR:', error.message);
    }
}

async function loadGameDB() {
    const userIds = await listUsers();
    let userId = prompt('Enter secret key of saved file', local.key)
    let foundID = ''
    userIds.forEach(ID => {
        if (userId === ID) {
            foundID = userId
        }
    });
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            action: 'load',
            userId: userId
        }),
    });
    const result = await response.json();
    if (result.status === 'success') {
        let storedData = atob(result.saveData)
        let parsedData = JSON.parse(storedData);
        showNotification("Game loaded from cloud!", "white", "250px")
        updateNestedProperties(player, parsedData)
        
        clearInterval(autoclicker)
        autoclicker = setInterval(() => {
            if (player.upgrades.buyables[4] != 0) auto_roll()
        }, 4000/UPGS.buyable4.effect());
    
        slider.value = player.settings.slider_value
        outputValue.textContent = values[slider.value]
        return result.saveData;
    } 
    else if (result.status === 'error') {
        alert('Request cancelled.')
        return null;
    }
    else {
        console.error(result.message);
        alert('Cloud doesn\'t have such save, try again. Or create new one, if you didn\'t.')
        return null;
    }
}

async function listUsers() {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'list_users' }),
    });
    const result = await response.json();
    if (result.status === 'success') {
        return result.userIds;
    } else {
        console.error(result.message);
        return [];
    }
}


function saveGame(auto=false) { 
        temp.time.auto_save = 0
        if (auto == false) showNotification("Game saved!")
        let stringifiedData = JSON.stringify(player); 
        localStorage.setItem('player_luck_incremental', stringifiedData);
        
}

function updateNestedProperties(targetObj, sourceObj) {
for (const key in sourceObj) {
    if (sourceObj.hasOwnProperty(key)) {
    if (typeof sourceObj[key] === 'object' && sourceObj[key] !== null && !Array.isArray(sourceObj[key])) {
        if (!targetObj[key]) {
        targetObj[key] = {};
        }
        updateNestedProperties(targetObj[key], sourceObj[key]);
    } else {
        targetObj[key] = sourceObj[key];
    }
    }
}
}

function loadGame(show=true) {
    let storedData = localStorage.getItem('player_luck_incremental'); 
    let parsedData = JSON.parse(storedData);

    if (show) showNotification("Game loaded!")
    updateNestedProperties(player, parsedData)

    clearInterval(autoclicker)
    autoclicker = setInterval(() => {
        if (player.upgrades.buyables[4] != 0) auto_roll()
    }, 4000/UPGS.buyable4.effect());

    slider.value = player.settings.slider_value
    outputValue.textContent = values[slider.value]
}

function loadKeys() {
    localStorage.getItem('sync_key') != null ? local.key = localStorage.getItem('sync_key') : local.key
    localStorage.getItem('sync_enabled') != null ? local.settings.cloud_sync = localStorage.getItem('sync_enabled') : local.settings.cloud_sync
}

function exportGame() {
    let exportedData = JSON.stringify(player); //превратим в строчку
    let base64 = btoa(exportedData); // кодируем строку в base64
    showNotification("Game exported!")
    navigator.clipboard.writeText(base64)
    
    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let filename = 'RNG-Incremental-Save-' + formatNumber(player.rolls) + '-rolls-' + date + '.txt';

  // создание и запись содержимого в новый файл
    let file = new Blob([base64], {type: 'text/plain'});
    let a = document.createElement('a');
    a.download = filename;
    a.href = URL.createObjectURL(file);
    a.click();
}

function importGame() {
    const base64 = prompt("Insert save in base64 format");
    importing(base64);
}

function importing(base64) {
    const importedData = atob(base64);
    const parsedData = JSON.parse(importedData)
    updateNestedProperties(player, parsedData)
    saveGame()
    location.reload()
}

//import from file, should be like this!
var fileUpload = document.getElementById('file-upload');
var fileName = document.querySelector('.file-name');

fileUpload.addEventListener('change', function(base64) {
    var file = base64.target.files[0];

    fileName.textContent = file.name;

    var reader = new FileReader();

    reader.onload = function(base64) {
    importing(base64.target.result)
    };

    reader.readAsText(file);
    fileUpload.value = null;
});

function hardReset() {
    localStorage.removeItem('player_luck_incremental');
    localStorage.removeItem('sync_key');
    localStorage.removeItem('sync_enabled');
    location.reload() //сделать чтобы страница НЕ загружала через лоад
}

function switchSave() {
    let key = localStorage.getItem('sync_key')
    if (key == null) alert('You didn\'t enter key or this key doesn\'t exist. Press button on right side to add key.')
    else {
        if (local.settings.cloud_sync == 'no') local.settings.cloud_sync = 'yes'
        else local.settings.cloud_sync = 'no'
        localStorage.setItem('sync_enabled', local.settings.cloud_sync)
    }
}

async function editCloudKey() {
    const userIds = await listUsers();
    let key = local.key ? prompt(`Write a key you want to connect to (currently: ${local.key}): `) : prompt(`Write a key you want to connect to: `)
    let foundID = false
    userIds.forEach(ID => {
        if (key === ID) {
            foundID = true
        }
    });
    if (foundID) {
        alert('You set key as: ' + key)
        localStorage.setItem('sync_key', key)
        loadKeys()
    }
    else if (local.key == '') alert('Request cancelled.')
    else alert('Cloud doesn\'t have such key, try again. Or create new one, if you didn\'t.')
}

async function autoSaveGameDB(key, saveData) {
    temp.time.auto_save = 0
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                action: 'save', 
                userId: key,
                saveData: btoa(saveData),
            }),
        });

        if (!response.ok) {
            throw new Error(`SERVER ERROR (contact developer): ${response.status}`);
        }
        const result = await response.json();
        showNotification("Cloud synced!", "white", "250px")
    } catch (error) {
        console.error('SYNC ERROR:', error.message);
    }
}

async function autoLoadGameDB(key) {
    try{
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'load',
                userId: key
            }),
        });
        const result = await response.json();
        if (result.status === 'success') {
            let storedData = atob(result.saveData)
            let parsedData = JSON.parse(storedData);
            showNotification("Game loaded from cloud!", "white", "250px")
            updateNestedProperties(player, parsedData)
            
            clearInterval(autoclicker)
            autoclicker = setInterval(() => {
                if (player.upgrades.buyables[4] != 0) auto_roll()
            }, 4000/UPGS.buyable4.effect());
        
            slider.value = player.settings.slider_value
            outputValue.textContent = values[slider.value]
            if (player.rarities.nothing.total >= 1 && player.upgrades.buyables[4] > 0) window.onload = offline_prod()
            else startGame()
            return result.saveData;
        } 
        else if (result.status === 'error') {
            alert('Request cancelled.')
            return null;
        }
        else {
            console.error(result.message);
            alert('Cloud doesn\'t have such save, try again. Or create new one, if you didn\'t.')
            return null;
        }
    }
    catch(error){
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            console.error('CONNECTION ERROR: The request was blocked due to a CORS issue or network error.');
        } else if (error.message.includes('SERVER ERROR')) {
            console.error('SERVER ERROR:', error.message);
        } else {
            showNotification('CONNECTION TO DATABASE IS FAILED. Loading local save.', 'red', '400px')
            loadGame(show=false)
        }
    }
}