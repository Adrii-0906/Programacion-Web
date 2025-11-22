const divCircuito = document.getElementById('circuito');


class Coche {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
        this.avance = 0;
    }

    arrancar() {
       const divPista = document.createElement("div");
        divPista.className = "pista";
       const divCoche = document.createElement("div");
       divCoche.className = "coche";
       divCoche.style.backgroundColor = this.color;
       divCoche.innerHTML = this.nombre;

       divPista.appendChild(divCoche);
       divCircuito.appendChild(divPista);

       let intervalo = setInterval(() => {

           let velocidad = Math.floor(Math.random() * 5) + 1;

           this.avance += velocidad;

           divCoche.style.width = this.avance + '%';

           if (this.avance >= 100) {
               divCoche.style.width = '100%';
               clearInterval(intervalo);
               alert("El coche " + this.nombre + " ha llegado a la meta");
           }
       }, 100)
    }
}

function iniciarCarrera() {

    const nombrePiloto = document.getElementById('nombrePiloto').value;
    const selectColor = document.getElementById('colorPiloto').value;

    let nuevoCoche = new Coche(nombrePiloto, selectColor);
    nuevoCoche.arrancar();
}