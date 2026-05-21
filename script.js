document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Header
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle (Basic implementation)
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // For a real implementation, you'd toggle a 'show' class
    // and style it appropriately in CSS to slide from side/top.
    mobileToggle.addEventListener('click', () => {
        alert('Menu mobile click - Adicione estilos no CSS para expandir o menu');
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, // 15% of the element must be visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Trigger check on load in case elements are already in viewport
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);

});
let insideSlideIndex = 0;

function moveInsideSlide(direction) {

    const track = document.getElementById("insideTrack");
    const slides = document.querySelectorAll(".inside-slide");

    insideSlideIndex += direction;

    if (insideSlideIndex < 0) {
        insideSlideIndex = slides.length - 1;
    }

    if (insideSlideIndex >= slides.length) {
        insideSlideIndex = 0;
    }

    track.style.transform =
        `translateX(-${insideSlideIndex * 100}%)`;
}
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});