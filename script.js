function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    
    if (todoText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const todoList = document.getElementById('todo-list');
  
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = todoText;
  
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      todoList.removeChild(li);
    };
  
    // Append the delete button to the list item
    li.appendChild(deleteBtn);
  
    // Appending the list item to the list
    todoList.appendChild(li);
  
    
    todoInput.value = '';
  }

  const button=document.querySelector('.btn');
  button.addEventListener('click',(event)=>addTodo());
  