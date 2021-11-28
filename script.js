const navigation = document.querySelector('.nav-links');
const burgerMenu = document.querySelector('.hamburger');
const burgerMenuIcon = document.querySelector('.hamburger img');
const items = document.querySelectorAll('.items');

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
const salesTab = new Tabs(document.querySelector('.sales-tab'));
salesTab.init();
const itemsTab = new Tabs(document.querySelector('.items-tab'));
itemsTab.init();

// show && hide item details hover effect
items.forEach(item => {
    item.addEventListener('mouseenter', (e) => showDetails(e));
    item.addEventListener('mouseleave', (e) => hideDetails(e));
});

// functions

function showDetails(e) {
    let html = `
        <div class="more">
            <button class="fav">
                <img src="./icons/favorite_outline.svg" alt="react icon"/>
            </button>
            <button class="add">
                <h4><span class="md-none">Add to</span> cart</h4>
            </button>
            <a href="/item.html" class="info">
                <img src="./icons/more.svg" alt="react icon"/>
            </a>
        </div>
    `;
    e.target.children[0].innerHTML += html;
    const favorite = document.querySelectorAll('.fav');
    const favoriteIcon = document.querySelectorAll('.fav img');

    favorite.forEach((fav, i) => {
        fav.addEventListener('click', () => {
            favoriteIcon[i].src = './icons/favorite.svg'
        })
    });
}

function hideDetails(e) {
    e.target.children[0].children[1].remove();
}

function addFavorite(e, i) {
    e.target.children[0].src = './icon/favorite.svg';
    console.log(i);
}

