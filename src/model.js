const Model = () => {

  const taskList = {
    "Inbox": []
  }

  const newTask = (title, description, date, priority, project, isCompleted = false) => {
    const task = {title,description,date,priority,project, isCompleted}
    taskList[project].push(task);
    return task
  }

  return {taskList, newTask}
}

export {Model}