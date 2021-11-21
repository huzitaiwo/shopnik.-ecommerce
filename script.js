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
})