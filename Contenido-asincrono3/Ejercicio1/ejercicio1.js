const acordeon = document.querySelector('.acordeon');

acordeon.addEventListener('click', (event) => {
    
    if (event.target.matches('.h2')) {
        const titulo = event.target;
        const bloque = titulo.parentElement; 
        const esActivo = bloque.classList.contains('activo');

        acordeon.querySelectorAll('.bloque').forEach(b => b.classList.remove('activo'));

        if (!esActivo) {
            bloque.classList.add('activo');
        }
    }
});
