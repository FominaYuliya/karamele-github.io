// КНОПКА БУРГЕР
document.addEventListener('DOMContentLoaded', function (){
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('navMenu');

    burger.addEventListener('click', function () {
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');

        document.body.style.overflow = navMenu.classList.contains
        ('active') ? 'hidden' : '';
    });

    const navLinks = document.querySelectorAll('.nav_menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (){
            burger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    document.addEventListener('click', function (e) {
        if(!navMenu.contains(e.target) && !burger.contains(e.target)
            && navMenu.classList.contains('active')) {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});