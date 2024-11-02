const reveal = document.querySelector('.reveal');

function isVisible(element) {
  if (element.getBoundingClientRect().bottom < 0) {
    return false;
  }
  if (element.getBoundingClientRect().top > window.innerHeight) {
    return false;
  }
  return true;
}

window.addEventListener('scroll', function () {
  if (isVisible(reveal)) {
    reveal.classList.add('reveal_active');
  } else {
    reveal.classList.remove('reveal_active');
  }
});