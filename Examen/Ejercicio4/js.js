
let segundos = 0;
let intervaloAvanzar;
let intervaloRetroceder;


function incrementarContador() {
    segundos++;
    let divContenedor = document.getElementById('contenedor');

    let hText = document.getElementById('contador');

    hText.textContent = segundos + ' segundos';

    divContenedor.appendChild(hText);


    if (segundos === 100) {
        clearInterval(intervaloAvanzar)
    }

    if (segundos < 0) {
        clearInterval(intervaloRetroceder)
    }


}

function iniciar() {

    if (intervaloAvanzar !== null) {
        intervaloAvanzar = setInterval(incrementarContador, 1000)
        clearInterval(intervaloRetroceder);
    } 
}


function parar() {

    if (intervaloAvanzar !== null || intervaloRetroceder !== null) {
        clearInterval(intervaloAvanzar);
        clearInterval(intervaloRetroceder);
        intervaloAvanzar = null;
        intervaloRetroceder = null;
    }
}

function retrocederContador() {
    segundos--;
    let divContenedor = document.getElementById('contenedor');

    let hText = document.getElementById('contador');

    hText.textContent = segundos + ' segundos';

    divContenedor.appendChild(hText);
}


function retroceder() {

    if (intervaloRetroceder !== null) {
        intervaloRetroceder = setInterval(retrocederContador, 1000)
        clearInterval(intervaloAvanzar)
        
    } 
}