
function coloresDiv() {
    const container = document.body;

    for (let i = 0; i < 256; i++) {
        let colorDiv = document.createElement('div');

        let colores = `rgb(${i}, ${i}, ${i})`;
        colorDiv.style.backgroundColor = colores;
        
        container.appendChild(colorDiv);
    }
}