function cambiarColor() {
    let seleccion = document.getElementById('color').value;
    let divColor = document.getElementsByTagName('div');

    for(let i = 0; i < divColor.length; i++) {
        divColor[i].style.background = seleccion;

    }
}