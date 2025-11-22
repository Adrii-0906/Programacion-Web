let inputNumeros = document.getElementById('numeros');

inputNumeros.addEventListener('input', function() {
    const valor = inputNumeros.value

    const numeros = /[^0-9]/;

    if (numeros.test(valor)) {
        inputNumeros.value = '';
    }
});

