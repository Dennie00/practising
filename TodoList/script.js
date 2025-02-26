const userInput = document.getElementById("userInput");
const dateInput = document.getElementById("dateInput");
const submitBtn = document.getElementById("submitBtn");
const todosContainer = document.getElementById("todosArray");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

renderTodoList();

  function renderTodoList() {
    let todosHTML = "";
    todosContainer.innerHTML = "";

    if(todos.length > 0) {
      for(let i = 0; i < todos.length; i++) {
      const todoObject = todos[i];
      const { name, date, id} = todoObject;
      todosHTML = `
        <div class="todoObject" id=${id}>
        <h2>${name}</h2>
        <p>${date}</p>
        <button class="deleteBtn" onclick='deleteTask(${i})'>Delete</button>
        </div>
        `
      todosContainer.innerHTML += todosHTML;
    }
    }
  }

  function deleteTask(i) {
    todos.splice(i, 1);
    updateLocalStorage()
    renderTodoList();
    
  }

  function updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function addToDo() {
    const textValue = userInput.value;
    const dateValue = dateInput.value;

    if(!textValue || !dateValue) {
      todosContainer.innerHTML = `<h2 class="warning">Please enter both values</h2>`
      renderTodoList();
    } else {
      todos.push( {
        id:  Date.now(),
        name: textValue,
        date: dateValue
        })
        
        updateLocalStorage();
  
        todosContainer.innerHTML = "";
        renderTodoList();
    }
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addToDo();
    userInput.value = "";
    dateInput.value = "";
  })

  updateLocalStorage();
  
  

  

