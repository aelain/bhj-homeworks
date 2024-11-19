const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

if (!document.cookie.includes('modal=close')) {
  modal.classList.add('modal_active');
}

function closeModal() {
  modal.classList.remove('modal_active');
  const date = 31536000;
  document.cookie = 'modal=close; max-age=' + encodeURIComponent(date);
}

modalClose.addEventListener('click', closeModal);