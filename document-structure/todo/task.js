const form = document.querySelector('form');
const input = document.querySelector('input');
const tasksList = document.querySelector('.tasks__list');
const tasksStorage = JSON.parse(localStorage.getItem('tasks')) || [];

function createTask(text) {
  const taskElement = document.createElement('div');
  taskElement.className = 'task';
  taskElement.innerHTML = `<div class="task__title">${text}</div><a href="#" class="task__remove">&times;</a>`;
  tasksList.append(taskElement);
  return taskElement;
}

if (tasksStorage) {
  tasksStorage.forEach(item => createTask(item));
}

function includesTask(text) {
  return tasksStorage.some(item => item === text);
}

if (document.querySelector('.task__remove')) {
  const taskRemoves = document.querySelectorAll('.task__remove');

  taskRemoves.forEach(taskRemove => taskRemove.addEventListener('click', event => {
    event.preventDefault();
    const taskIndex = tasksStorage.indexOf(taskRemove.previousElementSibling.textContent);
    tasksStorage.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(tasksStorage));
    taskRemove.closest('.task').remove();
  }));
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const text = input.value;

  if (text && !includesTask(text)) {
    const task = createTask(text);
    tasksStorage.push(text);
    localStorage.setItem('tasks', JSON.stringify(tasksStorage));
    const taskRemove = task.querySelector('.task__remove');

    taskRemove.addEventListener('click', event => {
      event.preventDefault();
      const taskIndex = tasksStorage.indexOf(text);
      tasksStorage.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(tasksStorage));
      taskRemove.closest('.task').remove();
    });
  }

  input.value = '';
});