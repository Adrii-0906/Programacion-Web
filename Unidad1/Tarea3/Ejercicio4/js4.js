let contadorSegundos = 0;

const contenedor = document.getElementById('contenedor');
const imagen = document.getElementById('imagen');

function cambiarATabla() {
    contadorSegundos++;

    if (contadorSegundos === 5) {
        imagen.style.display = 'none';

        crearTabla(5, 5);
    }
}

function crearTabla(filas, columnas) {

    const tabla = document.createElement('table');
    const tbody = document.createElement('tbody');

    for (let i = 0; i < filas; i++) {
        const fila = document.createElement('tr');

        for (let j = 0; j < columnas; j++) {
            const columna = document.createElement('td');
            columna.textContent = i;
            fila.appendChild(columna);
            tbody.appendChild(fila);
        }
    }
    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);
}

const interval = setInterval(cambiarATabla, 1000);