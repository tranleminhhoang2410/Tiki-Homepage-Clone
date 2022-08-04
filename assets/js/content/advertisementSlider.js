const sliderApiUrl = 'https://tiki.vn/api/shopping/v2/banners?group=home_banner_main_v2&trackity_id=fdadfc0c-1abc-e472-85b7-063881228a77'
const advertisementSliderList = document.querySelector('.content__advertisement-slider--list')

const advertisementSliderItems = [
    {
        id: 1,
        src: './assets/images/advertisementSlider/slider1.webp'
    }, {
        id: 2,
        src: './assets/images/advertisementSlider/slider2.webp'
    }, {
        id: 3,
        src: './assets/images/advertisementSlider/slider3.webp'
    }, {
        id: 4,
        src: './assets/images/advertisementSlider/slider4.webp'
    }, {
        id: 5,
        src: './assets/images/advertisementSlider/slider5.webp'
    }, {
        id: 6,
        src: './assets/images/advertisementSlider/slider6.webp'
    }, {
        id: 7,
        src: './assets/images/advertisementSlider/slider7.webp'
    }, {
        id: 8,
        src: './assets/images/advertisementSlider/slider8.webp'
    }, {
        id: 9,
        src: './assets/images/advertisementSlider/slider9.webp'
    }, {
        id: 10,
        src: './assets/images/advertisementSlider/slider10.webp'
    }, {
        id: 11,
        src: './assets/images/advertisementSlider/slider11.webp'
    }
]

const renderAdvertisementSliderImages = () => {
    advertisementSliderList.innerHTML += advertisementSliderItems.map(item => `
        <li class="content__advertisement-slider--item">
            <a href="" class="content__advertisement-slider--link">
                <img src="${item.src}" alt="Slider${item.id}">
            </a>
        </li>
    `).join('')
}

renderAdvertisementSliderImages()

$(document).ready(function(){
    $('.content__advertisement-slider--list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000, 
        prevArrow: '<div class="content__advertisement-slider--btn slick-prev pull-left prev-btn position-absolute start-0 top-50 translate-middle-y"><img class="content__advertisement-slider--icon" src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"></div>',
        nextArrow: '<div class="content__advertisement-slider--btn next-btn slick-next pull-right position-absolute top-50 end-0 translate-middle-y"><img class="content__advertisement-slider--icon" src="https://salt.tikicdn.com/ts/upload/6b/59/c2/b61db5f1c32cfdc6d75e59d4fac2dbe8.png"></div>',
        dots: true,
        dotsClass: 'content__advertisement-slider--dot-list d-flex justify-content-center position-absolute'
    });
});






