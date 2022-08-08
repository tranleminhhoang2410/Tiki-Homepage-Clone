$(document).ready(function(){
    $('.content__authentic-brand--slider__list').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000, 
        prevArrow: '<a href="/" class="content__authentic-brand--slider__btn prev-btn d-flex align-items-center position-absolute top-0"><img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"></a>',
        nextArrow: '<a href="/" class="content__authentic-brand--slider__btn next-btn d-flex flex-row-reverse align-items-center position-absolute top-0"><img src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"></a>',
        dots: true,
        dotsClass: 'content__authentic-brand__dot-list d-flex justify-content-center position-absolute'
    });
})