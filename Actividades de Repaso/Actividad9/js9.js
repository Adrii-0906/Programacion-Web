class Compra {
    constructor(prodcutos, fecha, unidades) {
        this.prodcutos = prodcutos;
        this.fecha = fecha;
        this.unidades = unidades;
    }

    getDetalles() {
        let lista = `Fecha: <strong>${this.fecha}</strong><br>`;
        lista += '<ul>';

        // Generamos la lista de productos y unidades
        for (let i = 0; i < this.prodcutos.length; i++) {
            lista += `<li>${this.unidades[i]} x ${this.prodcutos[i]}</li>`;
        }
        lista += '</ul>';

        return lista;
    }
}

let historialCompra = [
    new Compra(["Pizza", "Hamburguesa", "Calzone"], '2025-11-10', [4,6,3]),
    new Compra(["CocaCola", "Fanta de Naranja", "Aquarius"], '2025-11-17', [5,6,7]),
    new Compra(["Varido de Chuches", "Patatas Normales", "Patatas Campesinas"], '2025-11-20', [9,7,8]),

];

function mostrarCompraSelecciona() {
    const input =  document.getElementById('indiceCompra');
    const divResultado = document.getElementById('resultado');

    const indice = parseInt(input.value);

    if (isNaN(indice) || indice < 0 || indice >= historialCompra.length) {
        divResultado.innerHTML = '<p> El índice introducido no es válido.</p>';
        return;
    }

    const compra = historialCompra[indice];

    divResultado.innerHTML = `
        <h5>Compra #${indice + 1}</h5>
        ${compra.getDetalles()}
    `;
}


function inicializarVista() {
    const total = historialCompra.length;

    document.getElementById('totalCompras').textContent = total;

    document.getElementById('maxIndice').textContent = total > 0 ? total - 1 : 0;

    mostrarCompraSelecciona();
}

window.onload = inicializarVista();