document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.textContent = taskInput.value;

        var completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        var actions = document.createElement('div');
        actions.className = 'task-actions';
        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(actions);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}