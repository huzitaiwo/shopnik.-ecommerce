const navigation = document.querySelector('.nav-links');
const burgerMenu = document.querySelector('.hamburger');
const burgerMenuIcon = document.querySelector('.hamburger img');

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
                console.log('clicked')
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
const tabs = new Tabs(document.querySelector('.sales-tabs'));
tabs.init();

// show item details hover effect
const items = document.querySelectorAll('.items');

items.forEach(item => {
    item.addEventListener('mouseenter', showDetails)
});

function showDetails() {
    let html = ``;
    html = `
        <div class="more">
            <img class="love" src="./icons/" alt="react icon"/>
            <h4>Add to cart</h4>
            <img class="info" src="./icons/" alt="react icon"/>
        </div>
    `
}