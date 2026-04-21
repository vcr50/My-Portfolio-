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

    // Premium Tab switching for Skills with Fade
    const btnTech = document.getElementById('btn-tech-skills');
    const btnAi = document.getElementById('btn-ai-skills');
    const contentTech = document.getElementById('content-tech-skills');
    const contentAi = document.getElementById('content-ai-skills');

    if (btnTech && btnAi && contentTech && contentAi) {
        let isAnimating = false;

        function switchTab(activeBtn, inactiveBtn, showContent, hideContent) {
            if (isAnimating) return;
            isAnimating = true;

            // Update buttons
            activeBtn.classList.add('bg-white/10', 'text-white', 'shadow-lg', 'border-white/10');
            activeBtn.classList.remove('text-gray-400', 'border-transparent', 'hover:text-gray-200');
            inactiveBtn.classList.remove('bg-white/10', 'text-white', 'shadow-lg', 'border-white/10');
            inactiveBtn.classList.add('text-gray-400', 'border-transparent', 'hover:text-gray-200');

            // Fade out
            hideContent.style.opacity = '0';
            
            setTimeout(() => {
                hideContent.classList.add('hidden');
                showContent.classList.remove('hidden');
                
                // Force reflow
                void showContent.offsetWidth;
                
                // Fade in
                showContent.style.opacity = '1';
                
                setTimeout(() => {
                    isAnimating = false;
                }, 300);
            }, 300);
        }

        btnTech.addEventListener('click', () => {
            if (!contentTech.classList.contains('hidden')) return;
            switchTab(btnTech, btnAi, contentTech, contentAi);
        });

        btnAi.addEventListener('click', () => {
            if (!contentAi.classList.contains('hidden')) return;
            switchTab(btnAi, btnTech, contentAi, contentTech);
        });
    }
});
