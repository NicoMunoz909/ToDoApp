import {ViewController} from './DOMControl.js'
import {TasksObjectController} from './LogicControl'

const Controller = (() => {

    let activeView = "Inbox"

    const viewControl = ViewController();
    const logicControl = TasksObjectController();

    const updateView = () => {
        const task = viewControl.createTask(logicControl.tasksArray[logicControl.tasksArray.length -1]);
        document.getElementById('main').appendChild(task);
    }

    const createTaskFormCallback = () => {

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const project = document.getElementById('task-project').value;
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('task-priority').value;
    
        logicControl.createTask(title, description, project, dueDate, priority);

        if(project == activeView) {
            updateView();
        }
    }
    
    viewControl.openTab(logicControl.tasksArray, "Inbox");

    const addEventsListeners = (() => {

        const createTaskButton = document.getElementById('create-task');
        createTaskButton.addEventListener('click', viewControl.openCreateTaskForm);

        const closeFormButton = document.getElementById('close-form');
        closeFormButton.addEventListener('click', viewControl.closeCreateTaskForm);

        const acceptFormButton = document.getElementById('accept-form');
        acceptFormButton.addEventListener('click', createTaskFormCallback);
        acceptFormButton.addEventListener('click', viewControl.closeCreateTaskForm);

    })();

})();