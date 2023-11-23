document.addEventListener('DOMContentLoaded', function () {
    const desplegar = document.querySelector('.menu-icon');
    const topnavMenu = document.querySelector('.topnav-menu');

    desplegar.addEventListener('click', function () {
        if (topnavMenu.clientHeight === 0) {
            topnavMenu.style.height = '850px'; 
            desplegar.innerHTML = '<path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" fill="white" />';
        } else {
            topnavMenu.style.height = '0px';
            desplegar.innerHTML = '<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />'; 
        }
    });
});