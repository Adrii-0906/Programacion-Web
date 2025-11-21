
function resaltar(elemento) {
    

    elemento.style.fontSize='20px'
    elemento.class='resaltado';
   
}


function normal(elemento) {
    elemento.style.fontSize='10px'
    elemento.style.color = 'black';
    elemento.style.border = '1px solid black';

    
}


function escribir(elemento) {

    elemento.classList.add('escribir')
}


function noEscribir(elemento) {
    elemento.style.fontSize='10px'
    elemento.style.color = 'black';
    elemento.style.border = '1px solid black';
}