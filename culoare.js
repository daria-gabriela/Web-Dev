///schimbarea aleatoare a valorilor unei proprietăți (de exemplu: culoare, dimensiuni, poziție)
function schimbareCuloareAleatoare() {
    // Obținem o valoare aleatoare pentru roșu, verde și albastru
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    // Construim culoarea folosind valorile RGB
    var culoare = "rgb(" + r + "," + g + "," + b + ")";

    // Selectăm elementul la care dorim să schimbăm culoarea
    var element = document.getElementById("culoare");

    // Schimbăm culoarea elementului
    element.style.color = culoare;
}