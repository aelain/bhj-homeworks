class Reveal {
  constructor(container) {
    this.container = container;
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
      if (isVisible(this.container)) {
        this.container.classList.add('reveal_active');
      } else {
        this.container.classList.remove('reveal_active');
      }
    });
  }
}

new Reveal(document.querySelector('.reveal'));