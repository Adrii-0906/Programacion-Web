let segundos = 0;
let minutos = 0;
let horas = 0;

let intervalo = null;

function iniciarContador() {
    segundos++;
    const divCronometro = document.getElementById('contador')
    let cronometro = document.getElementById('cronometro');

    if (segundos === 60) {
        minutos++;
        segundos = 0;
        
    }
    
    if (minutos === 60) {
        horas++;
        minutos = 0;

    }

    cronometro.textContent = horas + ':' + minutos + ':' + segundos;
 
    divCronometro.appendChild(cronometro);
}

function iniciar() {

    if( intervalo !== null) {
        return;
    }

    intervalo = setInterval(iniciarContador, 1000)

}



function parar() {
    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null;
    }

    let tiempoFinal = document.getElementById('cronometro').textContent;

    let nuevoRegistro = document.createElement('h3');
    nuevoRegistro.textContent = "Tiempo: " + tiempoFinal;
    nuevoRegistro.className = "tiempo-guardado";

    let divHistorial = document.createElement('div');

    divHistorial.appendChild(nuevoRegistro);

    document.body.appendChild(divHistorial);

}

function reiniciar() {
    const divCronometro = document.getElementById('contador')
    let cronometro = document.getElementById('cronometro');

    if (intervalo !== null) {
        clearInterval(intervalo);
        intervalo = null;
    }

    segundos = 0;
    minutos = 0;
    horas = 0;

    cronometro.textContent = horas + ':' + minutos + ':' + segundos;
}

