
function sacarFactorial() {

    let container = document.getElementById('contenedor');

    let inputNumero = document.getElementById('numero').value;

    let numero = parseInt(inputNumero);

    let resultado = 1;

    let hText = document.createElement('h3');

    if (numero === 0 || numero === 1) {
        hText.textContent = `El numero factorial ${numero} = 1`;
    } else if (numero < 0) {
        hText.textContent = `El numero factorial ${numero} = -1`;
    } else {
        for (let i = 2; i <= numero; i++) {
            resultado = resultado * i;
        }
        hText.textContent = `El factorial de ${numero} es ${resultado}`;
    }

    container.appendChild(hText);
}