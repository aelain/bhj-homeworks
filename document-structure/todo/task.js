const form = document.querySelector('form');
const input = document.querySelector('input');
const tasksList = document.querySelector('.tasks__list');

function createTask(text) {
  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `<div class="task__title">${text}</div><a href="#" class="task__remove">&times;</a>`;
  tasksList.append(task);
  localStorage.setItem(`task_${text}`, text);
  return task;
}

function includesTask(text) {
  const values = Object.values(localStorage);
  for (let value of values) {
    if (value === text) {
      return true;
    }
  }
  return false;
}

const keys = Object.keys(localStorage);
for (let key of keys) {
  if (key.includes('task_')) {
    createTask(localStorage.getItem(key));
  }
}

if (document.querySelector('.task__remove')) {
  const taskRemoves = document.querySelectorAll('.task__remove');

  taskRemoves.forEach(taskRemove => taskRemove.addEventListener('click', event => {
    event.preventDefault();
    taskRemove.closest('.task').remove();
    localStorage.removeItem(`task_${taskRemove.previousElementSibling.textContent}`);
  }));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const text = input.value;

  if (text && !includesTask(text)) {
    const task = createTask(text);
    const taskRemove = task.querySelector('.task__remove');

    taskRemove.addEventListener('click', event => {
      event.preventDefault();
      taskRemove.closest('.task').remove();
      localStorage.removeItem(`task_${text}`);
    });
  }

  input.value = '';
});