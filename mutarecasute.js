document.addEventListener('keydown', function(event) {
    // Obținem toate elementele de tip checkbox
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    console.log(checkboxes); // Afișăm elementele checkboxes în consolă pentru a verifica corectitudinea selecției
    
    // Obținem indexul checkboxului selectat curent
    var currentIndex = -1;
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            currentIndex = i;
            break;
        }
    }
    
    // Verificăm dacă un checkbox este deja selectat
    if (currentIndex !== -1) {
        // Săgeata în jos
        if (event.keyCode === 40 && currentIndex < checkboxes.length - 1) {
            // Dacă se apasă săgeata în jos și nu suntem la ultimul checkbox, mutăm checkboxul curent în jos cu unul
            checkboxes[currentIndex].checked = false;
            checkboxes[currentIndex + 1].checked = true;
        }
        // Săgeata în sus
        else if (event.keyCode === 38 && currentIndex > 0) {
            // Dacă se apasă săgeata în sus și nu suntem la primul checkbox, mutăm checkboxul curent în sus cu unul
            checkboxes[currentIndex].checked = false;
            checkboxes[currentIndex - 1].checked = true;
        }
    }
});
