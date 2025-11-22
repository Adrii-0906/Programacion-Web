let segundos = 0;

let imagenes = [
    {src: 'Dado1.jpg'},
    {src: 'Dado2.jpg'},
    {src: 'Dado3.jpg'},
    {src: 'Dado4.jpg'},
    {src: 'Dado5.jpg'},
    {src: 'Dado6.jpg'},
    {src: 'ibai.jpg'},
    {src: 'papi.jpg'},
    {src: 'milica.jpg'},
    {src: 'pepe.webp'}
]

let frases = [
    'Ibai delgado',
    'Pereeira Castor',
    'Milica boxeadora',
    'Papi el mejor',
    'Dado de la muerte',
    'Dado de la suerte',
    'Milica con david',
    'Ibai en el gym',
    'Papi en inazuma eleven',
    'Nombre random'
]


let numeroAleatorioImg = Math.floor(Math.random() * 10);
let numeroAleatorioFrase = Math.floor(Math.random() * 10);

function cambiarImagen() {
    let divContainer = document.getElementById('container');

    let img = document.getElementById('imagen');

    let pText = document.getElementById('parrafo');

    img.src = imagenes[numeroAleatorioImg].src;

    pText.textContent = frases[numeroAleatorioFrase];

    divContainer.appendChild(img);
    divContainer.appendChild(textContent)

}


let intervalo = setInterval(cambiarImagen, 1000)