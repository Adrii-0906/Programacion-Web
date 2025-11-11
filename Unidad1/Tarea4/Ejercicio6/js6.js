function Cliente(nombre, dinero) {
    const _nombre = nombre;
    let _dinero = dinero

    this.getNombre = function () {
        return _nombre
    }

    this.getDinero = function () {
        return _dinero
    }

    this.ingresar = function (cantidad) {
        return _dinero += cantidad;
    }

    this.retirar = function (cantidad) {
        return _dinero -= cantidad;
    }
}

const cliente1 = new Cliente("Adrian Rana", 14000);

function ingresarDinero(idIngreso) {
    const ingreso = document.getElementById(idIngreso);
    const valorIngreso = +ingreso.value;

    if (valorIngreso <= 0) {
        mostrarError("El ingreso no puede ser 0 euros");
    } else {
        cliente1.ingresar(valorIngreso);
        cargarDatos();
        ingreso.value = "";
        mostrarError("");
    }
}

function retirarDinero(idIngreso) {
    const ingreso = document.getElementById(idIngreso);
    const valorIngreso = +ingreso.value;

    if (valorIngreso <= 0) {
        mostrarError("No puedes retirar 0 euros")
    } else if (valorIngreso > cliente1.getDinero()) {
        mostrarError("No puedes retirar mas dinero del que tienes")
    } else {
        cliente1.retirar(valorIngreso);
        cargarDatos();
        ingreso.value = "";
        mostrarError("");
    }
}




function mostrarError(mensaje) {
    let divContenedor = document.getElementById('contenedor')
    let error = document.createElement('p');

    error.textContent = "";

    error.textContent = mensaje;

    divContenedor.appendChild(error)
}

function cargarDatos(){
    document.getElementById("cliente").textContent = "Nombre del cliente: " + cliente1.getNombre();
    document.getElementById("dinero").textContent = "Saldo bancario: " + cliente1.getDinero();
}