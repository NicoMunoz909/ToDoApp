import './style.css'
import {Controller} from './Controller.js'


/*function expandClose() {
  let task = this.parentElement;
  let button = this.firstChild;
  if (task.classList.contains('collapsed')) {
    button.classList.add('fa-chevron-up');
    button.classList.remove('fa-chevron-down');
    task.classList.remove('collapsed');
    task.classList.add('expanded');
  } else {
    button.classList.add('fa-chevron-down');
    button.classList.remove('fa-chevron-up');
    task.classList.remove('expanded');
    task.classList.add('collapsed');
  }
}

function openCloseForm() {
  let form = document.getElementById('create-task-form');
  let opaque = document.getElementById('opaque');

  form.reset()

  form.classList.toggle('form--visible');
  opaque.classList.toggle('opaque--visible');
  }

function formCallback() {
  const title = document.getElementById('task-title').value;
  let description = document.getElementById('task-description').value;
  let project = document.getElementById('task-project').value;
  let dueDate = document.getElementById('task-due-date').value;
  let priority = document.getElementById('task-priority').value;

  console.log(createTask(title, description, project, dueDate, priority));
} 

let expandColapseButton = document.getElementById('expand-colapse');
expandColapseButton.addEventListener('click', expandClose)

let createButton = document.getElementById('create-task');
createButton.addEventListener('click', openCloseForm);

let closeFormButton = document.getElementById('close-form');
closeFormButton.addEventListener('click', openCloseForm);

let acceptFormButton = document.getElementById('accept-form');
acceptFormButton.addEventListener('click', formCallback);
acceptFormButton.addEventListener('click', openCloseForm);
*/