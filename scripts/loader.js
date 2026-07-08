// ============================================================
// LOADER – Hide loading screen on page load
// ============================================================

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 800);
    }
});
