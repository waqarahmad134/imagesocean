document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    document.querySelectorAll(".image-grid img").forEach(image => {
        image.addEventListener("click", () => {
            lightbox.classList.add("active");
            lightboxImg.src = image.src;
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});

