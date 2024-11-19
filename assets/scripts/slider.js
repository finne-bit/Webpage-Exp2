const sliders = {}; // Objek untuk menyimpan data setiap slider

// Menampilkan slide berdasarkan sliderId
function showSlides(sliderId) {
    const slider = sliders[sliderId];
    const slides = document.querySelectorAll(`#${sliderId} .slide`);

    slides.forEach((slide, index) => {
        slide.style.opacity = (index === slider.index) ? '1' : '0';
        slide.style.display = (index === slider.index) ? 'block' : 'none';
    });

    resetTimer(sliderId);
}

// Menggerakkan slide ke arah tertentu
function moveSlide(sliderId, n) {
    const slider = sliders[sliderId];
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    slider.index = (slider.index + n + slides.length) % slides.length; // Rotasi index

    showSlides(sliderId);
}

// Mengatur ulang timer untuk slider
function resetTimer(sliderId) {
    clearInterval(sliders[sliderId].timer);
    sliders[sliderId].timer = setInterval(() => moveSlide(sliderId, 1), 5000);
}

// Inisialisasi slider
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach((container) => {
        const sliderId = container.id;
        sliders[sliderId] = {
            index: 0,
            timer: setInterval(() => moveSlide(sliderId, 1), 5000),
        };
        showSlides(sliderId);
    });
});
