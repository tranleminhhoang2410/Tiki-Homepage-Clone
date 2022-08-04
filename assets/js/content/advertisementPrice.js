const productApiUrl = 'https://tiki.vn/api/v2/widget/deals/collection?per_page=12&trackity_id=fdadfc0c-1abc-e472-85b7-063881228a77'
const advertisementPriceSliderApiUrl = 'https://api.tiki.vn/raiden/v2/home/widgets/rewards/asa/new?platform=desktop&trackity_id=fdadfc0c-1abc-e472-85b7-063881228a77'
const dealAdvertisementApiUrl = 'https://tiki.vn/api/shopping/v2/widgets/banner/home-brand?platform=desktop&trackity_id=fdadfc0c-1abc-e472-85b7-063881228a77'
const quickLinkAdvertisementApiUrl = 'https://tiki.vn/api/shopping/v2/widgets/quick_link?platform=desktop&trackity_id=fdadfc0c-1abc-e472-85b7-063881228a77'
const thuongHieuChinhHangApi = 'https://api.tiki.vn/shopping/v2/widgets/brand-static?trackity_id=fdadfc0c-1abc-e472-85b7-063881228a77'
const danhMucNoiBatApi = 'https://tiki.vn/api/personalish/v1/blocks/categories?block_code=featured_categories&trackity_id=fdadfc0c-1abc-e472-85b7-063881228a77'

//Fetch API of shock price product and render


// Move Slider Shock Product  and Hide Arrows
$(document).ready(function(){
    var productSlider = $('.content__advertisement-price--body__product-list').slick({  
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        prevArrow: '<div class="content__advertisement-price--body prev-btn top-0 start-0 position-absolute border-0"><img class="position-absolute" src="./assets/images/advertisementPrice/productArrow.png" alt="Prev Btn"></div>',
        nextArrow: '<div class="content__advertisement-price--body next-btn top-0 end-0 position-absolute border-0"><img class="position-absolute" src="./assets/images/advertisementPrice/productArrow.png" alt="Next Btn"></div>',
    })

    productSlider.on('afterChange', function(event, slick, currentSlide) {  	
        // console.log(currentSlide);
            //If we're on the first slide hide the Previous button and show the Next
        if (currentSlide === 0) {
            $('.slick-prev').hide();
            $('.slick-next').show();
        }
        else {
            $('.slick-prev').show();
        }
          
        //If we're on the last slide hide the Next button.
        if (slick.slideCount === currentSlide + 1) {
            $('.slick-next').hide();
        }
    });
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
        playBtnImg.src = './assets/images/advertisementPrice/pause-icon.png'
        video.play()
        isPlaying = true
    }else{
        playBtnImg.src = './assets/images/advertisementPrice/play-icon.png'
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



