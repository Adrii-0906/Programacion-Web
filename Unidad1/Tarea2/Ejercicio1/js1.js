const texto = document.getElementById("textoNumerico");

texto.addEventListener('input', function () {
    const valor = texto.value;

    const digitos = /[^0-9]/;

    if (digitos.test(valor)) {
        texto.value = '';
    }

})