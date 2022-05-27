let featureList = document.querySelector('.feature-list');

function changeContent() {
    let featureHead = document.querySelector('.feature-head');
    let featureSubhead = document.querySelector('.feature-subhead');
    let featureImg = document.querySelector('.feature-img');
    featureHead.innerHTML = "Saves upto 2x time in building your web app and mobile.";
    featureHead.style['transform'] = 'rotateY(180deg)';
    featureSubhead.style['display'] = 'none';
    featureImg.style['height'] = '0px';
}

function resetContent() {
    let featureHead = document.querySelector('.feature-head');
    let featureSubhead = document.querySelector('.feature-subhead');
    let featureImg = document.querySelector('.feature-img');
    featureHead.innerHTML = "Develop";
    featureHead.style['transform'] = 'rotateY(0deg)';
    featureSubhead.style['display'] = 'block';
    featureImg.style['height'] = '50px';
}

let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuExit = document.querySelector('.mobile-menu-exit');
let mobileNav = document.querySelector('.mobile-nav-container');

mobileMenu.addEventListener('click', function () {
    mobileNav.style['display'] = 'flex';
    mobileMenu.style['display'] = 'none';
    mobileMenuExit.style['display'] = 'block';
});

mobileMenuExit.addEventListener('click', function () {
    mobileNav.style['display'] = 'none';
    mobileMenu.style['display'] = 'block';
    mobileMenuExit.style['display'] = 'none';
});