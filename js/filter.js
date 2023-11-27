export default (() => {

    const filterIcon = document.querySelector('.filter-icon');
    const filterModal = document.querySelector('.topnav-filter-form');

    filterIcon.addEventListener('click', function () {
        filterModal.classList.add('active');
    });
})();

