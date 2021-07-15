const View = () => {

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

    return {loadSidebar}

}

export {View}