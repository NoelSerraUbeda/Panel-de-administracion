export default (() => {

    const filterModal = document.querySelector('.topnav-filter-form');
    const close = document.querySelector('.filter-input .close');

    document.addEventListener("show-filter-modal", (event => {
        filterModal.classList.toggle('active');
    }));

    close.addEventListener('click', () => {
        filterModal.classList.toggle('active');
    });
})();



