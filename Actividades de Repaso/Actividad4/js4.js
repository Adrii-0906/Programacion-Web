function factorial() {
    let divResultado = document.getElementById('resultadofactorial');
    divResultado.innerHTML = '';
    let factorial = parseInt(document.getElementById("factorial").value);
    let pText = document.createElement("p");

    let resultado = 1;
    if (factorial === 0 || factorial === 1) {
        pText.textContent = `El numero factorial ${factorial} = 1`;
    } else if (factorial < 0) {
        pText.textContent = `El numero factorial ${factorial} = -1`;
    } else {
        for (let i = 2; i <= factorial; i++) {
            resultado = resultado * i;
        }
        pText.textContent = `El factorial de ${factorial} es ${resultado}`;
    }

    divResultado.appendChild(pText);
}