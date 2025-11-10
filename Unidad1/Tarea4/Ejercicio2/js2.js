class Alumno {
    constructor(nombre, apellidos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.notas = notas;
        // Ahora hacemos el Object.keys esto hace que calcule el numero de modulos que tiene el alumno
        this.numModulos = Object.keys(notas).length;
    }

    delvolverNombre() {
        let divNombre = document.createElement('div');
        let pNombre = document.createElement('p');

        pNombre.innerHTML = `Alumno: ${this.nombre} ${this.apellidos}`;

        divNombre.appendChild(pNombre);

        return divNombre;
    }

    calcularMedia() {
        let suma = 0;
        let contador = 0;

        for (const modulos in this.notas) {
            if (this.notas[modulos]) {
                suma += this.notas[modulos];
                contador++;
            }
        }

        return contador === 0 ? 0 : suma / contador;
    }

    devolverNotas() {
        let divNotas = document.createElement('div');

        let hnotas = document.createElement("h3");
        hnotas.textContent = "Calificaciones por Modulo:";
        divNotas.appendChild(hnotas);

        for (const modulos in this.notas) {
            let p = document.createElement('p');
            p.textContent = `${modulos}: ${this.notas[modulos].toFixed(1)}`;
            divNotas.appendChild(p);
        }

        let media = document.createElement('p');
        const mediaCalulada = this.calcularMedia();
        media.innerHTML = `Media final: ${mediaCalulada.toFixed(2)}`;

        divNotas.appendChild(media);
        return divNotas;
    }

    mostrarDatos(contenedor = "notas") {
        const divResultado = document.getElementById(contenedor);

        divResultado.innerHTML = "";

        let divNombre = this.delvolverNombre();
        let divNotas = this.devolverNotas();

        divResultado.appendChild(divNombre);
        divResultado.appendChild(divNotas);
    }
}


const alumno1 = new Alumno(
    "Adrian",
    "Rana Escote",
    {
        DIN: 7.5,
        AaD: 8.5,
        Opt: 7.5,
        IPE: 10.0,
        Ingles: 6.0
    }
);

function mostarAlumno2() {
    alumno1.mostrarDatos("notas");
}