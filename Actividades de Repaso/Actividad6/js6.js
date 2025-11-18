const texto1 = document.getElementById("texto1");
const texto2 = document.getElementById("texto2");

texto1.addEventListener("input", function() {
    const numeros = texto1.value.replace(/\D/g, '');
    texto2.value = numeros;
})

function resaltar(element) {
    element.classList.remove('normal');
    element.classList.add('resaltado');
}

function quitarResalto(element) {
    element.classList.remove('resaltado');
    element.classList.add('normal');
}