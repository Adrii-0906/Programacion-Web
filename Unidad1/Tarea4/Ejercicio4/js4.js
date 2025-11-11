class Alumno {
    constructor(nombre, notas) {
        this.nombre = nombre;
        this.notas = notas;
    }

    delvolverNombre() {
        let divNombre = document.createElement('div');
        let pNombre = document.createElement('p');

        pNombre.textContent = "Nombre: " + this.nombre;

        divNombre.appendChild(pNombre);

        return divNombre;
    }

    devolverCalificaciones() {
        let divNotas = document.createElement('div');
        let suma = 0;

        for (const asignatura in this.notas) {
            let pAsignatura = document.createElement('p');
            pAsignatura.textContent = asignatura + ": " + this.notas[asignatura];
            divNotas.appendChild(pAsignatura);

            suma += this.notas[asignatura];
        }

        let media = document.createElement('p');

        media.textContent = "Media del curso: " + (suma / Object.keys(this.notas).length).toFixed(2);

        divNotas.appendChild(media);

        return divNotas;
    }

    mostrarDatosalumno() {
        let divNombre = this.delvolverNombre();
        let divNotas = this.devolverNotas();


        const divResultado = document.getElementById('notas');
        divResultado.textContent = "";

        divResultado.appendChild(divNombre);
        divResultado.appendChild(divNotas);
    }
}

class Curso {
    constructor(nombreCurso, aula, alumnos) {
        this.nombreCurso = nombreCurso;
        this.aula = aula;
        this.alumnos = alumnos;
    }

    mostrarAlumnosCurso() {
        let divResultado = document.getElementById('notas');

        for (const alumno of this.alumnos) {
            divResultado.append(alumno.delvolverNombre());
            divResultado.append(alumno.devolverCalificaciones());
            divResultado.append(document.createElement('br'));
        }
    }


    mostrarInformacion() {
        let divResultado = document.getElementById('notas');
        divResultado.textContent = "";

        let pCurso = document.createElement('p');
        pCurso.textContent = "Nombre del Curso: " + this.nombreCurso;
        divResultado.appendChild(pCurso);

        let pAula = document.createElement('p');
        pAula.textContent = "Aula: " + this.aula;
        divResultado.appendChild(pAula);

        divResultado.appendChild(document.createElement("br"));

        this.mostrarAlumnosCurso();
    }

    buscarAlumnoPorNombre(nombreAlumno) {
        let divResultado = document.getElementById("notas");

        divResultado.textContent = "";

        for (const alumno of this.alumnos) {
            if (alumno.nombre === nombreAlumno) {
                divResultado.append(alumno.delvolverNombre());
                divResultado.append(alumno.devolverNotas());
                return;
            }
        }
        divResultado.textContent = "Alumno no encontrado " + nombreAlumno;
    }
}

const alumno1 = new Alumno("Adrian Rana", {
    DIN: 8.5,
    AaD: 7.0,
    Opt: 9.0,
    IPE: 10.0,
    Ingles: 6.0
});

const alumno2 = new Alumno("Nuria Leon", {
    DIN: 6.5,
    AaD: 5.0,
    Opt: 8.5,
    IPE: 7.0,
    Ingles: 8.0
});

const alumno3 = new Alumno("Lorenzo Delgado", {
    DIN: 9.5,
    AaD: 8.5,
    Opt: 8.0,
    IPE: 6.0,
    Ingles: 8.0
});

const alumnos = [alumno1, alumno2, alumno3];

const curso1 = new Curso("Desarrollo de Aplicaciones Multiplataforma", "2DAM", alumnos);

function mostrarAlumnos3() {
    curso1.mostrarInformacion();
}

function buscarAlumno(idAlumno) {
    curso1.buscarAlumnoPorNombre(document.getElementById(idAlumno).value);
}