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

    function endGame(message) {
      alert(message);
      dead.textContent = '0';
      lost.textContent = '0';
    }

    if (dead.textContent === '10') {
      endGame('Победа!');
    }

    if (lost.textContent === '5') {
      endGame('Вы проиграли!');
    }
  };
}