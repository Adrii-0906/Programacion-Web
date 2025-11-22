const imagenes = [
    'ibai.jpg',
    'milica.jpg',
    'papi.jpg',
    'pepe.webp'
];
let indiceImagen = 0;
let carrusel;

const imagen = document.getElementById('imagen');


function cambiarImagen() {

    imagen.src = imagenes[indiceImagen];

    indiceImagen++;

    if (indiceImagen >= imagenes.length) {
        indiceImagen = 0;
    }

}

function detener() {
    if (carrusel !== null) {
        clearInterval(carrusel);
        carrusel = null;
        console.log("Secuencia de intercambio detenida por el usuario.");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    cambiarImagen();

    setInterval(cambiarImagen, 500);

    imagen.addEventListener('click', detener);

});