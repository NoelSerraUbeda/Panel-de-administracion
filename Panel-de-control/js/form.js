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

    // Cambiar el contenido del botón al nuevo SVG
        document.getElementById('saveButton').innerHTML = `
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 12.8C13.5 12.31 12.78 12 12 12C10.34 12 9 13.34 9 15C9 16.31 9.84 17.41 11 17.82C11.07 15.67 12.27 13.8 14 12.8ZM11.09 19H5V5H16.17L19 7.83V12.35C19.75 12.61 20.42 13 21 13.54V7L17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H11.81C11.46 20.39 11.21 19.72 11.09 19ZM6 10H15V6H6V10ZM15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21Z" fill="white"/>
    <path d="M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21Z" fill="#2EEE1E"/>
    </svg>
    `;

    // Después de 5 segundos, restaurar el contenido original
    setTimeout(() => {
        document.getElementById('saveButton').innerHTML = `
    <svg width="100%" xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <title>Save-Data</title>
    <path fill="white" d="M11.1 19C11.2 19.7 11.4 20.4 11.7 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H17L21 7V11.7C20.4 11.4 19.7 11.2 19 11.1V7.8L16.2 5H5V19H11.1M12 12C10.3 12 9 13.3 9 15C9 16.3 9.8 17.4 11 17.8C11.1 15.6 12.1 13.7 13.7 12.5C13.2 12.2 12.6 12 12 12M15 10V6H6V10H15M22.8 19.6L21.8 21.3C21.7 21.4 21.6 21.4 21.5 21.4L20.3 21C20 21.2 19.8 21.3 19.5 21.5L19.3 22.8C19.3 22.9 19.2 23 19.1 23H17.1C17 23 16.9 22.9 16.8 22.8L16.6 21.5C16.3 21.4 16 21.2 15.8 21L14.6 21.5C14.5 21.5 14.4 21.5 14.3 21.4L13.3 19.7C13.2 19.6 13.3 19.5 13.4 19.4L14.5 18.6V17.6L13.4 16.8C13.3 16.7 13.3 16.6 13.3 16.5L14.3 14.8C14.4 14.7 14.5 14.7 14.6 14.7L15.8 15.2C16.1 15 16.3 14.9 16.6 14.7L16.8 13.4C16.8 13.3 16.9 13.2 17.1 13.2H19.1C19.2 13.2 19.3 13.3 19.3 13.4L19.5 14.7C19.8 14.8 20.1 15 20.4 15.2L21.6 14.7C21.7 14.7 21.9 14.7 21.9 14.8L22.9 16.5C23 16.6 22.9 16.7 22.8 16.8L21.7 17.6V18.6L22.8 19.4C22.9 19.4 22.9 19.5 22.8 19.6M19.5 18C19.5 17.2 18.8 16.5 18 16.5S16.5 17.2 16.5 18 17.2 19.5 18 19.5C18.8 19.5 19.5 18.8 19.5 18Z" />
    </svg>
        `;
    }, 3000);
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
