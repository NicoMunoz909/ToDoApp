import {View} from './view.js'
import {Model} from './model.js'

const Controller = (() => {

    const view = View();
    const model = Model();

    /*model.newTask('FFF VI', 'ADICTED', '2021-20-7', 'VERY HIGH', 'Inbox');
    model.newTask('FFF VI', 'ADICTED', '2021-20-7', 'VERY HIGH', 'Inbox');
    model.newTask('FFF VI', 'ADICTED', '2021-20-7', 'VERY HIGH', 'Inbox');
    model.newTask('FFF VI', 'ADICTED', '2021-20-7', 'VERY HIGH', 'Inbox');
    model.newTask('FFF VI', 'ADICTED', '2021-20-7', 'VERY HIGH', 'Inbox');
    model.newTask('FFF VI', 'ADICTEDADICTEDADICTEDADICTEDADICTEDADICTEDADICTEDADICTEDADICTEDADICTED', '2021-20-7', 'VERY HIGH', 'Inbox');*/

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

    function changePriority() {
        const taskElement = this[0];
        const taskObject = this[1];
    }

    function editTaskInfo() {}

    function deleteTask() {}


    const addTaskEventListeners = (taskElement, taskObject) => {

        const argsArray = [taskElement, taskObject];

        const checkbox = taskElement.querySelector('#checkbox');
        checkbox.addEventListener('click', checkboxCallback.bind(argsArray))

        const priority = taskElement.querySelector('#priority');
        priority.addEventListener('click', changePriority.bind(argsArray));

        const edit = taskElement.querySelector('#edit');
        edit.addEventListener('click', editTaskInfo.bind(argsArray));

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