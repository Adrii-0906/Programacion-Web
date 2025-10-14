function cambiarTamano() {

    const ancho = parseInt(document.getElementById('ancho').value);
    const alto = parseInt(document.getElementById('alto').value);

    const imagen = document.getElementById('imagen');

    imagen.style.width = ancho + 'px';
    imagen.style.height = ancho + 'px';
}