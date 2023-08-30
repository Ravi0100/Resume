// JavaScript for interactive features

// Smooth scrolling
document.querySelectorAll('a[href^=""]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Display contact information
const contactBtn = document.querySelector('#contact-btn');
const contactInfo = document.querySelector('#contact-info');

contactBtn.addEventListener('click', () => {
    contactInfo.classList.toggle('show');
});
