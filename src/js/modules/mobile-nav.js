const mobileBtn = document.querySelector('.js-mobile-btn');
const mobileBtnIcon = document.querySelector('.js-mobile-icon');
const mobileNav = document.querySelector('.js-nav');

module.exports = () => {
    mobileBtn.addEventListener('click', () => {
        mobileBtnIcon.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
}