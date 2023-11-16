document.getElementById('deleteData').addEventListener('click', function () {
    // Obtener elementos
    var nombreInput = document.getElementById('nombreInput');
    var emailInput = document.getElementById('emailInput');
    var dato1Input = document.getElementById('dato1Input');
    var dato2Input = document.getElementById('dato2Input');
    var contrasenaInput = document.getElementById('contrasenaInput');
    var repetirContrasenaInput = document.getElementById('repetirContrasenaInput');

    // Limpiar
    nombreInput.value = '';
    emailInput.value = '';
    dato1Input.value = '';
    dato2Input.value = '';
    contrasenaInput.value = '';
    repetirContrasenaInput.value = '';
});

// Obtener botones
const deleteButtons = document.querySelectorAll('.dataMenu-card-buttons button:first-child');

// Event listener
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.dataMenu-card');
        card.remove();
    });
});