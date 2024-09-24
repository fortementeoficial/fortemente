<script>
let currentSlide = 0;
const slides = document.querySelectorAll('.containerum');

function showSlides(n) {
slides.forEach((slide, index) => {
slide.classList.remove('active');
if (index === n) {
slide.classList.add('active');
}
});
}

function plusSlides(n) {
currentSlide += n;
if (currentSlide < 0) {
currentSlide = slides.length - 1;
}
if (currentSlide >= slides.length) {
currentSlide = 0;
}
showSlides(currentSlide);
}

// Mostra o slide inicial
showSlides(currentSlide);
</script>
