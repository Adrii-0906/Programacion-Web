function crearTablasPares() {

    const input = document.getElementById("numero");

    const  limite = parseInt(input.value);

    const container = document.getElementById("tabla")

    if (isNaN(limite) || limite <= 0) {
        container.innerHTML = '<p> Por favor introduce un nuermo valido</p>'
    }

    const tablaNueva = document.createElement('table');
    const cabecera = tablaNueva.createTHead();
    const filaCabecera = cabecera.insertRow();
    const celdaTitulo = document.createElement('th');
    celdaTitulo.textContent = `Números Pares entre 0 y ${limite}`;
    filaCabecera.appendChild(celdaTitulo);

    const cuerpoTabla = tablaNueva.createTBody()

    for (let i = 0; i < limite; i++) {

        if (i % 2 === 0) {
            const filaNueva = cuerpoTabla.insertRow();

            const celdaNueva = filaNueva.insertCell();

            celdaNueva.textContent = i;
        }
    }

    container.innerHTML = '';

    container.appendChild(tablaNueva);
}