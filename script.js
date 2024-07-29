// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission (you can add more functionalities here)
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });
});
