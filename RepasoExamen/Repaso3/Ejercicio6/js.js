
function cambiarImagen(idImagen) {
    let imagen1 = document.getElementById('imagen1');
    let imagen2 = document.getElementById('imagen2');

    const imagenSrc1 = imagen1.src;
    const imagenSrc2 = imagen2.src;

    if (idImagen == 'imagen1') {
        imagen1.src = imagenSrc2
        imagen2.src = imagenSrc1

    } else if (idImagen == 'imagen2') {
        imagen2.src = imagenSrc1
        imagen1.src = imagenSrc2
    }
}
