const images = [...document.querySelectorAll('.image')];

//popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
//const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;
console.log(popup);
images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('act');
    })
})

const updateImage = (i) => {
    let path = `../img/gallery-img/img${i+1}.jpg`;
    console.log(path);
    largeImage.src = path;
    //imageName.innerHTML = path;
    if(i+1 < 10){
        imageIndex.innerHTML = `0${i+1}`;
    }else{
        imageIndex.innerHTML = `${i+1}`;
    }

    index = i;
}
console.log(updateImage);
closeBtn.addEventListener('click', () => {
    popup.classList.toggle('act');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        updateImage(index + 1);
    }
})

// Get all <video> elements.
const videos = document.querySelectorAll('video');

// Pause all <video> elements except for the one that started playing.
function pauseOtherVideos({ target }) {
    for (const video of videos) {
        if (video !== target) {
            video.pause();
        }
    }
}

// Listen for the 'play' event on all the <video> elements.
for (const video of videos) {
    video.addEventListener('play', pauseOtherVideos);
}