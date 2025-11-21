function verificarTexto() {
    let texto = document.getElementsByTagName('input');

    let numeros = /\d/;
    let mensajeError = 'El campo no puede esta ni vacio, ni tener numeros';

    for (let i = 0; i < texto.length; i++) {

        let textoActual = texto[i];
        const valor = textoActual.value.trim();

        const mensajeAnterior = document.getElementById(`error_msg_${inputActual.id}`);
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }

        const vacio = valor.length === 0;

        const numeros1 = numeros.test(valor);

        

        if (vacio || numeros1) {

            textoActual.classList.add('error');
            let campoSpan = document.createElement('span');
            campoSpan.style.color = 'red';
            campoSpan.textContent = mensajeError;

            inputActual.insertAdjacentElement('afterend', mensajeNuevo);

        } else {
            textoActual.classList.remove('error');
        }
    }
}