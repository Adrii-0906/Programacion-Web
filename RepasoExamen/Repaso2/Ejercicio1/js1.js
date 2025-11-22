
function crearTabla() {
    let tabla = document.createElement('table');

    for (let i = 0; i < 2; i++) {
        let filasTabla = document.createElement('tr');

        let celda = document.createElement('td');

        celda.innerText = `Celda ${i}` ;

        filasTabla.appendChild(celda);
        tabla.appendChild(filasTabla);
    }

    document.body.appendChild(tabla);
}
