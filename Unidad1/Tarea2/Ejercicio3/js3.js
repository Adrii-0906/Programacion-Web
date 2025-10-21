
function manejarEnfoque(elemento) {

    elemento.style.backgroundColor = "lightgray";

    elemento.style.color = 'blue';
}

function restaurarEnfoque(elemento) {

    elemento.style.backgroundColor = 'white';

    elemento.style.color = "black"
}

function borrarTodo() {
    const campos = document.getElementsByTagName('input');

    for (let i = 0; i < campos.length; i++) {
        const campoActual = campos[i];

        campoActual.value = '';

        restaurarEnfoque(campoActual);
    }
}
