export default (() => {

    const deleteModal = document.querySelector('.delete-area');
    const close = document.querySelector('.delete-options .close');

    document.addEventListener("show-destroy-modal", (event => {
        deleteModal.classList.toggle('active');
    }));

    close.addEventListener('click', () => {
        deleteModal.classList.toggle('active');
    });
})();
