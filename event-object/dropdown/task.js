const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function (dropdown) {
  const dropdownValue = dropdown.querySelector('.dropdown__value');
  const dropdownList = dropdown.querySelector('.dropdown__list');
  dropdown.addEventListener('click', () => dropdownList.classList.toggle('dropdown__list_active'));
  const dropdownLinks = dropdown.querySelectorAll('.dropdown__link');

  dropdownLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      this.classList.toggle('dropdown__list_active');
      dropdownValue.textContent = link.textContent;
      event.preventDefault();
    });
  });
});