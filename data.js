///folosirea setTimeout sau setInterval
function afiseazaDataOra() {
    var dataCurenta = new Date();
    var zi = dataCurenta.getDate();
    var luna = dataCurenta.getMonth() + 1; // Lunile încep de la 0, așa că adăugăm 1
    var an = dataCurenta.getFullYear();
    var ora = dataCurenta.getHours();
    var minute = dataCurenta.getMinutes();
    var secunde = dataCurenta.getSeconds();

    // Formatarea datei și orei
    var dataOraFormata = zi + "/" + luna + "/" + an + " " + ora + ":" + minute + ":" + secunde;

    // Afișează data și ora în elementul cu id-ul "dataOra"
    document.getElementById("dataOra").textContent = dataOraFormata;
}

// Actualizează data și ora la fiecare secundă
setInterval(afiseazaDataOra, 1000);

// Afiseaza data si ora initiala
afiseazaDataOra();
