let divMain = document.getElementById('main');

function mostrarTabla() {
    let inputNumero1 = document.getElementById('numero1').value;
    let inputNumero2 = document.getElementById('numero2').value;

    let numero1 = parseInt(inputNumero1);
    let numero2 = parseInt(inputNumero2);

    let suma = numero1 + numero2

    const tablaHTML = `
    <table>
        <th>Numero1</th>
        <th>Numero2</th>
        <th>Suma</th>
        <tr>
            <td>${numero1}</td>
            <td>${numero2}</td>
            <td>${suma}</td>
        </tr>
    
    </table>
    `

    divMain.innerHTML = tablaHTML;
}