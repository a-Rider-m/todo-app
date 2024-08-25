const taskList = document.getElementById('task-list');

function createTaskElement(task) {
    const li = document.createElement('li');
    const check = document.createElement('span');
    const phar = document.createElement('p');
    const cross = document.createElement('span');

    li.classList.add('todo-app__new-task', 'todo-app__new-task--task'); 
    check.classList = 'todo-app__check-btn';
    phar.textContent = task;
    cross.classList = 'todo-app__cross-btn';

    li.append(
        check,
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