let marcasCoches = [
    'Fiat',
    'Audi',
    'Ford',
    'Kia',
    'Scoda'
]

function AnadirMarca() {
    let marcaCoche = document.getElementById('marcasCoches').value;

    if (marcaCoche.trim() !== '') {
        marcasCoches.push(marcaCoche);
        actualizarMarca();
        marcaCoche.value = '';
    } else {
        alert(`La marca ${marcaCoche} ya existe`);
    }
}

function actualizarMarca() {
    let divResultado = document.getElementById('divResult');
    divResultado.innerHTML = '';

    marcasCoches.forEach(function (marca) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = marca;
        ul.appendChild(li);
        divResultado.appendChild(ul);
    })
}

function eliminarMarca() {
    let marcaCoche = document.getElementById('marcasCoches').value;

    const filtrarMarca = marcasCoches.findIndex( marca => marca.toLowerCase() === marcaCoche.toLowerCase());

    if (filtrarMarca !== -1) {
        marcasCoches.splice(filtrarMarca, 1);
        actualizarMarca();
    } else {
        alert(`No se encontro la marca ${marcaCoche} en la lista`);
    }
}