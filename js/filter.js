export default (() => {
    const filterIcon = document.querySelector('.filter-icon');
    const filterModal = document.querySelector('.topnav-filter-form');

    filterIcon.addEventListener('click', () => {
        filterModal.classList.toggle('active');
    });
})();


