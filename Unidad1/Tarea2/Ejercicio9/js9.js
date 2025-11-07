function validarTexto() {

    const inputs = document.getElementsByClassName('datos');

    const patronNumerico = /\d/;

    const mensajeErrorTexto = "El campo es requerido o es un número"

    for (let i = 0; i < inputs.length; i++) {

        const inputActual = inputs[i];
        const container = inputActual.parentNode;
        const valor = inputActual.value.trim();

        inputActual.classList.remove('error');

        const mensajeAnterior = document.getElementById(`error_msg_${inputActual.id}`);
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }

        const vacio = valor.length === 0;

        const numeros = patronNumerico.test(valor);

        if (vacio || numeros) {
            inputActual.classList.add('error');

            const mensajeNuevo = document.createElement('span');
            mensajeNuevo.textContent = mensajeErrorTexto;
            mensajeNuevo.classList.add('mensaje_error');
            mensajeNuevo.id = `error_msg_${inputActual.id}`;

            inputActual.insertAdjacentElement('afterend', mensajeNuevo);
        }
    }
}