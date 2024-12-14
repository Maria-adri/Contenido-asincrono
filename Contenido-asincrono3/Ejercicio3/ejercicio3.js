const botones = document.querySelectorAll('.li');
const bloques = document.querySelectorAll('.bloque');

botones.forEach((boton, indice) => {
    boton.addEventListener('click', () => {
        botones.forEach(b => b.classList.remove('activo'));
        bloques.forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
        bloques[indice].classList.add('activo');
    });
});
