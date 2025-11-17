let carasDado = [
    {src: "sources/Dado1.jpg"},
    {src: "sources/Dado2.jpg"},
    {src: "sources/Dado3.jpg"},
    {src: "sources/Dado4.jpg"},
    {src: "sources/Dado5.jpg"},
    {src: "sources/Dado6.jpg"}
];

function generarNumeroAleatorio() {
    return carasDado[Math.floor(Math.random() * carasDado.length)];
}

function sacarCara() {
    let contenedor = document.getElementById('contenedor');
    let caraExistente = contenedor.querySelector('img'); // Esto busca si existe ya la etiqueta img, si la encuentra la guarda en un variable
    let nuevaCara = generarNumeroAleatorio().src;

    if (caraExistente) {
        caraExistente.src = nuevaCara
    } else {
        let cara = document.createElement('img');
        cara.src = generarNumeroAleatorio().src;

        contenedor.appendChild(cara);
    }

}

