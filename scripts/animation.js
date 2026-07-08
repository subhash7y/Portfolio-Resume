// ============================================================
// ANIMATION – Scroll reveal (fade-in on scroll)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    function scrollReveal() {
        const elements = document.querySelectorAll(
            '.research-card, .project-card, .stat-card, .skill-category, ' +
            '.cert-card, .achievement-item, .education-item, .contact-item'
        );

        if (!elements.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Run initially and also after dynamic content loads
    scrollReveal();

    // Re-run after a delay to catch dynamically added content
    setTimeout(scrollReveal, 500);
});

// Export for use in app.js if needed
window.scrollReveal = scrollReveal;
