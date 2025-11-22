class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrar(){
        const divUsuario = document.getElementById('zonaFichas');
        const divDatos = document.createElement('div');
        divDatos.innerHTML = '<p>Nombre: ' + this.nombre + '<br>' +' Edad: ' + this.edad + '</p>';

        divUsuario.appendChild(divDatos);
    }
}

function crearUsuario(){
    const inputNombre = document.getElementById('nombreUser').value;
    const inputEdad = document.getElementById('edadUser').value;

    let nuevoUsuario = new Usuario(inputNombre, inputEdad);

    nuevoUsuario.mostrar();
}