let contadorSegundos = 0;
let contadorMinutos = 0;

const divContador = document.getElementById('contador');

function contadorSeg() {
    contadorSegundos++;
    if (contadorSegundos === 60) {
        contadorMinutos++
        contadorSegundos = 0;
    }

    if (contadorMinutos === 2) {
        window.location.href = 'https://iesantoniogala.es/'
    }

    divContador.textContent =  `${contadorMinutos} minutos y ${contadorSegundos} segundos`;
}

const intervalo = setInterval(contadorSeg, 1000);