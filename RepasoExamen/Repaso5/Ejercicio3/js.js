let carasDado = [
    {src: 'Dado1.jpg'},
    {src: 'Dado2.jpg'},
    {src: 'Dado3.jpg'},
    {src: 'Dado4.jpg'},
    {src: 'Dado5.jpg'},
    {src: 'Dado6.jpg'}
];


function generarNumeroAleatorio() {
    return carasDado[Math.floor(Math.random() * carasDado.length)];
}


function lanzarDado() {
    let contenedor = document.getElementById('container');
    let caraExistente = contenedor.querySelector('img'); 
    let nuevaCara = generarNumeroAleatorio().src;

    if (caraExistente) {
        caraExistente.src = nuevaCara
    } else {
        let cara = document.createElement('img');
        cara.src = generarNumeroAleatorio().src;

        contenedor.appendChild(cara);
    }

}