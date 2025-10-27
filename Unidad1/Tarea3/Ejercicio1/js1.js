let contadorSegundos = 0;

const divContador = document.getElementById('contador');

function contadorSeg() {
    contadorSegundos++;

    divContador.textContent = `Pagina abierta hace ${contadorSegundos} segundos`;
}

const intervalo = setInterval(contadorSeg, 1000);