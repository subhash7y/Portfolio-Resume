// ============================================================
// CONTACT – Form validation and submission
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('contactName')?.value.trim();
        const email = document.getElementById('contactEmail')?.value.trim();
        const message = document.getElementById('contactMessage')?.value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Success message
        alert('Thank you for your message! I\'ll get back to you soon.');
        form.reset();

        // Optional: Submit to Netlify/Formspree
        // this.submit();
    });

    // --- Back to Top Button ---
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
