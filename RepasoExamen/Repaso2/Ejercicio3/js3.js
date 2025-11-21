let divMain = document.getElementById('main');

function sumarNumeros() {
    let inputNumero1 = document.getElementById('numero1').value;
    let inputNumero2 = document.getElementById('numero2').value;

    let numero1 = parseInt(inputNumero1);
    let numero2 = parseInt(inputNumero2);

    let suma = numero1 + numero2

    alert("El resultado de la suma es: " + suma);
}