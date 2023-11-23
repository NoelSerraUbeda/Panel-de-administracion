document.addEventListener('DOMContentLoaded', function () {
    const desplegar = document.querySelector('.menu-icon');
    const topnavMenu = document.querySelector('.topnav-menu');

    desplegar.addEventListener('click', function () {
        topnavMenu.classList.toggle('expanded');
    });
});
