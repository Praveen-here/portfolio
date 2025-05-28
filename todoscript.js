document.getElementById('add-task-btn').addEventListener('click', function() {
    let taskInput = document.getElementById('new-task').value;
    if (taskInput.trim() !== "") {
        let taskList = document.getElementById('tasks-list');
        
        // Create new task element
        let newTask = document.createElement('li');
        newTask.innerHTML = taskInput + ' <button class="remove-btn">Delete</button>';
        
        // Add remove functionality
        newTask.querySelector('.remove-btn').addEventListener('click', function() {
            newTask.remove();
        });
        
        // Add the task to the list
        taskList.appendChild(newTask);
        
        // Clear the input field
        document.getElementById('new-task').value = '';
    }
});
