function calculateArea() {
    const frontWidth = parseFloat(document.getElementById('front-width').value);
    const backWidth = parseFloat(document.getElementById('back-width').value);
    const rightLength = parseFloat(document.getElementById('right-length').value);
    const leftLength = parseFloat(document.getElementById('left-length').value);

    if (frontWidth && backWidth && rightLength && leftLength) {
        const averageWidth = (frontWidth + backWidth) / 2;
        const averageLength = (rightLength + leftLength) / 2;
        const area = (averageWidth * averageLength).toFixed(2);

        document.getElementById('area-value').textContent = `Luas Tanah: ${area} meter persegi`;
    } else {
        alert("Harap isi semua nilai untuk menghitung luas.");
    }
}
