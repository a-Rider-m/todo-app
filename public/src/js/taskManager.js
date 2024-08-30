const taskList = document.getElementById('task-list');

function createTaskElement(task) {
    const li = document.createElement('li');
    const checkContainer = document.createElement('div');
    const check = document.createElement('div');
    const phar = document.createElement('p');
    const cross = document.createElement('span');

    li.classList.add('todo-app__new-task', 'todo-app__new-task--task'); 
    checkContainer.classList = 'todo-app__check-btn-container';
    check.classList = 'todo-app__check';
    phar.textContent = task;
    cross.classList = 'todo-app__cross-btn';

    checkContainer.append(check);
    
    li.append(
        checkContainer,
        phar,
        cross
    );

    return li;
}

function addNewTask(e) {
    e.preventDefault();
        
    const taskInput = document.getElementById('task-input');

    const task = taskInput.value;

    if(task) {
        taskList.append(createTaskElement(task));
        taskInput.value = '';
    };
}

function configTaskForm(idForm) {
    const form = document.getElementById(idForm);

    if(form) {
        form.addEventListener('submit', addNewTask);

    } else {
        console.error(`A form with the id ${idForm} was not found.`);
    }
}

export { configTaskForm };