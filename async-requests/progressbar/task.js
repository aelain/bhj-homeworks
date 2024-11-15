const form = document.querySelector('#form');
const progress = document.querySelector('#progress');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form);
  const request = new XMLHttpRequest();
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  request.upload.addEventListener('progress', function (event) {
    progress.value = event.loaded / event.total;
  });

  request.send(formData);
});