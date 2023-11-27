export default (() => {

    const menuIcon = document.querySelector('.menu-icon');
    const topnavMenu = document.querySelector('.topnav-menu');

    menuIcon.addEventListener('click', function () {
        topnavMenu.classList.toggle('active');
        menuIcon.classList.toggle("active");
    });
})();