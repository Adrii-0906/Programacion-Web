
let obejtoConDescuento = {
    precio: 0,
    descuento: 0,

    devolverPrecioDescuento: function (precio, decuento) {
        this.precio = precio;
        this.descuento = decuento;

        let precioConDescuento = this.precio - ((this.precio * this.descuento) /100);

        return precioConDescuento;
    }
}

function mostrarPrecioDescuento(idPrecio, idDescuento) {
    let precio = document.getElementById(idPrecio);
    let descuento = document.getElementById(idDescuento);

    let divPrecioFinal = document.getElementById('precioFinal');

    divPrecioFinal.textContent = "";


    divPrecioFinal.textContent = "Precio final con el descuento: " + obejtoConDescuento.devolverPrecioDescuento(idPrecio.value, idDescuento.value);

    idPrecio.value = "";
    idDescuento.value = "";
}