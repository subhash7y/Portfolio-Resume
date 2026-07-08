// ============================================================
// TIMELINE – Reveal experience timeline items on scroll
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    function revealTimeline() {
        const items = document.querySelectorAll('.timeline-item');
        if (!items.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        items.forEach(item => observer.observe(item));
    }

    revealTimeline();

    // Re-run after dynamic content
    setTimeout(revealTimeline, 500);
});

// Export for reuse
window.revealTimeline = revealTimeline;
