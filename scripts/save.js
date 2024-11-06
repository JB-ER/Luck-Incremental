function saveGame () { 
        player.time.auto_save = 0
        let stringifiedData = JSON.stringify(player); //превратим в строчку
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

function loadGame() {
    let storedData = localStorage.getItem('player_luck_incremental'); 
    let parsedData = JSON.parse(storedData);
    updateNestedProperties(player, parsedData)
    player.time.saved = Date.now()

    autoclicker = setInterval(() => {
        if (player.upgrades.buyables[4] != 0) auto_roll()
    }, 2000/UPGS.buyable4.effect());
}

function exportGame() {
    let exportedData = JSON.stringify(player); //превратим в строчку
    let base64 = btoa(exportedData); // кодируем строку в base64
    navigator.clipboard.writeText(base64)
    
    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let filename = 'Luck-Incremental-Save-' + date + '.txt';

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
    location.reload() //сделать чтобы страница НЕ загружала через лоад
}