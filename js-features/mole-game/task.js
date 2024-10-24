const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function () {
    if (getHole(i).classList.contains('hole_has-mole')) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }

    if (dead.textContent === '10') {
      alert('Победа!');
      dead.textContent = '0';
      lost.textContent = '0';
    }

    if (lost.textContent === '5') {
      alert('Вы проиграли!');
      dead.textContent = '0';
      lost.textContent = '0';
    }
  };
}