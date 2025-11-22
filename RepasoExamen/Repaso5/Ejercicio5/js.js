let marcaCoches = [

];


function anadirMarca() {
    let container = document.getElementById('container');
    let inputMarca = document.getElementById('marca').value;
    let lista = document.getElementById('listaMarcas')
    let pText = document.createElement('p');

    if(inputMarca === '') {
        pText.textContent = 'El input no puede esta vacio'
        pText.style.color = 'red';

        container.appendChild(pText);
    } else {

        let marca = document.createElement('li');
        marca.textContent = inputMarca;
        lista.appendChild(marca);
        marcaCoches.push(lista);

    }
}


function eliminarMarca() {
    let container = document.getElementById('container');
    let inputMarca = document.getElementById('marca').value;
    let lista = document.getElementById('listaMarcas')
    let pText = document.createElement('p');

     if(inputMarca === '' || inputMarca !== marcaCoches[inputMarca]) {
        pText.textContent = 'El input no puede esta vacio, borrar una marca que no existe'
        pText.style.color = 'red';

        container.appendChild(pText);
    } else {

        let marca = document.createElement('li');
        marca.textContent = inputMarca;
        marcaCoches.push(lista);

    }
}