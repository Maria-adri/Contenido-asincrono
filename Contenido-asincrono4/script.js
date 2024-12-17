document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".brand-list li");
    const display = document.querySelector(".brand-display");

    const images = {
        img1: "Fotos/jaguar.jpg",
        img2: "Fotos/ferrari.avif",
        img3: "Fotos/lamborghini1.webp",
        img4: "Fotos/bmw2.webp",
        img5: "Fotos/audi3.jpeg",
        img6: "Fotos/tesla1.jpg",
        img7: "Fotos/mercedes.jpg"
    };

    listItems.forEach(item => {
        item.addEventListener("mouseover", () => {
         
            listItems.forEach(el => el.classList.add("inactive"));
            item.classList.remove("inactive");
            item.classList.add("active");

          
            const imageId = item.getAttribute("data-image");
            display.style.backgroundImage = `url(${images[imageId]})`;
            display.style.opacity = "1"; 
        });

        item.addEventListener("mouseout", () => {
          
            listItems.forEach(el => el.classList.remove("active", "inactive"));
            display.style.opacity = "0"; 
        });
    });
});
