function generateCard() {
    // Valores
    var nombre = document.getElementById('nombreInput').value;
    var email = document.getElementById('emailInput').value;
    var dato1 = document.getElementById('dato1Input').value;
    var dato2 = document.getElementById('dato2Input').value;
    var pass = document.getElementById('contrasenaInput').value;
    var pass2 = document.getElementById('repetirContrasenaInput').value;

    var mensajePopup = document.getElementById('popup-message');

    // Verificar campos
    if (nombre === '' || email === '' || dato1 === '' || dato2 === '' || pass === '') {
        mensajePopup.textContent = "Todos los campos deben ser completados.";
        mostrarMensajeEmergente();
        return;
    }

    // Contraseñas diferentes
    if (pass !== pass2) {
        mensajePopup.textContent = "Las contraseñas no coinciden. Por favor, inténtelo de nuevo.";
        mostrarMensajeEmergente();
        return;
    }

    function mostrarMensajeEmergente() {
        var popupContainer = document.getElementById('popup-container');
        popupContainer.style.display = 'flex';
        setTimeout(function () {
            popupContainer.style.display = 'none';
        }, 2000);
    }

    // Crear nuevo elemento
    var card = document.createElement('div');
    card.className = 'dataMenu-card';

    // Contenido tarjeta
    card.innerHTML = `
        <div class="dataMenu-card-buttons">
            <button class="delete"><svg width="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>Delete</title>
                    <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" fill="white" />
                </svg></button>
            <button class="edit"><svg width="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>Edit</title>
                    <path d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" fill="white" />
                </svg></button>
        </div>
        <div class="dataMenu-card-data">
            <h3>NOMBRE: <span>${nombre}</span></h3>
            <h3>EMAIL: <span>${email}</span></h3>
            <h3>DATA: <span>${dato1}/${dato2}/${pass}</span></h3>
        </div>
    `;

    // Añadir al contenedor
    document.getElementById('cardContainer').appendChild(card);
    setupDeleteButtons();
}

function setupDeleteButtons() {
    // Obtener botones
    const deleteButtons = document.querySelectorAll('.dataMenu-card-buttons button:first-child');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.dataMenu-card');
            card.remove();
        });
    });
}
setupDeleteButtons();

function vaciarCampos() {
    // Obtén referencias a todos los campos de entrada
    var nombreInput = document.getElementById('nombreInput');
    var emailInput = document.getElementById('emailInput');
    var dato1Input = document.getElementById('dato1Input');
    var dato2Input = document.getElementById('dato2Input');
    var contrasenaInput = document.getElementById('contrasenaInput');
    var repetirContrasenaInput = document.getElementById('repetirContrasenaInput');

    // Vacía los valores de los campos
    nombreInput.value = '';
    emailInput.value = '';
    dato1Input.value = '';
    dato2Input.value = '';
    contrasenaInput.value = '';
    repetirContrasenaInput.value = '';
}
