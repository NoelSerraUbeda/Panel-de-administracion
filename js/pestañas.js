export default (() => {
    const mainForm = document.getElementById('main');
    const imageForm = document.getElementById('image');
    const mainOption = document.getElementById('main-option');
    const imageOption = document.getElementById('image-option');
    
    imageOption.addEventListener('click', (event) => {
        imageForm.classList.remove('unactive');
        mainForm.classList.add('unactive');
        imageForm.classList.add('active');
    });

    mainOption.addEventListener('click', (event) => {
        mainForm.classList.remove('unactive');
        mainForm.classList.add('active');
        imageForm.classList.add('unactive');
    });


    
})();