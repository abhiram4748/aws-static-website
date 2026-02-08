document.addEventListener('DOMContentLoaded', () => {

    // Select all sections to animate
    const sections = document.querySelectorAll('.section, .hero, .metrics-bar, .cta-section');

    // Add base class
    sections.forEach(sec => {
        sec.classList.add('fade-in-section');
    });

    const observerOptions = {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // One-time trigger
            }
        });
    }, observerOptions);

    sections.forEach(sec => {
        observer.observe(sec);
    });

    console.log("NEXUS SYSTEM: Motion Dynamics Active.");
});
