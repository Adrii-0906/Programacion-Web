let segundosActivos = 0;
let intervalo;

function crearTabla() {
    const n = Math.floor(segundosActivos / 5);
    const contenedorTabla = document.getElementById("div-tabla");

    if (n > 0) {
        const tabla = document.createElement("table");
        const cuerpo = document.createElement("tbody");

        for (let i = 0; i < n; i++) {
            const fila = document.createElement("tr");
            const celda = document.createElement("td");
            celda.textContent = `Fila ${i + 1} (${(i + 1) * 5} segundos)`;
            fila.appendChild(celda);
            cuerpo.appendChild(fila);
        }

        tabla.appendChild(cuerpo);
        contenedorTabla.appendChild(tabla);
    }
}

function iniciarContador() {
    segundosActivos++;
    if (segundosActivos % 5 === 0) {
        crearTabla();
    }
}

function inicializarPrograma() {
    // Llama a crearTabla una vez para que se muestre el estado inicial (0 filas)
    crearTabla();

    // Configura el intervalo para que la función iniciarContador se ejecute cada 1000ms (1 segundo)
    intervalo = setInterval(iniciarContador, 1000);
}

inicializarPrograma();