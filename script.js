//your code here
// Get the input, button, and list elements by their IDs
const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Function to add a new todo item
function addTodo() {
  const todoText = newTodoInput.value.trim(); // Trim removes leading/trailing whitespace
  if (todoText === '') {
    // Don't add empty todos
    alert('Please enter a valid todo item.');
    return;
  }

  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.textContent = todoText;

  // Add a click event to remove the todo when clicked
  listItem.addEventListener('click', function () {
    todoList.removeChild(listItem);
  });

  // Add the new todo to the list
  todoList.appendChild(listItem);

  // Clear the input
  newTodoInput.value = '';
}

// Add a click event to the "Add todo" button
addTodoBtn.addEventListener('click', addTodo);

// Add a keypress event to the input to allow adding todos with Enter key
newTodoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTodo();
  }
});

