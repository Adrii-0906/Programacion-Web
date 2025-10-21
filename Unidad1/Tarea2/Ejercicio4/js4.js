
function cambiarColor() {
    const selector = document.getElementById('selectorColores');

    const nuevoColor = selector.value;

    const divs = document.getElementsByClassName('container');

    for (let i = 0; i < divs.length; i++) {
        const divsActual = divs[i];

        divsActual.style.backgroundColor = nuevoColor;
    }
}
