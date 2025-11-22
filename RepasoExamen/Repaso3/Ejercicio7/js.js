function crearTabla() {


    let numeros = document.getElementById('numeros').value;
    let limite = parseInt(numeros);
    let tabla = document.createElement('table');

    for (let i = 0; i <= limite; i++) {

        if (i % 2 === 0) {
            let filas = document.createElement('tr');
            let celda = document.createElement('td');
            celda.textContent = i;
            filas.appendChild(celda)
            tabla.appendChild(filas);
        }

    }

    document.body.appendChild(tabla);

    
}