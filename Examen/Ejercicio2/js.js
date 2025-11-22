

function validarFormulario() {

    let divFormulario = document.getElementById('container');

    let nombreCompleto = document.getElementById('nombre').value;

    let numeroTelefono = document.getElementById('numero').value;

    let direccion = document.getElementById('direccion').value;

    let divTexto = document.getElementById('texto');

    let pText = document.getElementById('parrafo');


    let soloCaracteres = /[^0-9]/;
    let soloNumeros = /^\d+$/;


    if (nombreCompleto === soloNumeros || nombreCompleto === '') {
        pText.textContent = 'El nombre Completo no puede tener numeros, ni estar vacio';
        pText.style.color = 'red';

        nombreCompleto.textContent = '';

    } else if (numeroTelefono === soloNumeros || numeroTelefono === '') {
        pText.textContent = 'El numero de telefono no puede tener caracteres, ni estar vacio';
        pText.style.color = 'red';

        numeroTelefono.textContent = '';
    } else if (direccion === '') {
        pText.textContent = 'La direccion es obligatoria';
        
        numeroTelefono.textContent = '';
    }



    divTexto.appendChild(pText)
    divFormulario.appendChild(divTexto)
}