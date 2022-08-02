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