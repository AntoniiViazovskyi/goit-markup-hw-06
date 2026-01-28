;(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]')
  }

  if (!refs.openModalBtn || !refs.closeModalBtn || !refs.modal) return

  refs.openModalBtn.addEventListener('click', toggleModal)
  refs.closeModalBtn.addEventListener('click', toggleModal)

  function toggleModal() {
    refs.modal.classList.toggle('is-open')
  }
})()
;(() => {
  const refs = {
    openBtn: document.querySelector('.burger-btn'),
    closeBtn: document.querySelector('.mobile-menu .modal-close-btn'),
    menu: document.querySelector('.mobile-menu')
  }

  if (!refs.openBtn || !refs.closeBtn || !refs.menu) return

  refs.openBtn.addEventListener('click', toggleMenu)
  refs.closeBtn.addEventListener('click', toggleMenu)

  function toggleMenu() {
    refs.menu.classList.toggle('is-open')

    document.body.style.overflow = refs.menu.classList.contains('is-open')
      ? 'hidden'
      : ''
  }
})()

closeBtn: document.querySelector('.mobile-menu .modal-close-btn')
