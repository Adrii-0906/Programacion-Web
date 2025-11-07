const imgArray = [
    'pepe.webp',
    'papi.jpg',
    'ibai.jpg',
    'milica.jpg'
]

let indiceActual = 0;

const banner = document.getElementById('banner');

function cambiarImagen() {
    banner.src = imgArray[indiceActual];

    indiceActual++;

    if (indiceActual >= imgArray.length) {
        indiceActual = 0;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cambiarImagen();

    setInterval(cambiarImagen, 3000);
});