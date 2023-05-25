(() => {
  const openModalBtnRef = document.querySelector('[data-modal-open]');
  const closeModalBtnRef = document.querySelector('[data-modal-close]');
  const modalRef = document.querySelector('[data-modal]');

  let isModalOpen = false;

  const toggleModal = () => {
    modalRef.classList.toggle('is-hidden');

    isModalOpen = !isModalOpen;

    if (isModalOpen) {
      bodyScrollLock.disableBodyScroll(document.body);
    }
    if (!isModalOpen) {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  };

  openModalBtnRef.addEventListener('click', toggleModal);
  closeModalBtnRef.addEventListener('click', toggleModal);
})();
