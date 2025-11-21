
function crearTabla() {

    let inputFilas = document.getElementById('fila').value;
    let inputCeldas = document.getElementById('celda').value;

    let filasNum = parseInt(inputFilas);
    let celdasNum = parseInt(inputCeldas);

    let tabla = document.getElementById('tabla');
    tabla.innerHTML = '';

    for (let i = 0; i < filasNum; i++) {
        
        let filas = document.createElement('tr');
        

        for (let j = 0; j < celdasNum; j++) {
            let celdas = document.createElement('td');

            filas.appendChild(celdas);
            if (i % 2 === 0) {
                celdas.style.backgroundColor = 'green';
            } else {
                celdas.style.backgroundColor = 'blue';
            }

            
            

            tabla.appendChild(filas);
        }
    }

    
}