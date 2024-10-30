// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('task-list');
    
    // Create list item
    const listItem = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const deleteBtn = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('checked');
    });

    deleteBtn.innerHTML = '✕';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => {
        taskList.removeChild(listItem);
    };

    label.textContent = taskText;

    // Append elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);

    // Append list item to the task list
    taskList.appendChild(listItem);

    // Clear the input
    taskInput.value = '';
}
