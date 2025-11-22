
function operacion() {
    let inputNumero1 = document.getElementById('numero1').value;
    let inputNumero2 = document.getElementById('numero2').value;

    let numero1 = parseFloat(inputNumero1);
    let numero2 = parseFloat(inputNumero2);


    let seleccion = document.getElementById('operacion');
    let divContenedor = document.getElementById('contenedor')
    let resultado = document.createElement('h3');

    if (seleccion.value == '+') {
        let suma = numero1 + numero2;
        resultado.textContent = numero1 + ' + ' + numero2 + ' = ' + suma;
    } else if (seleccion.value == '-') {
        let resta = numero1 - numero2;
        resultado.textContent = numero1 + ' - ' + numero2 + ' = ' + resta;
    } else if (seleccion.value == '*') {
        let multiplicacion = numero1 * numero2;
        resultado.textContent = numero1 + ' * ' + numero2 + ' = ' + multiplicacion;
    } else if (seleccion.value == '/') {
        let division = numero1 / numero2;
        let cociente = numero1 % numero2
        resultado.textContent = numero1 + ' / ' + numero2 + ' = ' + division + ' | ' + cociente;
    }

    divContenedor.appendChild(resultado);
}