const bloques = document.querySelectorAll('.bloque');
const titulos = document.querySelectorAll('.h2');

titulos.forEach((titulo, i) => {
    titulo.addEventListener('click', () => {
        
        const bloque = bloques[i];
        const esActivo = bloque.classList.contains('activo');

        bloques.forEach(b => b.classList.remove('activo'));

        if (!esActivo) {
            bloque.classList.add('activo');
        }
    });
});
