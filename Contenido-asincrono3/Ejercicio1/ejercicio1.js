const bloques = document.querySelectorAll('.bloque');
const titulos = document.querySelectorAll('.h2');

titulos.forEach((titulo, indice) => {
    titulo.addEventListener('click', () => {
        const bloqueActual = bloques[indice];
        const estaActivo = bloqueActual.classList.contains('activo');
        bloques.forEach(b => b.classList.remove('activo'));
        if (!estaActivo) {
            bloqueActual.classList.add('activo');
        }
    });
});
