export default (() => {
    const mainForm = document.getElementById('main');
    const imageForm = document.getElementById('image');
    const mainOption = document.getElementById('main-option');
    const imageOption = document.getElementById('image-option');
    

    const toggleForms = () => {
        mainForm.classList.toggle('unactive');
        mainOption.classList.toggle('selected');
        imageOption.classList.toggle('selected');
        imageForm.classList.toggle('active');
    };

    imageOption.addEventListener('click', toggleForms);
    mainOption.addEventListener('click', toggleForms);
})();

