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
const categoriesItems = document.querySelectorAll('.content__categories-item')

const renderDefaultCategoriesList = () => {
    categoriesItems.forEach((item, index) => {
        if(index >= 13){
            item.classList.add('d-none')
        }
    })
}

renderDefaultCategoriesList()

const handleDisplayListItem = () => {
    nextIcon.onclick = () => {
        categoriesItems.forEach((item, index) => {
            if(index < 13){
                item.classList.add('d-none')
                nextIcon.classList.add('d-none')
            }else{
                item.classList.remove('d-none')
                // item.style = `transform: translateX(-1240px); transition: all 0.5s ease-in-out 0s;`
                item.parentElement.parentElement.classList.remove('justify-content-between')
                prevIcon.classList.remove('d-none')
            }
        })
    }

    prevIcon.onclick = () => {
        categoriesItems.forEach((item, index) => {
            if(index >= 13){
                item.style.transform = 'translateX: -1240px;'
                item.classList.add('d-none')
                prevIcon.classList.add('d-none')
            }else{
                item.classList.remove('d-none')
                item.parentElement.parentElement.classList.add('justify-content-between')
                nextIcon.classList.remove('d-none')
            }
        })
    }
}

handleDisplayListItem()



