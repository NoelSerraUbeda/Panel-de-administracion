export default (() => {
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
    
})();



