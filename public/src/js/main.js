import { toggleTheme } from "./toggle-theme.js";
import { addNewTask, markTaskAsCompleted, deleteTask } from "./taskManager.js";

const themeBtn = document.getElementById('toggle-btn');
themeBtn.addEventListener('click', toggleTheme);

const form = document.getElementById('task-form');
form.addEventListener('submit', addNewTask);

const taskList = document.getElementById('task-list');

taskList.addEventListener('click', (e) => {
    if(e.target.classList.contains('inner-check')) {
        markTaskAsCompleted(e.target);
    } else if(e.target.classList.contains('todo-app__cross-btn')) {
        deleteTask(e.target.parentElement);
    }
});