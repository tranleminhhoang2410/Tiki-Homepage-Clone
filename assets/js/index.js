// Render Quick link in Header-bottom
const quickLinkList = document.querySelector('.header__bottom-quicklink--list')
const quickLinkItems = ['trái cây', 'thịt, trứng', 'rau củ quả', 'sữa, bỡ, phô mai',
    'hải sản', 'gạo, mì ăn liền', 'đồ uống, bia rượụ', 'bánh kẹo']

const renderQuickLinkItems = () => {
    quickLinkList.innerHTML += quickLinkItems.map(item => `
        <li class="header__bottom-quicklink-item">
            <a href="/" class="header__bottom-quicklink-link">${item}</a>
        </li>
    `).join('')
}

renderQuickLinkItems()

//Handle Slider Categories
const prevIcon = document.querySelector('.content__categories-icon--wrapper.icon-prev')
const nextIcon = document.querySelector('.content__categories-icon--wrapper.icon-next')
const categoriesList = document.querySelector('.content__categories-list')
const categoriesItems = ['Thịt, Rau củ', 'Bách Hoá', 'Nhà cửa', 'Điện tử', 'Thiết bị số', 'Điện Thoại', 'Mẹ & Bé', 'Làm Đẹp',
    'Gia Dụng', 'Thời trang nữ', 'Thời trang nam', 'Giày nữ', 'Túi nữ', 'Giày nam', 'Túi nam', 'Balo & Vali', 'Phụ kiện',
    'Đồng hồ', 'Laptop', 'Quốc Tế', 'Voucher', 'Xe', 'Sách', 'Thể Thao', 'Máy Ảnh']

const renderCategoriesList = () => {
    categoriesList.innerHTML += categoriesItems.map(item => `
        <li class="content__categories-item d-inline-block">
            <a href="" class="content__categories-link">${item}</a>
        </li>
    `).join('')
}

renderCategoriesList()

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
const sliderDotsItems = document.querySelectorAll('.content__advertisement-slider--dot-item')
const handleRenderDotItems = () => {
    for(let i = 0; i < advertisementSliderItems.length; i++){
        sliderDotList.innerHTML += `
            <li class="content__advertisement-slider--dot-item rounded-circle">${i + 1}</li>
        `
    }
}

handleRenderDotItems()


const nextSliderBtn = document.querySelector('.content__advertisement-slider--btn.next-btn')
const prevSliderBtn = document.querySelector('.content__advertisement-slider--btn.prev-btn')
const sliderItemWidth = document.querySelectorAll('.content__advertisement-slider--item')[0].offsetWidth

let positionX = 0
let index = 0

nextSliderBtn.onclick = () => {
    handleChangeAdvertisementSlider('right')

}

prevSliderBtn.onclick = () => {
    handleChangeAdvertisementSlider('left')
}

// setInterval(() => {
//     handleChangeAdvertisementSlider('right')
// }, 3000)


const handleChangeAdvertisementSlider = (direction) => {
    if(direction === 'right'){
        positionX -= sliderItemWidth
        advertisementSliderList.style = `transform:translateX(${positionX}px)`
        index++
        if(index >= advertisementSliderItems.length){
            index = 0
            positionX = 0
            advertisementSliderList.style = `transform:translateX(-${sliderItemWidth}px)`
        }
        console.log(index)
    }
    if(direction === 'left'){
        if(index <= 0){
            index = advertisementSliderItems.length
            positionX = (advertisementSliderItems.length) * sliderItemWidth 
            advertisementSliderList.style = `transform:translateX(${sliderItemWidth}px)`
        }
        positionX += sliderItemWidth
        advertisementSliderList.style = `transform:translateX(${positionX}px)`
        index--
        console.log(index)
    }
}





