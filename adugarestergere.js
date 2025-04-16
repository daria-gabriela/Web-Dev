// Creaza
const element = document.createElement('div');
// Set the element's text content
element.textContent = 'Contactati-ne pentru mai multe detalii';
// Set the element's text color to white
element.style.color = 'white';
// Append the element to an existing element on the page
document.querySelector('main').appendChild(element);
// Delete the element
setTimeout(() => {
    element.remove();
}, 5000);