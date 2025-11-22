const divPedido = document.getElementById('zonaCocina');


class Pedido {
    constructor(plato) {
        this.plato = plato;
    }

    cocinar() {
        const divCocinarPedido = document.createElement('div');
        divCocinarPedido.style.backgroundColor = 'yellow';
        divCocinarPedido.innerHTML = '<h4>Preparando ' + this.plato + '...</h4>'

        divPedido.appendChild(divCocinarPedido);

        setTimeout(() => {
            divCocinarPedido.style.backgroundColor = 'green';
            divCocinarPedido.innerHTML = '<h4>' + this.plato + ' Listooo!!</h4>';
        }, 3000);
    }
}

function hacerPedido() {
    const inputPedido = document.getElementById('inputPlato').value;

    let nuevoPedido = new Pedido(inputPedido);
    nuevoPedido.cocinar();
}