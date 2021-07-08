const createTask = (title = "",description = "",project = "inbox",dueDate = null, priority = "normal") => {
  return {title, description, project, dueDate, priority}
}

export default createTask