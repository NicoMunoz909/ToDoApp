const TasksObjectController = () => {

  const tasksArray = [];

  const createTask = (title,description = "No description",project,dueDate, priority) => {
    console.log(title, description, project, dueDate, priority)
    const task = {title, description, project, dueDate, priority}
    tasksArray.push(task);
  }

  return {tasksArray, createTask}
}

export {TasksObjectController}