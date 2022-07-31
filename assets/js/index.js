// Render Quick link in Header-bottom
const quickLinkList = document.querySelector('.header__bottom-quicklink--list')
const quickLinkItems = [
    {
        id: 1,
        title: 'trái cây'
    },
    {
        id: 2,
        title: 'thịt, trứng'
    },
    {
        id: 3,
        title: 'rau củ quả'
    },
    {
        id: 4,
        title: 'sữa, bơ, phô mai'
    },
    {
        id: 5,
        title: 'hải sản'
    },
    {
        id: 6,
        title: 'gạo, mì ăn liền'
    },
    {
        id: 7,
        title: 'đồ uống, bia rượu'
    },
    {
        id: 8,
        title: 'bánh kẹo'
    },
]

const renderQuickLinkItems = () => {
    quickLinkList.innerHTML += quickLinkItems.map(item => `
        <li class="header__bottom-quicklink-item">
            <a href="/" class="header__bottom-quicklink-link">${item.title}</a>
        </li>
    `).join('')
}

renderQuickLinkItems()