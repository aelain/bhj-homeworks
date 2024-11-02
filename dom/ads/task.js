class Card {
  constructor(container) {
    this.container = container;
    this.rotator = container.querySelector('.rotator');
    this.rotatorCases = container.querySelectorAll('.rotator__case');

    this.changeRotatorCase();
  }

  changeRotatorCase() {
    this.rotatorCases.forEach(rotatorCase => rotatorCase.style.color = `${rotatorCase.dataset.color}`);
    let counter = Number(this.rotator.querySelector('.rotator__case_active').nextElementSibling.dataset.speed);

    const myFunction = () => {
      const rotatorCaseActive = this.rotator.querySelector('.rotator__case_active');
      rotatorCaseActive.classList.remove('rotator__case_active');

      if (rotatorCaseActive !== this.rotator.lastElementChild) {
        counter = Number(rotatorCaseActive.nextElementSibling.dataset.speed);
        rotatorCaseActive.nextElementSibling.classList.add('rotator__case_active');
      } else {
        counter = Number(this.rotator.firstElementChild.dataset.speed);
        this.rotator.firstElementChild.classList.add('rotator__case_active');
      }

      setTimeout(myFunction, counter);
    };
    setTimeout(myFunction, counter);
  }
}

new Card(document.querySelector('.card'));