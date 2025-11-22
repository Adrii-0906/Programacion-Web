
function agregarProducto() {
    const ulLista = document.getElementById('listaCompra')
    const liLista = document.createElement('li');
    const inputLista = document.getElementById('productoInput').value;

    if (inputLista === '') {
        alert('Inserte primero el producto')
        return;
    }

    liLista.innerText = inputLista;
    ulLista.appendChild(liLista);
}