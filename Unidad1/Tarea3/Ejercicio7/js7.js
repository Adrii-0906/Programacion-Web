let cronometroSegundos = 0;
let cronometroMinutos = 0;
let cronometroHoras = 0;

let intervalo = null;
let divCronometro;
let divTiempoParada;

document.addEventListener('DOMContentLoaded', () => {
    divCronometro = document.getElementById('divCronometro');
    divTiempoParada = document.getElementById("tiempoParada");
    actualizarCronometro();
});
function actualizarCronometro() {
    divCronometro.textContent = `${cronometroHoras}:${cronometroMinutos}:${cronometroSegundos}`;
}

function incrementar() {
    cronometroSegundos++;

    if (cronometroSegundos === 60) {
     cronometroMinutos++;
     cronometroSegundos = 0;
    }

    if (cronometroMinutos === 60) {
     cronometroHoras++;
     cronometroMinutos = 0;
    }
    actualizarCronometro();
}
function iniciarReaundar() {

    if (intervalo === null) {
        intervalo = setInterval(incrementar, 1000)
    }
}

function parar() {
    clearInterval(intervalo);
    intervalo = null;

    const tiempoActual = `${cronometroHoras}:${cronometroMinutos}:${cronometroSegundos}`;

    const nuevoRegistro = document.createElement('h2');
    nuevoRegistro.textContent = `${tiempoActual}`;
    nuevoRegistro.style.textAlign = 'center'

    if (divTiempoParada) {
        divTiempoParada.appendChild(nuevoRegistro);
    }
}

function resetear() {
    parar();

    cronometroSegundos = 0;
    cronometroMinutos = 0;
    cronometroHoras = 0;

    actualizarCronometro();

    if (divTiempoParada) {
        divTiempoParada.textContent = "";
    }
}