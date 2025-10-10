function sumarValores() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const suma = (numero1 + numero2);

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
    document.getElementById('container').innerHTML = tablaHTML;
}