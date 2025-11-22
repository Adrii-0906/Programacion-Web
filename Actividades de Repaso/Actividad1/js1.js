function resultadoOperacion() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const operador = document.getElementById('operacion');
    const numero2 = parseInt(document.getElementById('numero2').value);
    const resultado = document.getElementById('resultado');

    const operadorSelect = operador.value;
    if (operadorSelect === 'suma') {

        let resultadoSuma = numero1 + numero2;
        resultado.innerHTML = 'El resultado es ' + resultadoSuma;

    } else if (operadorSelect === 'resta') {
        let resultadoResta = numero1 - numero2;

        resultado.textContent = 'El resultado es ' + resultadoResta;
    } else if (operadorSelect === 'multiplicacion') {
        let resultadoMultiplicacion = numero1 * numero2;

        resultado.textContent = 'El resultado es ' + resultadoMultiplicacion;
    } else if (operadorSelect === 'division') {
        let resultadoDivision = numero1 / numero2;

        resultado.textContent = 'El resultado es ' + resultadoDivision;


    } else {
        alert('Datos no validos');
    }
}