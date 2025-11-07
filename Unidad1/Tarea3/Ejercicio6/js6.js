let cronometroSegundos = 0;
let cronometroMinutos = 0;
let cronometroHoras = 0;

let intervalo = null;
let divCronometro;

document.addEventListener('DOMContentLoaded', () => {
    divCronometro = document.getElementById('divCronometro');
    actualizarCronometro(); // Muestra 0:0:0 al cargar
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
}

function resetear() {
    parar();

    cronometroSegundos = 0;
    cronometroMinutos = 0;
    cronometroHoras = 0;

    actualizarCronometro();
}