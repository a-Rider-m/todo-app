function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

//

function configButtonTheme(idBtn) {
    const btn = document.getElementById(idBtn);

    if(btn) {
        btn.addEventListener('click', toggleTheme);
    } else {
        console.error(`A button with the id ${idBtn} was not found.`);
    }
}

export { configButtonTheme };
