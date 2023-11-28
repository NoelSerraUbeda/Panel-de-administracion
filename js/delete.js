export default (() => {
    const deleteButton = document.querySelectorAll('.delete');
    const deleteModal = document.querySelector('.delete-data');

    deleteButton.forEach(deleteButton => {
        deleteButton.addEventListener('click', (event) => {
            event.preventDefault();
            deleteModal.classList.toggle('active');
        });
    });
})();


