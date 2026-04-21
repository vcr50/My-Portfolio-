document.addEventListener("DOMContentLoaded", function() {
    const aboutImg = document.querySelector('img[src="assets/images/c1.png"]');
    if (aboutImg) {
        aboutImg.onerror = function() {
            this.style.display = 'none';
            const fallback = document.getElementById('about-img-fallback');
            if (fallback) fallback.style.display = 'flex';
        }
    }
});
