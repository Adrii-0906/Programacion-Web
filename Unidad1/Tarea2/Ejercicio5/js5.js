
function crearDivs() {
    const container = document.body;

    for (let i = 0; i < 255; i++) {
        const nuevoDiv = document.createElement('div');

        const color = `rgb(${i}, ${i}, ${i})`;

        nuevoDiv.style.backgroundColor = color;

        nuevoDiv.classList.add('divsColores');

        nuevoDiv.textContent = i;

        container.appendChild(nuevoDiv);
    }
}