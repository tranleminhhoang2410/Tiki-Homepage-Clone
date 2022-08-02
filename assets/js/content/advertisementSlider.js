nextIcon.onclick = () => {
    categoriesList.style = `transform: translateX(-937px); transition: transform 0.5s ease-in-out 0s;`
    nextIcon.classList.add('d-none')
    prevIcon.classList.remove('d-none')
}

prevIcon.onclick = () => {
    categoriesList.style = `transform: translateX(0); transition: transform 0.5s ease-in-out 0s;`
    nextIcon.classList.remove('d-none')
    prevIcon.classList.add('d-none')
}

//Handle render and change advertisement slider
const advertisementSliderList = document.querySelector('.content__advertisement-slider--list')
const advertisementSliderItems = [
    {
        id: 1,
        src: './assets/images/slider/slider1.webp'
    }, {
        id: 2,
        src: './assets/images/slider/slider2.webp'
    }, {
        id: 3,
        src: './assets/images/slider/slider3.webp'
    }, {
        id: 4,
        src: './assets/images/slider/slider4.webp'
    }, {
        id: 5,
        src: './assets/images/slider/slider5.webp'
    }, {
        id: 6,
        src: './assets/images/slider/slider6.webp'
    }, {
        id: 7,
        src: './assets/images/slider/slider7.webp'
    }, {
        id: 8,
        src: './assets/images/slider/slider8.webp'
    }, {
        id: 9,
        src: './assets/images/slider/slider9.webp'
    }, {
        id: 10,
        src: './assets/images/slider/slider10.webp'
    }, {
        id: 11,
        src: './assets/images/slider/slider11.webp'
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


const sliderDotList = document.querySelector('.content__advertisement-slider--dot-list')
// const sliderDotsItems = document.querySelectorAll('.content__advertisement-slider--dot-item')
// const handleRenderDotItems = () => {
//     for(let i = 0; i < advertisementSliderItems.length; i++){
//         sliderDotList.innerHTML += `
//             <li class="content__advertisement-slider--dot-item rounded-circle">${i + 1}</li>
//         `
//     }
// }

// handleRenderDotItems()


// const nextSliderBtn = document.querySelector('.content__advertisement-slider--btn.next-btn')
// const prevSliderBtn = document.querySelector('.content__advertisement-slider--btn.prev-btn')
// const sliderItemWidth = document.querySelectorAll('.content__advertisement-slider--item')[0].offsetWidth

// let positionX = 0
// let index = 0

// nextSliderBtn.onclick = () => {
//     handleChangeAdvertisementSlider('right')

// }

// prevSliderBtn.onclick = () => {
//     handleChangeAdvertisementSlider('left')
// }

// setInterval(() => {
//     handleChangeAdvertisementSlider('right')
// }, 3000)


// const handleChangeAdvertisementSlider = (direction) => {
//     if(direction === 'right'){
//         positionX -= sliderItemWidth
//         advertisementSliderList.style = `transform:translateX(${positionX}px)`
//         index++
//         if(index >= advertisementSliderItems.length){
//             index = 0
//             positionX = 0
//             advertisementSliderList.style = `transform:translateX(-${sliderItemWidth}px)`
//         }
//         console.log(index)
//     }
//     if(direction === 'left'){
//         if(index <= 0){
//             index = advertisementSliderItems.length
//             positionX = (advertisementSliderItems.length) * sliderItemWidth 
//             advertisementSliderList.style = `transform:translateX(${sliderItemWidth}px)`
//         }
//         positionX += sliderItemWidth
//         advertisementSliderList.style = `transform:translateX(${positionX}px)`
//         index--
//         console.log(index)
//     }
// }


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






