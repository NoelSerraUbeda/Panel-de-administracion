export default (() => {
    const eraseButton = document.querySelector('.erase-button');
    const saveButton = document.querySelector('.save-button button');
    const allFields = document.querySelectorAll('[data-minlength], [data-onlyletters], [data-mail]');
    const originalSVG = saveButton?.innerHTML;

    const resetInputValues = () => 
    document.querySelectorAll('.tab-content.active input').forEach(element => element.value = '');

    const validateInput = (input) => {
        if (input.hasAttribute('data-minlength')) {
            return input.value.length >= input.getAttribute('data-minlength') || input.value.length === 0;
        } else if (input.hasAttribute('data-onlyletters')) {
            return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/u.test(input.value) || input.value.length === 0;
        } else if (input.hasAttribute('data-mail')) {
            const emailRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9._-]*@[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(\.[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)+$/u;
            return emailRegex.test(input.value) || input.value.length === 0;
        }
        return true;
    };

    const applyValidationClass = () => 
    allFields.forEach(input => input.classList.toggle('valid', validateInput(input)));

    allFields.forEach(input => input?.addEventListener('input', () => {
        input.classList.toggle('error', !validateInput(input));
        applyValidationClass();
    }));

    saveButton?.addEventListener('click', () => {
        const allValid = Array.from(allFields).every(input => validateInput(input) && input.value.trim() !== '');

        if (allValid) {
            Message('Todo correcto');
            saveButton.innerHTML = getSavingSVG();
            saveButton.disabled = true;
            setTimeout(() => {
                saveButton.innerHTML = originalSVG;
                saveButton.disabled = false;
            }, 2200);
        } else {
            Message('Faltan datos o son incorrectos');
        }
    });

    eraseButton?.addEventListener('click', resetInputValues);

    const getSavingSVG = () => 
    `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="white" d="M14 12.8C13.5 12.31 12.78 12 12 12C10.34 12 9 13.34 9 15C9 16.31 9.84 17.41 11 17.82C11.07 15.67 12.27 13.8 14 12.8ZM11.09 19H5V5H16.17L19 7.83V12.35C19.75 12.61 20.42 13 21 13.54V7L17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H11.81C11.46 20.39 11.21 19.72 11.09 19ZM6 10H15V6H6V10ZM15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21Z"/>
        <path d="M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21Z" fill="#2EEE1E"/>
    </svg>`;

    const Message = (newMessage) => {
        const message = document.querySelector('.crud-form .messageContainer');
        const messageContent = document.querySelector('.crud-form .messageContainer span');

        messageContent.textContent = newMessage;
        message.classList.add('active');
        saveButton.disabled = true;

        setTimeout(() => {
            message.classList.remove('active');
            saveButton.disabled = false;
        }, 2100);
    };
})();
