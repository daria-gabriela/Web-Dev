///folosirea și modificarea evenimentelor generate de mouse si tastatură
var paragraf = document.getElementById("paragraf");
    var spans = paragraf.getElementsByTagName("span");

    // Adaugă un event listener pentru fiecare <span>
    for (var i = 0; i < spans.length; i++) {
        spans[i].addEventListener("click", function(event) {
            // Elimină sublinierea de la toate <span>-urile
            for (var j = 0; j < spans.length; j++) {
                spans[j].classList.remove("highlighted");
            }
            // Subliniază <span>-ul pe care s-a făcut click
            event.target.classList.add("highlighted");
        });
    }