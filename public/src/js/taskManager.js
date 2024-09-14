const taskList = document.getElementById('task-list');

function createTaskElement(task) {
    const li = document.createElement('li');
    const checkContainer = document.createElement('div');
    const check = document.createElement('div');
    const phar = document.createElement('p');
    const cross = document.createElement('span');

    li.classList.add('todo-app__task-item'); 
    checkContainer.classList.add('todo-app__check-btn' ,'todo-app__check-btn--light-border');
    check.classList = 'inner-check';

    phar.classList = 'todo-app__text';
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

function markTaskAsCompleted(e) {
    const liItem = e.parentElement.parentElement
    liItem.classList.toggle('complete');
}

function deleteTask(taskItem) {
    if(confirm('Estás seguro de borrar este elemento?')) {
        taskItem.remove();
    }
}

export { addNewTask, markTaskAsCompleted, deleteTask};