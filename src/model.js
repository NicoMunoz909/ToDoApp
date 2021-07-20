const Model = () => {

  const taskList = {
    "Inbox": []
  }

  const newTask = (title,description,date,priority,project) => {
    const task = {title,description,date,priority,project}
    taskList[project].push(task);
    return task
  }

  return {taskList, newTask}
}

export {Model}