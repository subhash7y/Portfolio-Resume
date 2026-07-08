// ============================================================
// COUNTERS – Animated number counters for achievements
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    function animateCounters() {
        const counters = document.querySelectorAll('.achievement-counter .number');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target') || '0', 10);
                    const duration = 1500;
                    const startTime = performance.now();

                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const currentValue = Math.floor(eased * target);
                        counter.textContent = currentValue.toLocaleString();
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target.toLocaleString();
                        }
                    }

                    requestAnimationFrame(updateCounter);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounters();

    // Re-run after dynamic content
    setTimeout(animateCounters, 500);
});

// Export for reuse
window.animateCounters = animateCounters;
