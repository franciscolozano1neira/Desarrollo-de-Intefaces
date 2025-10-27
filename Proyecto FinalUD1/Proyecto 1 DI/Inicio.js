// CARRUSEL DE IMÁGENES - LÓGICA PRINCIPAL

// Obtenemos el contenedor de las diapositivas
const slides = document.getElementById('slides');

// Contamos cuántas diapositivas hay dentro del contenedor
const slideCount = document.querySelectorAll('.slide').length;

// Índice actual de la diapositiva visible (comienza en la primera)
let index = 0;

// FUNCIONALIDAD DEL BOTÓN "SIGUIENTE" (Next)
document.getElementById('next').addEventListener('click', () => {
    // Incrementa el índice de la diapositiva
    // % slideCount asegura que vuelva a 0 al llegar al final (efecto loop)
    index = (index + 1) % slideCount;

    // Aplicamos una transformación horizontal al contenedor de slides
    // Cada diapositiva ocupa 100% del ancho, así que multiplicamos por -index
    slides.style.transform = `translateX(${-index * 100}%)`;
});

// FUNCIONALIDAD DEL BOTÓN "ANTERIOR" (Prev)
document.getElementById('prev').addEventListener('click', () => {
    // Decrementa el índice de la diapositiva
    // + slideCount y % slideCount asegura que vuelva al final si se resta de 0
    index = (index - 1 + slideCount) % slideCount;

    // Aplicamos la misma transformación para mostrar la diapositiva correcta
    slides.style.transform = `translateX(${-index * 100}%)`;
});
