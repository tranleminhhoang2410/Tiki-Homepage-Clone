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