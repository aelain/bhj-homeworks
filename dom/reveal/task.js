class Reveal {
  constructor(element) {
    this.element = element;
    this.checkScroll();
  }

  checkScroll() {
    function isVisible(element) {
      if (element.getBoundingClientRect().bottom < 0) {
        return false;
      }
      if (element.getBoundingClientRect().top > window.innerHeight) {
        return false;
      }
      return true;
    }

    window.addEventListener('scroll', () => {
      if (isVisible(this.element)) {
        this.element.classList.add('reveal_active');
      } else {
        this.element.classList.remove('reveal_active');
      }
    });
  }
}

document.querySelectorAll('.reveal').forEach(element => new Reveal(element));