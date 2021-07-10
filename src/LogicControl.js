const TasksObjectController = () => {

  const tasksArray = [];

  const createTask = (title = "",description = "",project = "inbox",dueDate = null, priority = "normal") => {
    const task = {title, description, project, dueDate, priority}
    tasksArray.push(task);
  }

  return {tasksArray, createTask}
}

export {TasksObjectController}