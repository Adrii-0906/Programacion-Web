const luces = {
    rojo: 'rojo.png',
    amarillo: 'amarillo.jpeg',
    verde: 'verde.jpg'
}

const tiempoLuces = {
    rojo: 5000,
    amarillo: 2000,
    verde: 7000
}

let luzActual = 'rojo';

let luzSemaforo;

function cambiarLuz() {
    switch (luzActual) {
        case 'rojo':
            luzActual = 'verde';
            break;
        case 'verde':
            luzActual = 'amarillo';
            break;
        case 'amarillo':
            luzActual = 'rojo';
            break;
    }

    luzSemaforo.src = luces[luzActual];

    setTimeout(cambiarLuz, tiempoLuces[luzActual]);
}

document.addEventListener('DOMContentLoaded', () => {
    luzSemaforo = document.getElementById('luz');

    luzSemaforo.src = luces.rojo;

    setTimeout(cambiarLuz, tiempoLuces.rojo);
})