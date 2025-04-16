document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login');
  const logoutForm = document.getElementById('logout-form');
  const logoutBtn = document.getElementById('logout');
  const userSpan = document.getElementById('user');
  const emailInput = document.getElementById('email');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = emailInput.value;
    localStorage.setItem('email', email);
    showLogoutForm(email);
  });

  logoutBtn.addEventListener('click', function() {
    localStorage.removeItem('email');
    showLoginForm(); // Afisează formularul de autentificare la deconectare
  });

  function showLogoutForm(email) {
    loginForm.style.display = 'none';
    logoutForm.style.display = 'block';
    userSpan.textContent = email;
    logoutBtn.style.display = 'inline-block'; // Afișează butonul de logout

    // Cerere AJAX către server pentru a obține datele utilizatorului
    fetch('/date.json')
      .then(response => response.json())
      .then(userData => {
        // Afisează detalii utilizator
        document.getElementById('user-details').innerHTML = `
          <p>Nume: ${userData.name}</p>
          <p>Locație: ${userData.location}</p>
        `;
      })
      .catch(error => console.error('Error fetching user data:', error));

    // Afiseaza meniul
    document.getElementById('meniu').style.display = '';
  }

  function showLoginForm() {
    loginForm.style.display = 'block';
    logoutForm.style.display = 'none';
    emailInput.value = '';
    logoutBtn.style.display = 'none'; // Ascunde butonul de logout
    document.getElementById('user-details').innerHTML = ''; // Șterge detaliile utilizatorului afișate
    document.getElementById('meniu').style.display = 'none'; // Ascunde meniul
  }

  const storedEmail = localStorage.getItem('email');
  if (storedEmail) {
    showLogoutForm(storedEmail);
  } else {
    showLoginForm();
  }
});