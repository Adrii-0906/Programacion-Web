
function intercambio(idImagen) {

    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    const src1 = img1.src;
    const src2 = img2.src;

    if (idImagen === 'img1') {

        img1.src = src2;

        img2.src = src1;
    } else if (idImagen === 'img2') {

        img2.src = src1;

        img1.src = src2;

    }
}