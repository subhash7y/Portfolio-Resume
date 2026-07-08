// ============================================================
// THEME – Dark/Light mode toggle with localStorage persistence
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('.theme-icon');

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', initialTheme);
    if (themeIcon) {
        themeIcon.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
    }

    // Toggle theme on button click
    themeToggle?.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        if (themeIcon) {
            themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
        }
    });
});
