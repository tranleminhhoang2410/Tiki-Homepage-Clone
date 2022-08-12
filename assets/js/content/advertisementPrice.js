// Move Slider Shock Product  and Hide Arrows
$(document).ready(function(){
    $('.content__advertisement-price--body__product-list').slick({  
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        prevArrow: '<div class="content__advertisement-price--body prev-btn top-0 start-0 position-absolute border-0"><img class="position-absolute" src="./assets/images/global/arrows/circleArrow.png" alt="Prev Btn"></div>',
        nextArrow: '<div class="content__advertisement-price--body next-btn top-0 end-0 position-absolute border-0"><img class="position-absolute" src="./assets/images/global/arrows/circleArrow.png" alt="Next Btn"></div>',
    })
})

//Change Slider Advertisement
$(document).ready(function(){
    $('.content__advertisement-price--slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000, 
        arrows: false,
        dots: true,
        dotsClass: 'content__advertisement-price--slider__dots-list position-absolute d-flex align-items-center'
    });
});

//Handle Play Video
const video = document.querySelector('.content__advertisement-price--slider-video video')
const playBtn = document.querySelector('.content__advertisement-price--slider-video__play-btn')
const playBtnImg = document.querySelector('.content__advertisement-price--slider-video__play-btn img')
const soundBtn = document.querySelector('.content__advertisement-price--slider-video__sound-btn')
const soundBtnImg = document.querySelector('.content__advertisement-price--slider-video__sound-btn img')

let isPlaying = false
let isMute = true

//Handle play video
playBtn.onclick = () => {
    if(!isPlaying){
        playBtnImg.src = './assets/images/content/advertisementPrice/pause-icon.png'
        video.play()
        isPlaying = true
    }else{
        playBtnImg.src = './assets/images/content/advertisementPrice/play-icon.png'
        video.pause()
        isPlaying = false
    }
    if(isMute){
        video.muted = true
        isMute = true
    }else{
        video.muted = false
        isMute = false
    }
}


//Handle mute & play sound
soundBtn.onclick = () => {
    if(isMute){
        soundBtnImg.src = './assets/images/advertisementPrice/play-sound-icon.png'
        video.muted = false
        isMute = false
    }else{
        soundBtnImg.src = './assets/images/advertisementPrice/mute-sound-icon.png'
        video.muted = true
        isMute = true
    }
}



