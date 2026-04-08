










let swiperThumbs;
swiperThumbs= new Swiper(".swiper-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiperGallery;
swiperGallery = new Swiper(".swiper-gallery", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiperThumbs,
    },
});


let cards = document.querySelector('.cards');
//let allCards = document.querySelectorAll('.card');
let buttons = document.querySelectorAll('.cards-about-us button');
//let prevBtn = document.querySelector('.prev');
//let nextBtn = document.querySelector('.next');

cards.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        event.currentTarget.scrollLeft += event.currentTarget.clientWidth;
    } else {
        event.currentTarget.scrollLeft -= event.currentTarget.clientWidth;
    }
});

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.currentTarget.classList.contains('next')){
            cards.scrollLeft += cards.clientWidth;
        } else {
            cards.scrollLeft -= cards.clientWidth;
        }
    });
});


let cardsR = document.querySelector('.cardsR');
//let allCardsR = document.querySelectorAll('.cardR');
let buttonsR = document.querySelectorAll('.reviews-cards button');
//let prevBtnR = document.querySelector('.prev');
//let nextBtnR = document.querySelector('.next');

cardsR.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        event.currentTarget.scrollLeft += event.currentTarget.clientWidth;
    } else {
        event.currentTarget.scrollLeft -= event.currentTarget.clientWidth;
    }
});

buttonsR.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.currentTarget.classList.contains('next')){
            cardsR.scrollLeft += cardsR.clientWidth;
        } else {
            cardsR.scrollLeft -= cardsR.clientWidth;
        }
    });
});

// JavaScript
const scrollTopBtn = document.getElementById("scrollTopBtn");
// Показать/скрыть кнопку при прокрутке
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};
// Прокрутка вверх при клике
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"})});


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

