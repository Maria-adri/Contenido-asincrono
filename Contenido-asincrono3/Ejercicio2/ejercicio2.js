const imagenes = document.querySelectorAll('.img');
const lightbox = document.querySelector('.lightbox');
const imagenGrande = document.querySelector('.grande');
const botonCerrar = document.querySelector('.close');

const mostrarLightbox = (src) => {
    lightbox.classList.add('isActive');
    imagenGrande.src = src;
};

const cerrarLightbox = () => {
    lightbox.classList.remove('isActive');
};

imagenes.forEach((img) => {
    img.addEventListener('click', () => {
        mostrarLightbox(img.src);
    });
});

botonCerrar.addEventListener('click', cerrarLightbox);
