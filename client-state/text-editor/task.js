const editor = document.querySelector('#editor');
const btnReset = document.querySelector('#btn-reset');

function autosave() {
  sessionStorage.setItem('editor', editor.value);
}

function resetEditor() {
  editor.value = '';
  autosave();
}

if (sessionStorage.getItem('editor')) {
  editor.value = sessionStorage.getItem('editor');
}

editor.addEventListener('input', autosave);
btnReset.addEventListener('click', resetEditor);