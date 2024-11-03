const book = document.querySelector('.book');
const fontSizes = book.querySelectorAll('.font-size');
const bookСontrolСolor = book.querySelector('.book__control_color');
const bookСontrolBackground = book.querySelector('.book__control_background');
const textColors = bookСontrolСolor.querySelectorAll('[data-text-color]');
const bgColors = bookСontrolBackground.querySelectorAll('[data-bg-color]');

// Реализация смены размера шрифта
fontSizes.forEach(function (fontSize) {
  fontSize.addEventListener('click', (event) => {
    fontSizes.forEach(fontSize => fontSize.classList.remove('font-size_active'));
    fontSize.classList.add('font-size_active');
    book.classList.remove('book_fs-small', 'book_fs-big');
    const size = event.target.dataset.size;

    if (size) {
      book.classList.add(`book_fs-${size}`);
    }

    event.preventDefault();
  });
});

// Реализация смены цвета текста
textColors.forEach(function (textColor) {
  textColor.addEventListener('click', (event) => {
    textColors.forEach(textColor => textColor.classList.remove('color_active'));
    textColor.classList.add('color_active');
    book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
    const color = event.target.dataset.textColor;
    book.classList.add(`book_color-${color}`);
    event.preventDefault();
  })
});

// Реализация смены цвета фона
bgColors.forEach(function (bgColor) {
  bgColor.addEventListener('click', (event) => {
    bgColors.forEach(bgColor => bgColor.classList.remove('color_active'));
    bgColor.classList.add('color_active');
    book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
    const bg = event.target.dataset.bgColor;
    book.classList.add(`book_bg-${bg}`);
    event.preventDefault();
  })
});