const request = new XMLHttpRequest();
const poll = document.querySelector('.poll');
const pollTitle = document.querySelector('.poll__title');
const pollAnswersList = document.querySelector('.poll__answers');

function createAnswer(text) {
  const answer = document.createElement('button');
  answer.className = 'poll__answer';
  answer.textContent = text;
  pollAnswersList.append(answer);
}

function createAnswerVote(option, percent) {
  const answerVote = document.createElement('p');
  answerVote.innerHTML = `${option}: <b>${percent}%</b>`;
  pollAnswersList.append(answerVote);
}

request.addEventListener('load', function () {
  if (this.status === 200) {
    const response = JSON.parse(this.response);
    pollTitle.textContent = response.data.title;
    response.data.answers.forEach(text => {
      createAnswer(text);
    });

    const buttonAnswers = pollAnswersList.querySelectorAll('.poll__answer');
    buttonAnswers.forEach((button, index) => {
      button.addEventListener('click', event => {
        event.preventDefault();
        alert('Спасибо, ваш голос засчитан!');

        const requestVote = new XMLHttpRequest();
        requestVote.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        requestVote.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        requestVote.addEventListener('load', function () {
          const buttons = document.querySelectorAll('button');
          buttons.forEach(button => button.remove());
          const responseVote = JSON.parse(this.response);
          const total = responseVote.stat.reduce((acc, item) => acc + item.votes, 0);

          responseVote.stat.forEach(item => {
            const option = item.answer;
            const percent = (item.votes / total * 100).toFixed(2);
            createAnswerVote(option, percent);
          });
        });

        requestVote.send(`vote=${response.id}&answer=${index}`);
      });
    });
  }
});

request.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
request.send();