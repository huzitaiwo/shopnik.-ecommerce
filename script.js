// reference from the DOM
const websiteImages = document.querySelectorAll('img');
const preview = document.querySelectorAll('.image-preview');
const previewImages = document.querySelectorAll('.image-preview > img');
const navigation = document.querySelector('.nav-links');
const burgerMenu = document.querySelector('.hamburger');
const burgerMenuIcon = document.querySelector('.hamburger img');
const items = document.querySelectorAll('.items');
const moreDetails = document.querySelectorAll('.more');
const favIcons = document.querySelectorAll('.fav img');
const cases = document.querySelectorAll('.case');
const caseGlow = document.querySelectorAll('.glow-effect');
const addBtn = document.querySelectorAll('button.add');
const itemTable = document.querySelector('.item-table');
const cartBtn = document.querySelector('button.cart');
const cart = document.querySelector('.item-log');
const closeCartBtn = document.querySelector('button.close-cart');


// disabled image context menu
websiteImages.forEach(image => {
    image.addEventListener('contextmenu', e => e.preventDefault())
})

// reponsive navigation bar feature
burgerMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');

    // toggle burger icon
    if(navigation.classList.contains('active')) {
        burgerMenuIcon.src = './icons/close.svg';
    } else {
        burgerMenuIcon.src = './icons/hamburger.svg';
    }
});

// tabs component
class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContents(e);
            });
        });
    }    
    toggleTabs(e) {
        // prevent default anchor tag behavior
        e.preventDefault();
        // remove current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));
        // add active class to clicked
        e.target.classList.add('active');
    }
    toggleContents(e) {
        // remove active classes from content
        this.container.querySelectorAll('.tabs-content').forEach(item => item.classList.remove('active'));
        // add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');

    }
}

const getItem = async (data) => {
    const item = {};
    item.img = data.parentElement.previousElementSibling.src;
    item.name = data.parentElement.parentElement.nextElementSibling.textContent;
    let price = data.parentElement.parentElement.nextElementSibling.nextElementSibling.textContent;
    let finalPrice = price.slice(1).trim();
    item.price = finalPrice;
    
    localStorage.setItem('item', item);
    // localStorage.clear();
}

const updateUI = async (item) => {
    itemTable.innerHTML += `
        <tr class="item-in-cart">
            <td><img class="item-image" src="${item.img}" alt=""></td>
            <td>$${item.price}</td>
            <td class="amount"><button><img src="./icons/add.svg" alt=""></button>10<button><img src="./icons/add.svg" alt=""></button></td>
            <td>$112</td>
        </tr>
    `;
}

// check different pages to execute script
if(document.body.id === 'main') {
    // initiate tabs
    const salesTab = new Tabs(document.querySelector('.sales-tab'));
    salesTab.init();

    // show && hide item details hover effect
    items.forEach((item, i) => {
        item.addEventListener('mouseenter', () => moreDetails[i].classList.add('active'))
        item.addEventListener('mouseleave', () => moreDetails[i].classList.remove('active'));
    });

    // add to favourite
    favIcons.forEach(icon => {
        icon.addEventListener('click', () => icon.src = './icons/favorite.svg')
    });

    // image scale effect
    preview.forEach((preview, i) => {
        preview.addEventListener('mouseenter', () => previewImages[i].classList.add('hover'));
        preview.addEventListener('mouseleave', () => previewImages[i].classList.remove('hover'));
    });

    // case glow effect
    cases.forEach((caseEffect, i) => {
        caseEffect.addEventListener('mouseenter', () => caseGlow[i].classList.add('glow'));
        caseEffect.addEventListener('mouseleave', () => caseGlow[i].classList.remove('glow'));
    });

    // cart functionalitiesssss
    // show && hide cart
    cartBtn.addEventListener('click', () => cart.classList.add('active'));
    closeCartBtn.addEventListener('click', () => cart.classList.remove('active'));

    
    // add item to cart
    addBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            getItem(btn);
        })
    })
} else if(document.body.id === 'item') {
    const itemsTab = new Tabs(document.querySelector('.items-tab'));
    itemsTab.init();
} else if(document.body.id === 'cart') {
    console.log('cart')
    if(localStorage.getItem('item')) {
        localStorage.getItem('item');
        updateUI(localStorage.getItem('item'));

    }
}


