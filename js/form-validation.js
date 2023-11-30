export default (() => {
    document.querySelectorAll('[data-minlength]').forEach(input => {
        input?.addEventListener('input', () => {
            const valid = input.value.length >= input.getAttribute('data-minlength') || input.value.length === 0;
            input.classList.toggle('error', !valid);
        });
    });

    document.querySelectorAll('[data-onlyletters]').forEach(input => {
        input?.addEventListener('input', () => {
            const valid = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/u.test(input.value);
            input.classList.toggle('error', !valid);
        });
    });
})();



