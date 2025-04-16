///validarea datelor dintr-un formular folosind expresii regulate
// Funcția pentru validarea adresei de email
function isValidName(name) {
    var regex = /^[a-zA-Z\s-]+$/;
    return regex.test(name);
}
function isValidEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
        alert("Introduceți o adresă de email validă!");
        return false;
    }
// Retrieve the stored email from localStorage
var storedEmail = localStorage.getItem('email');

// Check if the storedEmail is not null and does not include the current email
if (storedEmail && !storedEmail.includes(email)) {
     alert("Adresa de email nu există în lista de adrese salvate!");
        return false;
    }
    return regex.test(email);
}

// Funcția pentru verificarea datelor înainte de trimiterea formularului
function validateForm() {
    var nameInput = document.forms["contactForm"]["username"].value;
    if (!isValidName(nameInput)) {
        alert("Introduceți un nume valid!");
        return false;
    }
    var emailInput = document.forms["contactForm"]["email"].value;
    if (!isValidEmail(emailInput)) {
        alert("Introduceți o adresă de email validă!");
        return false;
    }
  
    return true;
}
// La trimiterea formularului
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Oprim acțiunea implicită de trimitere a formularului

    // Obținem valoarea introdusă în câmpul de email
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
  

    // Salvăm adresa de email în localStorage
    if (email.trim() !== '') {
        // Verificăm dacă există deja adrese salvate
        var savedEmails = JSON.parse(localStorage.getItem('savedEmails')) || [];

        // Adăugăm adresa de email nouă la lista existentă
        savedEmails.push(email);

        // Salvăm lista actualizată în localStorage
        localStorage.setItem('savedEmails', JSON.stringify(savedEmails));
    }

    // Apoi puteți face orice altă acțiune necesară, cum ar fi afișarea mesajului de succes etc.
});

// Pentru a afișa adresele de email salvate
var savedEmails = JSON.parse(localStorage.getItem('savedEmails')) || [];
console.log('Adresele de email salvate:', savedEmails);
