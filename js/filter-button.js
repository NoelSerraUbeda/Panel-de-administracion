export default (() => {

    const filterIcon = document.querySelector('.filter-icon');
    const topnavFilter = document.querySelector('.topnav-filter');

    filterIcon.addEventListener('click', function () {
        topnavFilter.classList.toggle('filter-open');
        filterIcon.classList.toggle('rotated');
    });
})();