const TasksObjectController = () => {

  const tasksArray = [
    {
      title: "Code for 4 hours",
      description: "MUST CODE FOR FREEDOM",
      project: "Inbox",
      dueDate: "2021-08-23",
      priority: "Normal"
    }
  ];

  const createTask = (title,description,project,dueDate, priority) => {
    console.log(title, description, project, dueDate, priority)
    const task = {title, description, project, dueDate, priority}
    tasksArray.push(task);
  }

  return {tasksArray, createTask}
}

export {TasksObjectController}