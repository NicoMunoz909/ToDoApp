const ViewController = (() => {

  const openInbox = () => {}

  const openProject = (project) => {}

  const openTodayTasks = () => {}

  const openUpcomingTasks = () => {}

  const openPastTasks = () => {}
})()

const TasksElementController = (() => {

  const createTask = () => {}

  const editTask = () => {}

  const deleteTask = () => {}

  const expandColapseTask = (mouseEvent) => {
    task = mouseEvent.path[2];
    button = mouseEvent.srcElement;
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

  const addEventsListeners = (() => {
    const expandColapseButtonsList = document.querySelectorAll('#expand-colapse');
    expandColapseButtonsList.forEach( button => {
      button.addEventListener('click', expandColapseTask.bind(this));
    })
  })();

})()

const DOMController = (() => {

  const openCreateTaskForm = () => {
    let form = document.getElementById('create-task-form');
    let opaque = document.getElementById('opaque');
    form.classList.add('form--visible');
    opaque.classList.add('opaque--visible');
  }

  const closeCreateTaskForm = () => {
    let form = document.getElementById('create-task-form');
    let opaque = document.getElementById('opaque');
    form.reset()
    form.classList.remove('form--visible');
    opaque.classList.remove('opaque--visible');
  }

  const openCloseEditTaskForm = () => {}

  const createTaskFormCallback = () => {

    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;
    const project = document.getElementById('task-project').value;
    const dueDate = document.getElementById('task-due-date').value;
    const priority = document.getElementById('task-priority').value;

    TasksObjectController.createTask(title, description, project, dueDate, priority);
    console.log(title, description, project, dueDate, priority);
  }

  const editTaskFormCallback = () => {}

  const addEventsListeners = (() => {
    const createTaskButton = document.getElementById('create-task');
    createTaskButton.addEventListener('click', openCreateTaskForm);

    const closeFormButton = document.getElementById('close-form');
    closeFormButton.addEventListener('click', closeCreateTaskForm);

    const acceptFormButton = document.getElementById('accept-form');
    acceptFormButton.addEventListener('click', createTaskFormCallback);
    acceptFormButton.addEventListener('click', closeCreateTaskForm);
  })();

})()