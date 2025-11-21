let carrito = [];

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}



function agregarAlCarrito() {
    let inputNombre = document.getElementById("nombreProd").value;
    let inputPrecio = document.getElementById("precioProd").value;

    if (inputNombre === "" || inputPrecio === "") return;

    let nuevoProducto = new Producto(inputNombre, inputPrecio);
    carrito.push(nuevoProducto);

    actualizarLista();
}

function actualizarLista() {
    const ulLista = document.getElementById("listaCarrito");
    const h3Total = document.getElementById("totalPrecio");

    ulLista.innerHTML = "";

    let sumaTotal = 0;

    for (let produto of carrito) {
        let liLista = document.createElement("li");

        liLista.textContent = 'Producto: ' + produto.nombre + ' - Precio: ' + produto.precio + '€';
        ulLista.appendChild(liLista);

        sumaTotal += produto.precio;
    }

    h3Total.innerHTML = 'Total: ' + sumaTotal + '€';
}

