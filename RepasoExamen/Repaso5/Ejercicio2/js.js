function numeroRandom(max) {
    return Math.floor(Math.random() * max)
}

function adivinarNumero() {

    let divContainer = document.getElementById('container');
    let numero = document.getElementById('numero').value;
    let hText = document.createElement('h3');

    let numeroEntero = parseInt(numero);

    let numeroAleatorio = numeroRandom(5)

    if (numeroEntero != numeroAleatorio) {
        hText.textContent = "No has adivinado el numero";
    } else {
        hText.textContent = "Has adivinado el numero";
    }

    divContainer.appendChild(hText);
}