// Smooth scroll for buttons and navigation
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("a[href^='#']");

    buttons.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

// Subtle fade-in animation on scroll
const fadeElements = document.querySelectorAll(".fade");

const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-visible");
        }
    });
});

fadeElements.forEach(el => fadeInObserver.observe(el));

