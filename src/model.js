const Model = () => {

  const taskList = {
    "Inbox": []
  }

  const newTask = (title, description, date, priority, project, isCompleted = false) => {
    const task = {title,description,date,priority,project, isCompleted}
    taskList[project].push(task);
    return task
  }

  const deleteTask = (task) => {
    const taskIndex = taskList[task.project].indexOf(task);
    taskList[task.project].splice(taskIndex,1);
  }

  return {taskList, newTask, deleteTask}
}

export {Model}