const imagenes = [
    'ibai.jpg',
    'milica.jpg',
    'papi.jpg',
    'pepe.webp'
];
let indiceImagen = 0;

let imagen = document.getElementById('imagen');


function cambiarImagen() {

    

    imagen.src = imagenes[indiceImagen];

    indiceImagen++;

    if (indiceImagen >= imagenes.length) {
        indiceActual = 0;
    }

}


document.addEventListener('DOMContentLoaded', () => {
    cambiarImagen();

    setInterval(cambiarImagen, 3000);
});