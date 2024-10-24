const clickerStatus = document.getElementsByClassName('clicker__status');
clickerStatus[0].innerHTML += '<br> Скорость клика <span id="clicker__speed">0</span>';
const clickerCounter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clickerSpeed = document.getElementById('clicker__speed');
let timeFirst = null;
let timeSecond = null;

cookie.onclick = function () {
  clickerCounter.textContent++;
  if (!timeFirst) {
    timeFirst = new Date();
  } else {
    timeSecond = new Date();
    clickerSpeed.textContent = 1 / (timeSecond - timeFirst) * 1000;
    timeFirst = timeSecond;
  }

  if (cookie.width === 200) {
    cookie.width = 180;
  } else {
    cookie.width = 200;
  }
};