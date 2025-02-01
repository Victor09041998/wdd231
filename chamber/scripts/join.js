// JavaScript to set the timestamp value
document.getElementById('timestamp').value = new Date().toISOString();

// JavaScript for modal functionality
var modals = document.querySelectorAll('.modal');
var modalLinks = document.querySelectorAll('a[href^="#"]');
var closeButtons = document.querySelectorAll('.close');

modalLinks.forEach(link => {
    link.onclick = function(event) {
        event.preventDefault();
        var modal = document.querySelector(this.getAttribute('href'));
        modal.style.display = 'block';
    }
});

closeButtons.forEach(button => {
    button.onclick = function() {
        var modal = this.closest('.modal');
        modal.style.display = 'none';
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}