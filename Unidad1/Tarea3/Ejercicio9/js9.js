const imgArray = [
    'pepe.webp',
    'papi.jpg',
    'ibai.jpg',
    'milica.jpg'
]

let indiceActual = 0;
let carrusel;

const banner = document.getElementById('banner');

function cambiarImagen() {
    banner.src = imgArray[indiceActual];

    indiceActual++;

    if (indiceActual >= imgArray.length) {
        indiceActual = 0;
    }
}

function detenerCarrusel() {
    if (carrusel !== null) {
        clearInterval(carrusel);
        // Opcional: Esto evita que se pueda llamar a detenerCarrusel varias veces
        carrusel = null;
        console.log("Secuencia de intercambio detenida por el usuario.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cambiarImagen();

    carrusel = setInterval(cambiarImagen, 3000);
    banner.addEventListener('click', detenerCarrusel)
});