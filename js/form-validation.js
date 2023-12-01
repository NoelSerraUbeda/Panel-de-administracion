export default (() => {
    const checkAllFields = () => {
        const allFields = document.querySelectorAll('[data-minlength], [data-onlyletters], [data-mail]');
        let allValid = true;

        allFields.forEach(input => {
            const isInputValid = !(input.classList.contains('error'));
            allValid = allValid && isInputValid;

            // Validar campo vacío
            if (input.value.trim() === '') {
                allValid = false;
            }
        });

        return allValid;
    };

    // Función para obtener los datos de nombre y correo
    const getFormData = () => {
        const nombreInput = document.querySelector('[data-onlyletters]');
        const emailInput = document.querySelector('[data-mail]');

        return {
            nombre: nombreInput.value,
            email: emailInput.value
        };
    };

    // Contraseñas
    document.querySelectorAll('[data-minlength]').forEach(input => {
        input?.addEventListener('input', () => {
            const valid = input.value.length >= input.getAttribute('data-minlength') || input.value.length === 0;
            input.classList.toggle('error', !valid);
        });
    });

    // Nombre
    document.querySelectorAll('[data-onlyletters]').forEach(input => {
        input?.addEventListener('input', () => {
            const valid = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/u.test(input.value) || input.value.length === 0;
            input.classList.toggle('error', !valid);
        });
    });

    // Correo
    document.querySelectorAll('[data-mail]').forEach(input => {
        input?.addEventListener('input', () => {
            const emailRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9._-]*@[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(\.[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)+$/u;
            const valid = emailRegex.test(input.value) || input.value.length === 0;
            input.classList.toggle('error', !valid);
        });
    });

    // Botón de guardado
    const saveButton = document.querySelector('.save-button button');
    const originalSVG = saveButton.innerHTML;

    saveButton?.addEventListener('click', () => {
        if (checkAllFields()) {
            // Obtener datos del formulario
            const formData = getFormData();

            // Cambiar SVG
            saveButton.innerHTML = `
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 12.8C13.5 12.31 12.78 12 12 12C10.34 12 9 13.34 9 15C9 16.31 9.84 17.41 11 17.82C11.07 15.67 12.27 13.8 14 12.8ZM11.09 19H5V5H16.17L19 7.83V12.35C19.75 12.61 20.42 13 21 13.54V7L17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H11.81C11.46 20.39 11.21 19.72 11.09 19ZM6 10H15V6H6V10ZM15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21Z" fill="white"/>
                    <path d="M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21Z" fill="#2EEE1E"/>
                </svg>
            `;

            // Restaurar SVG original después de 3 segundos
            setTimeout(() => {
                saveButton.innerHTML = originalSVG;
            }, 3000);

            // Generar tarjeta en crud-table
            generateCrudCard(formData);
        } else {
            alert('Los campos no son válidos o están vacíos');
        }
    });

    // Función para generar una nueva tarjeta en crud-table
    const generateCrudCard = (data) => {
        const crudTable = document.querySelector('.crud-table');

        // Crear elementos para la nueva tarjeta
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('crud-card');

        const cardButtonsContainer = document.createElement('div');
        cardButtonsContainer.classList.add('crud-card-buttons');

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Delete</title>
                <path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" fill="white" />
            </svg>
        `;

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>Edit</title>
                <path d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" fill="white" />
            </svg>
        `;

        const cardDataContainer = document.createElement('div');
        cardDataContainer.classList.add('crud-card-data');

        const nombreElement = document.createElement('h3');
        nombreElement.innerHTML = `NOMBRE: <span>${data.nombre}</span>`;

        const emailElement = document.createElement('h3');
        emailElement.innerHTML = `EMAIL: <span>${data.email}</span>`;

        // Añadir botones a la tarjeta
        cardButtonsContainer.appendChild(deleteButton);
        cardButtonsContainer.appendChild(editButton);

        // Añadir elementos de datos a la tarjeta
        cardDataContainer.appendChild(nombreElement);
        cardDataContainer.appendChild(emailElement);

        // Añadir botones y datos a la tarjeta
        cardContainer.appendChild(cardButtonsContainer);
        cardContainer.appendChild(cardDataContainer);

        // Añadir la nueva tarjeta a crud-table
        crudTable.appendChild(cardContainer);
    };
})();
