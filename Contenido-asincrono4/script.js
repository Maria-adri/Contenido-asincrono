// script.js
document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".brand-list li");
    const images = document.querySelectorAll(".brand-display .image");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            // Resaltar texto activo
            listItems.forEach(el => el.classList.remove("active"));
            listItems.forEach(el => el.classList.add("inactive"));
            item.classList.add("active");

            // Mostrar imagen correspondiente
            const imageId = item.getAttribute("data-image");
            images.forEach(img => img.classList.remove("active"));
            document.getElementById(imageId).classList.add("active");
        });
    });
});
