import { toggleTheme } from "./toggle-theme.js";
import { addNewTask } from "./taskManager.js";

const themeBtn = document.getElementById('toggle-btn');
themeBtn.addEventListener('click', toggleTheme);

const form = document.getElementById('task-form');
form.addEventListener('submit', addNewTask);