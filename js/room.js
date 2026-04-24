// Получаем необходимые элементы
const openModalButton = document.getElementById('openModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeModalButton = document.getElementById('closeModal');
const cancelModalButton = document.getElementById('cancelModal');

// Функция открытия модального окна
function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
}

// Функция закрытия модального окна
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Разрешаем прокрутку страницы
}

// Обработчики событий для кнопок
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
cancelModalButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике на оверлей
modalOverlay.addEventListener('click', function(event) {
    if (event.target === modalOverlay) {
        closeModal();
    }
});

// Закрытие модального окна при нажатии Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

//ВИДЕО (МОДАЛКА)
// Получаем необходимые элементы
const openModalButtonVideo = document.getElementById('openModalVideo');
const modalOverlayVideo = document.getElementById('modalOverlayVideo');
const closeModalButtonVideo = document.getElementById('closeModalVideo');
const video = document.getElementById('video');
//const cancelModalButton = document.getElementById('cancelModal');

// Функция открытия модального окна
function openModalVideo() {
    modalOverlayVideo.classList.add('activeVideo');
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
}

// Функция закрытия модального окна
function closeModalVideo() {
    modalOverlayVideo.classList.remove('activeVideo');
    document.body.style.overflow = ''; // Разрешаем прокрутку страницы
    video.pause();
}

// Обработчики событий для кнопок
openModalButtonVideo.addEventListener('click', openModalVideo);
closeModalButtonVideo.addEventListener('click', closeModalVideo);
//cancelModalButton.addEventListener('click', closeModal);

// Закрытие модального окна при клике на оверлей
modalOverlayVideo.addEventListener('click', function(event) {
    if (event.target === modalOverlayVideo) {
        closeModalVideo();
    }
});

// Закрытие модального окна при нажатии Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modalOverlayVideo.classList.contains('activeVideo')) {
        closeModalVideo();
    }
});