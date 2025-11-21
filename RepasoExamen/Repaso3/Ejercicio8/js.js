function verificarTexto() {
    let texto = document.getElementsByTagName('input');

    let numeros = /\d/;

    for (let i = 0; i < texto.length; i++) {

        let textoActual = texto[i];
        const valor = textoActual.value.trim();

        const vacio = valor.length === 0;

        const numeros1 = numeros.test(valor);

        if (vacio || numeros1) {

            textoActual.classList.add('error'); 
        } else {
            textoActual.classList.remove('error');
        }
    }
}