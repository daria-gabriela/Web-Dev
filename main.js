document.getElementById('login').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from being submitted in the default way
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Create a new XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Configure the request
  xhr.open('POST', '/your-endpoint-url', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  // Send the request
  xhr.send(JSON.stringify({
    email: email,
    password: password
  }));

  // Handle the response
  xhr.onload = function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      // Handle the response here
    } else {
      // Handle the error here
    }
  };
});