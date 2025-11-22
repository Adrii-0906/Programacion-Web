let segundos = 0;

function anadirTitulo() {
    segundos++;
    const container = document.getElementById('div-cronometro');
    const hText = document.createElement('h1');

    if (segundos === 10) {
        hText.textContent = document.getElementById('titulo').value;
        container.appendChild(hText);
    }
}

let intervalo = setInterval(anadirTitulo, 1000);