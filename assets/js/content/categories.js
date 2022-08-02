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