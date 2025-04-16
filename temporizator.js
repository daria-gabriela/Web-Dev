// Timpul inițial în secunde (15 minute)
var timpInitial = 15 * 60;

// Funcția care va fi apelată când expiră timpul
function expirareTimp() {
    alert("Timpul a expirat!");
    // Aici poți adăuga orice acțiuni suplimentare pe care vrei să le faci la expirarea timpului
}

// Funcția care actualizează temporizatorul
function actualizeazaTemporizator(timpRamas) {
    var minute = Math.floor(timpRamas / 60);
    var secunde = timpRamas % 60;
    var timpRamasStr = minute.toString().padStart(2, '0') + ":" + secunde.toString().padStart(2, '0');
    document.getElementById("timp-ramas").textContent = timpRamasStr;
}

// Setăm un timer pentru 15 minute (900 secunde)
var timpRamas = timpInitial;
actualizeazaTemporizator(timpRamas); // Actualizăm temporizatorul la început

var timer = setInterval(function() {
    timpRamas--;
    if (timpRamas >= 0) {
        actualizeazaTemporizator(timpRamas);
    } else {
        clearInterval(timer);
        expirareTimp();
    }
}, 1000); // Actualizăm temporizatorul la fiecare secundă
