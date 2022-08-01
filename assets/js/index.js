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




