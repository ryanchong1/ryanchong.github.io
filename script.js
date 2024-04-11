document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 3000; // Interval between slides in milliseconds (3 seconds)

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Automatically move to the next slide at specified interval
    setInterval(nextSlide, slideInterval);
});

