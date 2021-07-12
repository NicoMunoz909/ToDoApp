const ViewController = () => {

  const createTask = (task) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task', 'collapsed');
    taskContainer.id = "task";

    const taskCheckbox = document.createElement('div');
    taskCheckbox.classList.add('task--checkbox');
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fas', 'fa-check');
    taskCheckbox.appendChild(checkIcon);
    taskContainer.appendChild(taskCheckbox);

    const taskTitle = document.createElement('p');
    taskTitle.classList.add('task--text', 'task--title');
    taskTitle.textContent = task.title;
    taskContainer.appendChild(taskTitle);

    const taskProject = document.createElement('div');
    taskProject.classList.add('task--project');
    const projectIcon = document.createElement('i');
    projectIcon.classList.add('fas', 'fa-circle');
    const projectName = document.createElement('p');
    projectName.classList.add('task--text');
    projectName.textContent = task.project;
    taskProject.appendChild(projectIcon);
    taskProject.appendChild(projectName);
    taskContainer.appendChild(taskProject);

    const taskDate = document.createElement('div');
    taskDate.classList.add('task--date');
    const dateIcon = document.createElement('i');
    dateIcon.classList.add('far', 'fa-calendar-alt');
    const date = document.createElement('p');
    date.classList.add('task--text');
    date.textContent = task.dueDate;
    taskDate.appendChild(dateIcon);
    taskDate.appendChild(date);
    taskContainer.appendChild(taskDate);

    const taskExpandColapse = document.createElement('div');
    taskExpandColapse.classList.add('task--expand-colapse');
    taskExpandColapse.id = 'expand-colapse'
    const expandColapseIcon = document.createElement('i');
    expandColapseIcon.classList.add('fas', 'fa-chevron-down', 'task--button');
    taskExpandColapse.appendChild(expandColapseIcon);
    taskContainer.appendChild(taskExpandColapse);

    const taskPriority = document.createElement('div');
    taskPriority.classList.add('task--priority');
    taskContainer.appendChild(taskPriority);

    const taskDescription = document.createElement('div');
    taskDescription.classList.add('task-description');
    const description = document.createElement('p');
    description.textContent = task.description;
    taskDescription.appendChild(description);
    taskContainer.appendChild(taskDescription);

    const priorityButton = document.createElement('i');
    priorityButton.classList.add('fas', 'fa-flag', 'task--button');
    const editButton = document.createElement('i');
    editButton.classList.add('fas', 'fa-pen', 'task--button');
    const deleteButton = document.createElement('i');
    deleteButton.classList.add('fas', 'fa-trash-alt', 'task--button');
    taskContainer.appendChild(priorityButton);
    taskContainer.appendChild(editButton);
    taskContainer.appendChild(deleteButton);

    return taskContainer;
  }

  const editTask = () => {}

  const deleteTask = () => {}

  const expandColapseTask = (mouseEvent) => {
    const task = mouseEvent.path[2];
    const button = mouseEvent.srcElement;
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

  const updateView = (tasksArray) => {
    const activeView = document.querySelector('div[data-active]');
    console.log(activeView);
    //openProject(tasksArray, activeView);
  }

  const openProject = (tasksArray, project) => {
    let tasks = tasksArray.filter(task => task.project == project)
    tasks.forEach(task => {

      const taskElement = createTask(task)

      const main = document.getElementById('main');
      main.appendChild(taskElement)
    });
  }

  const openTodayTasks = (tasksArray) => {}

  const openUpcomingTasks = (tasksArray) => {}

  const openPastTasks = (tasksArray) => {}

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

  const closeEditTaskForm = () => {}

  const openEditTaskForm = () => {}

  return {createTask, editTask, deleteTask, expandColapseTask, updateView, openProject, openTodayTasks, openUpcomingTasks, openPastTasks,openCreateTaskForm,closeCreateTaskForm, openEditTaskForm, closeEditTaskForm}
}

export {ViewController}