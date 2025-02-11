// Carrossel
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);