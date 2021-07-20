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
    model.newTask('FFF VI', 'ADICTED', '2021-20-7', 'VERY HIGH', 'Inbox');*/

    function createTask() {

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const project = document.getElementById('task-project').value;
        const date = document.getElementById('task-date').value;
        const priority = document.getElementById('task-priority').value;

        model.newTask(title,description,date,priority,project);
        view.wipeContent();
        view.loadTasks(model.taskList["Inbox"]);
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