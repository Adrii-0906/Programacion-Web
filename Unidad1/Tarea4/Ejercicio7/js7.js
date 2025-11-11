
class Persona {

    // Al poner hastag lo hacemos privado
    #nombre;
    #sesiones;

    constructor(nombre, sesiones) {
        this.#nombre = nombre;
        this.#sesiones = sesiones;
    }

    getNombre() {
        return this.#nombre;
    }

    getSesiones() {
        return this.#sesiones;
    }

    anadirSesiones(nuevaDistancia) {
        this.#sesiones.push(nuevaDistancia);
    }

    devolverMedia() {
        let suma = 0;

        for (const sesion of this.#sesiones) {
            suma += sesion;
        }

        let media = "Media: " + (suma / this.#sesiones.length);

        return media;
    }
}

const persona = new Persona("Adrian Rana", [7,8,10]);

function nuevaSesion(idIngreso) {
    const kmSesion = document.getElementById(idIngreso);
    const valorKmSession = +kmSesion.value;

    if (valorKmSession <= 0) {
        mostrarError("La cantidad no puede ser menor o igual a 0");
    } else {
        persona.anadirSesiones(valorKmSession);
        cargarDatos();
        kmSesion.value = "";
        mostrarError("");
    }
}

function mostrarMedia(idMedia) {
    document.getElementById(idMedia).textContent = persona.devolverMedia() + "Km por cada sesion."
}

function mostrarError(mensaje) {
    let divContenedor = document.getElementById('contenedor')
    let error = document.createElement('p');

    error.textContent = "";

    error.textContent = mensaje;

    divContenedor.appendChild(error)
}

function cargarDatos(){
    document.getElementById("nombre").textContent = "Nombre del cliente: " + persona.getNombre();
    document.getElementById("sesiones").textContent = "Sesiones Registradas: " + persona.getSesiones();
}