// Simple form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    // You can add AJAX or fetch() here to handle form submission to a server
});