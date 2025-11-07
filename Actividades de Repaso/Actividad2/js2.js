

function devolverRandom() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');

    const numIntRandom = Math.floor(Math.random() * 50);

    if (numero === numIntRandom) {
        resultado.innerHTML = 'Has acertado el numero ' + numero;
    } else {
        resultado.innerHTML = 'No has acertado el numero. El numero correcto era ' + numIntRandom;
    }
}