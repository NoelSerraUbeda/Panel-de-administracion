export default (() => {
    const sendData = document.querySelector('.save');
    const eraseData = document.querySelector('.erase');
    const name = document.getElementById('name');
    const email = document.getElementById('mail');
    const pass = document.getElementById('pass');
    const repeatPass = document.getElementById('repeat-pass');

    sendData.addEventListener('click', (event) => {
        event.preventDefault();
        if (name.value === '' || email.value === '' || pass.value === '' || repeatPass.value === '') {
            alert("Todos los campos están vacíos. Por favor, complete el formulario.");
        } else if (pass.value !== repeatPass.value) {
            alert("Las contraseñas no coinciden. Por favor, verifique.");
        } else {
            alert(`¡Todo está correcto, ${name.value}! Formulario enviado correctamente.`);
        }
    });

    eraseData.addEventListener('click', () => {
        name.value = '';
        email.value = '';
        pass.value = '';
        repeatPass.value = '';
    });
})();