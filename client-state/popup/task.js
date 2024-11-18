const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

if (!document.cookie.includes('modal=close')) {
  modal.classList.add('modal_active');
}

function closeModal() {
  modal.classList.remove('modal_active');
  const date = 'Tue, 19 Jan 2038 03:14:07 GMT';
  document.cookie = 'modal=close';
  document.cookie = 'expires=' + encodeURIComponent(date);
}

modalClose.addEventListener('click', closeModal);