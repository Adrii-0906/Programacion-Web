function crearTabla() {
   const cont = document.getElementById('container');

   cont.innerHTML = ``;

   const tabla = document.createElement('table');

   for (let i = 0; i < 2; i++) {
       const fila = document.createElement('tr');
       const celda = document.createElement('td');
       celda.textContent ='Fila ' + (i + 1);
       fila.appendChild(celda);
       tabla.appendChild(fila);
   }

   cont.appendChild(tabla)

}
document.getElementById('botonCrear').addEventListener('click', crearTabla);