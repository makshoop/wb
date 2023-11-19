const accordionButton = document.querySelector('.cart-list-icon');
const accordionList = document.querySelector('.cart-list-zone');
const accordionCheckbox = document.querySelector('.form-label');
const accordionItems = document.querySelector('.cart-list-header-items');
const cartListHeader = document.querySelector('.cart-list-header');

const accordionMissingButton = document.querySelector('.cart-list-icon-missing');
const accordionMissingList = document.querySelector('.cart-list-zone-missing');
const cartMissingList = document.querySelector('.cart-missing-list');

const toggleAccordionList = () => {
    accordionList.classList.toggle('hidden');
    accordionButton.classList.toggle('rotated');
    accordionCheckbox.classList.toggle('hidden');
    accordionItems.classList.toggle('hidden');
    cartListHeader.classList.toggle('line');
}

const toggleAccordionMissingList = () => {
    accordionMissingList.classList.toggle('hidden');
    accordionMissingButton.classList.toggle('rotated');
    cartMissingList.classList.toggle('hidden-missing-list');
}