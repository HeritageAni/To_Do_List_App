console.log('This is my to do list app');

const form = document.querySelector('form');
const allTask = document.querySelector('#allTask');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();

    if (text === "") return;

    // Outer task row container
    const parent = document.createElement('div');
    parent.classList.add('task-item');

    // Task label
    const task = document.createElement('span');
    task.classList.add('task-text');
    task.textContent = text;

    // Container for buttons
    const buttonGroup = document.createElement('div');
    buttonGroup.classList.add('button-group');

    // Action buttons
    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";
    doneButton.classList.add('btn', 'btn-done');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.classList.add('btn', 'btn-delete');

    // Assemble elements
    buttonGroup.append(doneButton, deleteButton);
    parent.append(task, buttonGroup);
    allTask.append(parent);

    // Event Listeners
    deleteButton.addEventListener('click', () => {
        parent.remove();
    });

    doneButton.addEventListener('click', () => {
        task.classList.toggle('completed');
    });

    form.reset();
});