function crearTabla() {

    const numFilas = parseInt(document.getElementById('numerosFil').value);

    const numColumnas = parseInt(document.getElementById('numerosCol').value);

    const container = document.getElementById('containerTabla');


    container.innerHTML = '';

    if (isNaN(numFilas) || isNaN(numColumnas) || numFilas <= 0 || numColumnas <= 0) {
        container.innerHTML = '<p>Introduce numeros validos y positivos</p>'
        return;
    }

    const tabla = document.createElement('table');

    for (let i = 1; i <= numFilas; i++) {

        const fila = tabla.insertRow();

        if (i % 2 === 0) {
            fila.style.backgroundColor = "blue";
            fila.style.color = "white";
        }

        for (let j = 1; j <= numColumnas; j++) {
            const celda = fila.insertCell();

            celda.textContent = `${i}`;
        }
    }

    container.appendChild(tabla);
}