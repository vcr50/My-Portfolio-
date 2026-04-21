document.addEventListener("DOMContentLoaded", function() {
    const aboutImg = document.querySelector('img[src="assets/images/c1.png"]');
    if (aboutImg) {
        aboutImg.onerror = function() {
            this.style.display = 'none';
            const fallback = document.getElementById('about-img-fallback');
            if (fallback) fallback.style.display = 'flex';
        }
    }

    // Animate certification progress bars on scroll into view
    const certBars = document.querySelectorAll('.cert-progress-fill');
    if (certBars.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        certBars.forEach((bar) => observer.observe(bar));
    }
});
