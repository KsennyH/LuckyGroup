const inputSearch = document.querySelector('.js-search');

module.exports = () => {
    inputSearch.addEventListener('input', () => {
        let inputValue = inputSearch.value.replace(/[!@#$%^&*()]/g, '');
        inputSearch.value = inputValue;
    });
}