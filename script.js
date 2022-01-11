const websiteImages = document.querySelectorAll('img');
const preview = document.querySelectorAll('.image-preview');
const previewImages = document.querySelectorAll('.image-preview > img');
const navigation = document.querySelector('.nav-links');
const burgerMenu = document.querySelector('.hamburger');
const burgerMenuIcon = document.querySelector('.hamburger img');
const items = document.querySelectorAll('.items');
const moreDetails = document.querySelectorAll('.more');
const favIcons = document.querySelectorAll('.fav img');

// disabled image context menu
websiteImages.forEach(image => {
    image.addEventListener('contextmenu', e => e.preventDefault())
})

// reponsive navigation bar feature
burgerMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');

    // toggle close icon
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


// check different pages to execute script
if(document.body.id === 'main') {
    const salesTab = new Tabs(document.querySelector('.sales-tab'));
    salesTab.init();

    // show && hide item details hover effect
    items.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            moreDetails[i].classList.add('active');
        })
        item.addEventListener('mouseleave', () => {
            moreDetails[i].classList.remove('active');
        });
    });

    // add to favourite
    favIcons.forEach(icon => {
        icon.addEventListener('click', () => icon.src = './icons/favorite.svg')
    });

    preview.forEach((preview, i) => {
        preview.addEventListener('mouseenter', () => {
            previewImages[i].classList.add('hover');
        });
        preview.addEventListener('mouseleave', () => {
            previewImages[i].classList.remove('hover');
        });
    });
}
if(document.body.id === 'item') {
    const itemsTab = new Tabs(document.querySelector('.items-tab'));
    itemsTab.init();
}
if(document.body.id === 'cart') {
    console.log('cart');
}

