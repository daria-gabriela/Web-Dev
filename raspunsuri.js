///inputuri funcționale (de exemplu: input de tip text/range/number/radio/checkbox, select, textarea)
function rezultat() {

    var nrRaspunsuriCorecte = 0;
    var raspunsuriCorecte = document.querySelectorAll('input[name="var_2s"]:checked');
    nrRaspunsuriCorecte = raspunsuriCorecte.length;
    
    // Calculăm scorul și actualizăm mesajul
    var scor = (nrRaspunsuriCorecte + 1) * 10; // Adăugăm 1 pentru răspunsul corect actual și înmulțim cu 10
    var mesaj = "Felicitări! Ai obținut un scor de " + scor + " de puncte.";
    
    var timpRamas = document.getElementById("timp-ramas").textContent;
    var timpRamasMinute = parseInt(timpRamas.split(":")[0]);
    var timpRamasSecunde = parseInt(timpRamas.split(":")[1]);
    var timpTotalRamasMinute = timpRamasMinute + Math.floor(timpRamasSecunde / 60);

    // Actualizăm mesajul cu timpul rămas
    mesaj += "\n Ai terminat grilele cu " + timpTotalRamasMinute + " minute înainte de expirare.";

    // Afișăm mesajul
    document.getElementById("mesaj").textContent = mesaj;
    
    raspunsuriCorecte.forEach(function(raspuns) {
        // Aici presupunem că răspunsurile corecte sunt marcate cu clasa "raspuns-corect"
        raspuns.classList.add("raspuns-corect");
    });

}
