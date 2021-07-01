const createTask = (taskTitle = "",taskDescription = "",taskProject = "inbox",taskDueDate = null, taskPriority = "normal") => {
  let title = taskTitle;
  let description = taskDescription;
  let project = taskProject;
  let dueDate = taskDueDate;
  let priority = taskPriority;

  return {title, description, project, dueDate, priority}
}

export default createTask