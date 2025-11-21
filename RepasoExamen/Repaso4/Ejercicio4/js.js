
setTimeout(() => {

    let contenedor = document.getElementById('container');

    contenedor.innerHTML = '';

    let tabla = document.createElement('table');

    for (let i = 0; i < 5; i++) {
        let filas = document.createElement('tr');

        for (let j = 0; j < 5; j++) {
            let celdas = document.createElement('td');
            filas.appendChild(celdas)

            tabla.appendChild(filas);
        }
    }

    contenedor.appendChild(tabla);
}, 5000)