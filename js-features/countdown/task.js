const statusText = document.getElementById("status");
statusText.innerHTML = 'До окончания конкурса осталось: <span id="timer">00:00:59</span>';
const timer = document.getElementById("timer");
let seconds = '59';

const intervalId = setInterval(function () {
  timer.textContent = '00:00' + (seconds > 9 ? ':' + seconds-- : ':0' + seconds--);
  if (timer.textContent === '00:00:00') {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
    window.location.href = 'https://nodejs.org/dist/v20.18.0/node-v20.18.0-x64.msi';
  }
}, 1000);