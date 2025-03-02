document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const banner = document.querySelector(".banner");
    const frases = ["La mujer de mis sueños <3"];
    let fraseIndex = 0;
    let currentSlide = 0;
    let allowSlideChange = true;

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
    }

    function cambiarFrase() {
        banner.textContent = frases[fraseIndex];
        fraseIndex = (fraseIndex + 1) % frases.length;
    }

    prevButton.addEventListener("click", function () {
        if (allowSlideChange) {
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
            showSlide(currentSlide);
        }
    });

    nextButton.addEventListener("click", function () {
        if (allowSlideChange) {
            currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
            showSlide(currentSlide);
        }
    });

    slides.forEach(slide => {
        slide.addEventListener("mousedown", () => allowSlideChange = false);
        slide.addEventListener("mouseup", () => allowSlideChange = true);
        slide.addEventListener("touchstart", () => allowSlideChange = false);
        slide.addEventListener("touchend", () => allowSlideChange = true);
    });

    showSlide(currentSlide);
    cambiarFrase();

    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const responseText = document.getElementById("response-text");

    noButton.addEventListener("click", function () {
        responseText.textContent = "😢😢 LO SABÍA 😢😢";
        responseText.style.color = "red";
    });

    yesButton.addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
