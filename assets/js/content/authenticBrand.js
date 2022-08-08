$(document).ready(function(){
    //Slider
    $('.content__authentic-brand--slider__list').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000, 
        prevArrow: '<a href="/" class="content__authentic-brand--slider__btn prev-btn d-flex align-items-center position-absolute top-0"><img src="./assets/images/global/arrows/rectangleArrow.png"></a>',
        nextArrow: '<a href="/" class="content__authentic-brand--slider__btn next-btn d-flex flex-row-reverse align-items-center position-absolute top-0"><img src="./assets/images/global/arrows/rectangleArrow.png"></a>',
        dots: true,
        dotsClass: 'content__authentic-brand__dot-list d-flex justify-content-center position-absolute'
    }); 

    //Change list product
    $('.content__authentic-brand--product__list').slick({  
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
        prevArrow: '<div class="content__authentic-brand--product__btn prev-btn d-flex align-items-center justify-content-center position-absolute top-50 start-0 translate-middle-y rounded-circle"><i class="content__authentic-brand--product__icon fa-solid fa-angle-left"></i></div>',
        nextArrow: '<div class="content__authentic-brand--product__btn prev-btn d-flex align-items-center justify-content-center position-absolute top-50 end-0 translate-middle-y rounded-circle"><i class="content__authentic-brand--product__icon fa-solid fa-angle-right"></i></div>',
    })
})