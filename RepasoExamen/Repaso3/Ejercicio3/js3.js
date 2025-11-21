function resaltado(elemento) {
    
    elemento.style.backgroundColor = 'lightgray';
    elemento.style.color = 'blue';
}

function normal(elemento) {

    elemento.style.backgroundColor = 'white';
    elemento.style.color = 'black';
}

function borrarContenido() {
    let campo = document.getElementsByTagName('input');

    for (let i = 0; i < campo.length; i++) {

        const campoActual = campo[i];

        campoActual.value = '';

        normal(campoActual);
    }
}