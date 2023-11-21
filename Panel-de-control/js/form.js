var divExpandido = false;

function toggleAltura() {
    var miDiv = document.getElementById('filtrador');

    if (divExpandido) {
        // Restaurar a la altura original
        miDiv.style.height = '59px';
    } else {
        // Aumentar la altura en 500px
        miDiv.style.height = '600px';  // 100px (altura original) + 500px
    }

    // Cambiar el estado
    divExpandido = !divExpandido;
}
