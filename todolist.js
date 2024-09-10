document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") { // Ensure the task is not empty
        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;
  
        // Add a click event to mark the task as completed
        li.onclick = function() {
          li.classList.toggle('completed');
        };
  
        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
  
        // Add event to delete the task
        deleteBtn.onclick = function() {
          taskList.removeChild(li);
        };
  
        // Add delete button to the list item
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
  
        // Clear the input field
        taskInput.value = '';
      }
    }
  
    // Add task when the button is clicked
    addTaskBtn.addEventListener('click', addTask);
  
    // Also allow pressing Enter key to add a task
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });
  