(function() {
    document.addEventListener('DOMContentLoaded', function() {
        var element = document.getElementById('meniu');
        if (element) {
            var computedStyle = window.getComputedStyle(element);
            console.log('Width:', computedStyle.width); 
            console.log('Height:', computedStyle.height);
        } else {
            console.error('Elementul cu ID-ul "meniu" nu a fost găsit.');
        }
    });
})();
