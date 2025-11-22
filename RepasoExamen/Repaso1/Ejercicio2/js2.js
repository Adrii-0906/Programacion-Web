let segundos = 0;
let esRojo = true;

function inicialSemaforo() {
    segundos++;
    const divSemaforo = document.getElementById('semaforo');



    if (esRojo === true && segundos % 2 === 0) {
        divSemaforo.style.backgroundColor = 'green';
        esRojo = false;
    } else {
        divSemaforo.style.backgroundColor = 'red';
        esRojo = true;
    }
}

const intervalo = setInterval(inicialSemaforo, 2000);