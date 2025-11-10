let alumno = {
    nombre: "Adrian",
    apellidos: "Rana Escote",

    notas: {
        DIN: 7.5,
        AaD: 8.5,
        Opt: 7.5,
        IPE: 10.0,
        Ingles: 6.0
    },

    delvolverNombreCompleto: function () {
        let divNombre = document.createElement('div');
        let pNombreCompleto = document.createElement('p');

        pNombreCompleto.textContent = "Nombre: " + this.nombre + " " + this.apellidos;

        divNombre.appendChild(pNombreCompleto);

        return divNombre;
    },

    devolverNotas: function () {
        let divNotas = document.createElement('div');

        let suma = 0;

        for (const modulos in this.notas) {
            let p = document.createElement('p');

            p.textContent = modulos + ": " + this.notas[modulos];

            divNotas.appendChild(p);

            suma += this.notas[modulos];
        }

        let media = document.createElement('p');

        media.textContent = "Media del curso: " + (suma / 5);

        divNotas.appendChild(media);

        return divNotas;
    },

    mostrarDatos: function () {

        let divNombre = this.delvolverNombreCompleto();
        let divNotas = this.devolverNotas();

        const divResultado = document.getElementById("notas");
        divResultado.textContent = "";

        divResultado.appendChild(divNombre);
        divResultado.appendChild(divNotas);
    }
};

function mostrarAlumno() {
    alumno.mostrarDatos();
}