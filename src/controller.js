import {View} from './view.js'
import {Model} from './model.js'

const Controller = (() => {

    const view = View();
    const model = Model();

    let editing = true;

  
    function checkboxCallback() {
        const taskElement = this[0];
        const taskObject = this[1];
        view.checkUncheckTask(taskElement, taskObject.isCompleted);
        if(!taskObject.isCompleted){
            taskObject.isCompleted = true;
        } else {
            taskObject.isCompleted = false;
        }
    }

    function setPriorityVeryLow() {
        const taskElement = this[0];
        const taskObject = this[1];
        const priorityColor = taskElement.querySelector('#priority')
        priorityColor.classList.remove('task--priority__very-high', 'task--priority__high', 'task--priority__normal', 'task--priority__low', 'task--priority__very-low');
        priorityColor.classList.add('task--priority__very-low');
        taskObject.priority = "Very Low";
    }

    function setPriorityLow() {
        const taskElement = this[0];
        const taskObject = this[1];
        const priorityColor = taskElement.querySelector('#priority')
        priorityColor.classList.remove('task--priority__very-high', 'task--priority__high', 'task--priority__normal', 'task--priority__low', 'task--priority__very-low');
        priorityColor.classList.add('task--priority__low');
        taskObject.priority = "Low";
    }

    function setPriorityNormal() {
        const taskElement = this[0];
        const taskObject = this[1];
        const priorityColor = taskElement.querySelector('#priority')
        priorityColor.classList.remove('task--priority__very-high', 'task--priority__high', 'task--priority__normal', 'task--priority__low', 'task--priority__very-low');
        priorityColor.classList.add('task--priority__normal');
        taskObject.priority = "Normal";
    }

    function setPriorityHigh() {
        const taskElement = this[0];
        const taskObject = this[1];
        const priorityColor = taskElement.querySelector('#priority')
        priorityColor.classList.remove('task--priority__very-high', 'task--priority__high', 'task--priority__normal', 'task--priority__low', 'task--priority__very-low');
        priorityColor.classList.add('task--priority__high');
        taskObject.priority = "High";
    }

    function setPriorityVeryHigh() {
        const taskElement = this[0];
        const taskObject = this[1];
        const priorityColor = taskElement.querySelector('#priority')
        priorityColor.classList.remove('task--priority__very-high', 'task--priority__high', 'task--priority__normal', 'task--priority__low', 'task--priority__very-low');
        priorityColor.classList.add('task--priority__very-high');
        taskObject.priority = "Very High";
    }

    function toggleTaskEdition() {
        const taskElement = this[0];
        const taskObject = this[1];
        if(editing) {
            view.openTaskEdition(taskElement, taskObject);
            editing = false;
        }
        else {
            taskObject.title = taskElement.querySelector('#title-edit').value;
            taskObject.description = taskElement.querySelector('#description-edit').value;
            view.closeTaskEdition(taskElement, taskObject);
            editing = true;
            console.log(taskObject);
        }
    }

    function deleteTask() {}


    const addTaskEventListeners = (taskElement, taskObject) => {

        const argsArray = [taskElement, taskObject];

        const checkbox = taskElement.querySelector('#checkbox');
        checkbox.addEventListener('click', checkboxCallback.bind(argsArray))

        const priorityVeryLow = taskElement.querySelector('#priority-vlow');
        priorityVeryLow.addEventListener('click', setPriorityVeryLow.bind(argsArray));

        const priorityLow = taskElement.querySelector('#priority-low');
        priorityLow.addEventListener('click', setPriorityLow.bind(argsArray));

        const priorityNormal = taskElement.querySelector('#priority-normal');
        priorityNormal.addEventListener('click', setPriorityNormal.bind(argsArray));

        const priorityHigh = taskElement.querySelector('#priority-high');
        priorityHigh.addEventListener('click', setPriorityHigh.bind(argsArray));

        const priorityVeryHigh = taskElement.querySelector('#priority-vhigh');
        priorityVeryHigh.addEventListener('click', setPriorityVeryHigh.bind(argsArray));

        const edit = taskElement.querySelector('#edit');
        edit.addEventListener('click', toggleTaskEdition.bind(argsArray));

        const deleteButton = taskElement.querySelector('#delete');
        deleteButton.addEventListener('click', deleteTask.bind(argsArray));
    }

    function createTask() {

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const project = document.getElementById('task-project').value;
        const date = document.getElementById('task-date').value;
        const priority = document.getElementById('task-priority').value;

        const taskObject = model.newTask(title,description,date,priority,project);
        const taskElement = view.createTask(taskObject);
        addTaskEventListeners(taskElement,taskObject);
        view.appendTask(taskElement);
    }

    view.loadSidebar();
    view.loadMain();
    view.loadTasks(model.taskList["Inbox"])

    const newTaskButton = document.getElementById('new-task');
    newTaskButton.addEventListener('click', view.openCreateTaskForm);

    const closeFormButton = document.getElementById('close-form');
    closeFormButton.addEventListener('click', view.closeCreateTaskForm);

    const createTaskButton = document.getElementById('accept-form');
    createTaskButton.addEventListener('click', createTask)
    createTaskButton.addEventListener('click', view.closeCreateTaskForm);
})();

export {Controller}