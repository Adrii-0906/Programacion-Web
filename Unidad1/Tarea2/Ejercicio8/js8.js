function validarTexto() {

    const inputs = document.getElementsByClassName('datos');

    const patronNumerico = /\d/;

    for (let i = 0; i < inputs.length; i++) {

        const inputActual = inputs[i];
        const valor = inputActual.value.trim();

        inputActual.classList.remove('error');

        const vacio = valor.length === 0;

        const numeros = patronNumerico.test(valor);

        if (vacio || numeros) {
            inputActual.classList.add('error');
        }
    }
}