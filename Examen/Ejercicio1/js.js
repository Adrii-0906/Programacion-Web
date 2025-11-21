
function cambiarDivisa() {

    let divContainer = document.getElementById('container')
    let cantidad = document.getElementById('numero').value;

    let cantidadNumero = parseFloat(cantidad);

    let divisa1 = document.getElementById('divisa1').value;

    let divisa2 = document.getElementById('divisa2').value;

    let divTexto = document.getElementById('texto')

    let pText = document.getElementById('parrafo');


    if (divisa1 === divisa2) {
        pText.textContent = 'No se puede cambiar porque es el mismo tipo de moneda'
        divTexto.appendChild(pText);
    } else {

        if (divisa1 === 'Euros' && divisa2 === 'Dolares') {

            let resultado = cantidadNumero * 1.13;

            pText.textContent = resultado + 'Dolares';
        } else if (divisa1 === 'Euros' && divisa2 === 'Libras') {
            let resultado = cantidadNumero * 0.88;

            pText.textContent = resultado + 'Libras';
        } else if (divisa1 === 'Dolares' && divisa2 === 'Euros') {
            let resultado = cantidadNumero / 1.13;

            pText.textContent = resultado + 'Euros';
        } else if (divisa1 === 'Dolares' && divisa2 === 'Libras') {
            let resultado = cantidadNumero / 1.31;

            pText.textContent = resultado + 'Libras';
        } else if (divisa1 === 'Libras' && divisa2 === 'Euros') {
            let resultado = cantidadNumero / 0.88;

            pText.textContent = resultado + 'Euros';
        } else if (divisa1 === 'Libras' && divisa2 === 'Dolares') {
            let resultado = cantidadNumero / 1.31;

            pText.textContent = resultado + 'Dolares';
        }


        divTexto.appendChild(pText);
        divContainer.appendChild(divTexto)

    }
}