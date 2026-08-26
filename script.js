```javascript
// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Simple reveal animation when sections appear

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// Add a small scroll effect to the navigation

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(7, 7, 7, 0.97)";
    } else {
        navbar.style.background = "rgba(13, 13, 13, 0.92)";
    }

});
```
