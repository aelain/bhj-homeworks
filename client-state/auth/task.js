const signin = document.querySelector('.signin');
const signinForm = document.querySelector('#signin__form');
const login = document.getElementsByName('login')[0];
const password = document.getElementsByName('password')[0];
const welcome = document.querySelector('.welcome');
const userId = document.querySelector('#user_id');
const signoutBtn = document.querySelector('#signout__btn');

function showWelcome() {
  welcome.classList.add('welcome_active');
  signin.classList.remove('signin_active');
  userId.textContent = localStorage.getItem('id');
}

if (localStorage.getItem('id')) {
  showWelcome();
}

function getData(event) {
  const data = event.target.response;
  if (data.success) {
    localStorage.setItem('id', data['user_id']);
    showWelcome();
  } else {
    alert('Неверный логин/пароль');
  }
}

function submitForm() {
  const formData = new FormData(signinForm);
  const request = new XMLHttpRequest();
  request.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  request.addEventListener('load', event => getData(event));
  request.responseType = 'json';
  request.send(formData);
}

function signout() {
  welcome.classList.remove('welcome_active');
  signin.classList.add('signin_active');
  localStorage.removeItem('id');
}

signinForm.addEventListener('submit', event => {
  event.preventDefault();
  if (login.value && password.value) {
    submitForm();
  } else {
    alert('Введите логин и пароль');
  }
  event.target.reset();
});

signoutBtn.addEventListener('click', signout);