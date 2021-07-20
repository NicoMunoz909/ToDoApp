const View = () => {

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

    const wipeContent = () => {
        const container = document.getElementById('tasks-container');
        const childrenArray = Array.from(container.childNodes);
        childrenArray.forEach(child => {
            child.remove();
        })
    }

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
        date.textContent = task.date;
        taskDate.appendChild(dateIcon);
        taskDate.appendChild(date);
        taskContainer.appendChild(taskDate);
    
        const taskExpandColapse = document.createElement('div');
        taskExpandColapse.classList.add('task--expand-colapse');
        taskExpandColapse.id = 'expand-colapse'
        taskExpandColapse.addEventListener('click', expandColapseTask.bind(this));
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
        //priorityButton.addEventListener('click', editPriority.bind(this));
        const editButton = document.createElement('i');
        editButton.classList.add('fas', 'fa-pen', 'task--button');
        //editButton.addEventListener('click', editTitleAndDescrition.bind(this));
        const deleteButton = document.createElement('i');
        deleteButton.classList.add('fas', 'fa-trash-alt', 'task--button');
        //deleteButton.addEventListener('click', deleteTask.bind(this));
        taskContainer.appendChild(priorityButton);
        taskContainer.appendChild(editButton);
        taskContainer.appendChild(deleteButton);
    
        return taskContainer;
    }
    
    const loadSidebar = () => {
        const sidebar = document.createElement('div');
        sidebar.classList.add('sidebar');
        sidebar.id = 'sidebar';

        const inboxButton = document.createElement('button');
        inboxButton.type = 'button';
        inboxButton.id = 'inbox';
        //const inboxIcon = document.createElement('i');
        //inboxIcon.classList.add('fas', 'fa-inbox');
        //inboxButton.appendChild(inboxIcon);
        inboxButton.textContent = 'Inbox';
        sidebar.appendChild(inboxButton);

        const todayButton = document.createElement('button');
        todayButton.type = 'button';
        todayButton.id = 'inbox';
        //const todayIcon = document.createElement('i');
        //todayIcon.classList.add('far', 'fa-calendar');
        //todayButton.appendChild(todayIcon);
        todayButton.textContent = 'Today';
        sidebar.appendChild(todayButton);

        const upcomingButton = document.createElement('button');
        upcomingButton.type = 'button';
        upcomingButton.id = 'inbox';
        //const upcomingIcon = document.createElement('i');
        //upcomingIcon.classList.add('far', 'fa-calendar-alt');
        //upcomingButton.appendChild(upcomingIcon);
        upcomingButton.textContent = 'Upcoming';
        sidebar.appendChild(upcomingButton);

        const pastButton = document.createElement('button');
        pastButton.type = 'button';
        pastButton.id = 'inbox';
        //const pastIcon = document.createElement('div');
        //pastIcon.classList.add('far', 'fa-calendar-times');
        //pastButton.appendChild(pastIcon);
        pastButton.textContent = 'Past';
        sidebar.appendChild(pastButton);

        const separator = document.createElement('hr');
        separator.classList.add('separator1');
        sidebar.appendChild(separator);

        const projectsHeader = document.createElement('div');
        projectsHeader.classList.add('projects-header');
        const addProjectButton = document.createElement('button');
        addProjectButton.type = 'button';
        addProjectButton.id = 'add-project';
        const addProjectIcon = document.createElement('i');
        addProjectIcon.classList.add('fas', 'fa-plus');
        addProjectButton.appendChild(addProjectIcon);
        projectsHeader.appendChild(addProjectButton);
        const header = document.createElement('h2');
        header.textContent = "PROJECTS";
        projectsHeader.appendChild(header);
        sidebar.appendChild(projectsHeader);

        document.body.appendChild(sidebar);
        
    }

    const loadMain = () => {
        const main = document.createElement('main');
        main.id = 'main';

        const header = document.createElement('header');
        main.appendChild(header);

        const title = document.createElement('h1');
        title.textContent = "INBOX"
        header.appendChild(title);

        const createTaskButton = document.createElement('button');
        createTaskButton.type = "button";
        createTaskButton.id = "new-task";
        const plusIcon = document.createElement('i');
        plusIcon.classList.add('fas', 'fa-plus');
        createTaskButton.appendChild(plusIcon);
        header.appendChild(createTaskButton);

        const separator = document.createElement('hr');
        separator.classList.add('separator2');
        main.appendChild(separator);

        const tasksContainer = document.createElement('div');
        tasksContainer.id = 'tasks-container';
        tasksContainer.classList.add('tasks-container');
        main.appendChild(tasksContainer);

        document.body.appendChild(main);
    }

    const loadTasks = (array) => {

        if(array.length == 0) {
            const text = document.createElement('p');
            text.textContent = "Nothing to do here";
            
            const container = document.getElementById('tasks-container');
            container.appendChild(text)
            return
        }
        
        array.forEach(task => {
            const element = createTask(task);
            document.getElementById('tasks-container').appendChild(element)
        });
    }

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

    return {wipeContent, loadSidebar, loadMain, loadTasks, openCreateTaskForm, closeCreateTaskForm}

}

export {View}