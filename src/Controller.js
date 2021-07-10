import {ViewController, TasksElementController, DOMController} from './DOMControl.js'
import {TasksObjectController} from './LogicControl'

const Controller = (() => {

    ViewController();
    TasksElementController();
    DOMController();

    TasksObjectController();

    const createTaskFormCallback = () => {

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const project = document.getElementById('task-project').value;
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('task-priority').value;
    
        //TasksObjectController.createTask(title, description, project, dueDate, priority);
        console.log(title, description, project, dueDate, priority);
    }
    
    const addEventsListeners = (() => {

        const acceptFormButton = document.getElementById('accept-form');
        acceptFormButton.addEventListener('click', createTaskFormCallback);

    })();

})();