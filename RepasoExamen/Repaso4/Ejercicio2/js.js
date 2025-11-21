let segundos = 55;
let minutos = 0;

function contadorSegundos() {
    segundos++;

    if (segundos === 60) {
        minutos++;
        segundos = 0
    }

    let contador = document.getElementById('contador');

    contador.textContent = minutos + ':' + segundos;
    contador.style.textAlign = 'center';
    contador.style.fontSize = '60px'
}

let intervalo = setInterval(contadorSegundos, 1000)