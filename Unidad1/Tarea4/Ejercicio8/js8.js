class Bus {

    // Ponemos el hastag para hcaerlos privados
    #capacidadMaxima;
    #numeroPasajeros;
    #conductor;

    constructor(capacidadMaxima, conductor) {
        this.#capacidadMaxima = capacidadMaxima;
        this.#conductor = conductor;
        this.#numeroPasajeros = 0;
    }

    getCapacidadMaxima() {
        return this.#capacidadMaxima;
    }

    getNumeroPasajeros(){
        return this.#numeroPasajeros;
    }

    getConductor(){
        return this.#conductor;
    }

    setCapacidadMaxima(capacidadMaxima){
        this.#capacidadMaxima = capacidadMaxima;
    }

    setNumeroPasajeros(numeroPasajeros){
        this.#numeroPasajeros = numeroPasajeros;
    }

    setConductor(conductor){
        this.#conductor = conductor;
    }

    subirPasajeros(numeroPasajeros) {
        this.#numeroPasajeros += numeroPasajeros;
    }

    bajarPasajeros(numeroPasajeros) {
        this.#numeroPasajeros -= numeroPasajeros;
    }

    mostrarInfo(){
        return "Autobús: capacidad máxima: " + this.getCapacidadMaxima() + " , pasajeros actualmente: " + this.getNumeroPasajeros();
    }
}

class Conductor {
    // Ponemos el hastag para hcaerlos privados
    #nombre;
    #licencia;

    constructor(nombre, licencia) {
        this.#nombre = nombre;
        this.#licencia = licencia;
    }

    getNombre(){
        return this.#nombre;
    }

    getLicencia(){
        return this.#licencia;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    setLicencia(licencia){
        this.#licencia = licencia;
    }

    mostrarInfo(){
        return "Nombre del conductor: " + this.getNombre() + ", Licencia: " + this.getLicencia();
    }
}


const conductor1 = new Conductor("Adrian Rana","4354765X");

const bus1 = new Bus(80,conductor1);

function subirPasajeros(idPasajeros) {
    const cantidadPasajeros = document.getElementById(idPasajeros);
    const valorCantidadPasajeros = +cantidadPasajeros.value;

    if (valorCantidadPasajeros <= 0) {
        mostrarError("La cantidad no puede ser menor p igual a 0")
    } else if (((valorCantidadPasajeros + bus1.getNumeroPasajeros()) > bus1.getCapacidadMaxima())){
        mostrarError("No puedes mas pasjeros de los posibles")
    } else {
        bus1.subirPasajeros(valorCantidadPasajeros);
        cargarDatos();
        cantidadPasajeros.value = "";
        mostrarError("")
    }
}

function bajarPasajeros(idPasajeros) {
    const cantidadPasajeros = document.getElementById(idPasajeros);
    const valorCantidadPasajeros = +cantidadPasajeros.value;

    if (valorCantidadPasajeros <= 0) {
        mostrarError("La cantidad no puede ser menor o igual a 0")
    } else if (valorCantidadPasajeros > bus1.getNumeroPasajeros()){
        mostrarError("No puedes bajar mas pasajeros de los que hay en el bus")
    } else {
        bus1.bajarPasajeros(valorCantidadPasajeros);
        cargarDatos();
        cantidadPasajeros.value = "";
        mostrarError("")
    }
}

function mostrarConductor(idConductor) {
    let datos = document.getElementById(idConductor);
    datos.textContent = conductor1.mostrarInfo();
}

function mostrarError(mensaje) {
    let divContenedor = document.getElementById('contenedor')
    let error = document.createElement('p');

    error.textContent = "";

    error.textContent = mensaje;

    divContenedor.appendChild(error)
}

function cargarDatos() {
    let divDatos = document.getElementById("datos");
    divDatos.textContent = "";

    let datosP = document.createElement('p');

    datosP.textContent = bus1.mostrarInfo();

    divDatos.append(datosP);
}