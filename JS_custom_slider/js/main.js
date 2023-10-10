const next = document.getElementById('next');
const prev = document.getElementById('prev');
const SLIDER = document.querySelector('.slider');
const slidesCollection = document.querySelectorAll('.slide');
const slideStyles = getComputedStyle(slidesCollection[0]);
const slideWidth = parseInt(slideStyles.marginRight) + parseInt(slideStyles.width);

let activeSlide = 0;

function goNext() {
    if(activeSlide < slidesCollection.length - 3) {
        activeSlide < slidesCollection.length ? activeSlide++ : activeSlide;
        SLIDER.style.transform = `translateX(-${activeSlide * slideWidth}px)`
    }
}

function goPrev() {

    if(activeSlide > 0) {
        activeSlide > 0 ? activeSlide-- : activeSlide;
        SLIDER.style.transform = `translateX(-${activeSlide * slideWidth}px)`
    }
}

next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);