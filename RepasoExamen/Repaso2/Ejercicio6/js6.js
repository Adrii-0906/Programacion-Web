let divContainer = document.getElementById('container');

function cambiarTamanoImagen() {
    let inputAlto = document.getElementById('alto').value;
    let inputAncho = document.getElementById('ancho').value;

    let imagenAncho = parseInt(inputAncho);
    let imagenAlto = parseInt(inputAlto);

    let imagen = document.getElementById('imagen');

    imagen.style.width = imagenAncho + 'px';
    imagen.style.width = imagenAlto + 'px';
}