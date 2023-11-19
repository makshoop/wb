const buttonEditDelivery = document.querySelector('.cart-form-btn-delivery');
const buttonEditPayment = document.querySelector('.cart-form-btn-payment');
const buttonSidebarEditDelivery = document.querySelector('.sidebar-info-edit-btn-delivery');
const buttonSidebarPaymentDelivery = document.querySelector('.sidebar-info-edit-btn-payment');

const modalDeliveryForm = document.querySelector('.modal-delivery');
const modalPaymentForm = document.querySelector('.modal-payment');
const buttonCloseDeliveryModal = document.querySelector('.modal-delivery .modal-btn-exit');
const buttonClosePaymentModal = document.querySelector('.modal-payment .modal-btn-exit');

const openModal = (modal) => {
    modal.classList.add('modal-opened');
}

const closeModal = (modal) => {
    modal.classList.remove('modal-opened');
}

accordionButton.addEventListener('click', () => toggleAccordionList());
accordionMissingButton.addEventListener('click', () => toggleAccordionMissingList());

buttonEditDelivery.addEventListener('click', () => openModal(modalDeliveryForm));
buttonEditPayment.addEventListener('click', () => openModal(modalPaymentForm));
buttonSidebarEditDelivery.addEventListener('click', () => openModal(modalDeliveryForm));
buttonSidebarPaymentDelivery.addEventListener('click', () => openModal(modalPaymentForm));

buttonCloseDeliveryModal.addEventListener('click', () => closeModal(modalDeliveryForm));
buttonClosePaymentModal.addEventListener('click', () => closeModal(modalPaymentForm));