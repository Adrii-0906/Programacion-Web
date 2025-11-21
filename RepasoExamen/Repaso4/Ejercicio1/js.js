
let segundos = 0;

function contadorSegundos() {
    segundos++;

    let contador = document.getElementById('contador');

    contador.textContent = segundos + ' segundos';
    contador.style.textAlign = 'center';
    contador.style.fontSize = '60px'
}

let intervalo = setInterval(contadorSegundos, 1000)