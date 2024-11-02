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

    if (fontSize.classList.contains('font-size_small')) {
      book.classList.remove('book_fs-big');
      book.classList.add('book_fs-small');
    } else if (fontSize.classList.contains('font-size_big')) {
      book.classList.remove('book_fs-small');
      book.classList.add('book_fs-big');
    } else {
      book.classList.remove('book_fs-small', 'book_fs-big');
    }

    event.preventDefault();
  });
});

// Реализация смены цвета текста
textColors.forEach(function (textColor) {
  textColor.addEventListener('click', (event) => {
    textColors.forEach(textColor => textColor.classList.remove('color_active'));
    textColor.classList.add('color_active');

    if (textColor.classList.contains('text_color_black')) {
      book.classList.remove('book_color-gray', 'book_color-whitesmoke');
      book.classList.add('book_color-black');
    } else if (textColor.classList.contains('text_color_gray')) {
      book.classList.remove('book_color-black', 'book_color-whitesmoke');
      book.classList.add('book_color-gray');
    } else if (textColor.classList.contains('text_color_whitesmoke')) {
      book.classList.remove('book_color-black', 'book_color-gray');
      book.classList.add('book_color-whitesmoke');
    }

    event.preventDefault();
  })
});

// Реализация смены цвета фона
bgColors.forEach(function (bgColor) {
  bgColor.addEventListener('click', (event) => {
    bgColors.forEach(bgColor => bgColor.classList.remove('color_active'));
    bgColor.classList.add('color_active');

    if (bgColor.classList.contains('bg_color_black')) {
      book.classList.remove('book_bg-gray', 'book_bg-white');
      book.classList.add('book_bg-black');
    } else if (bgColor.classList.contains('bg_color_gray')) {
      book.classList.remove('book_bg-black', 'book_bg-white');
      book.classList.add('book_bg-gray');
    } else if (bgColor.classList.contains('bg_color_white')) {
      book.classList.remove('book_bg-black', 'book_bg-gray');
      book.classList.add('book_bg-white');
    }

    event.preventDefault();
  })
});