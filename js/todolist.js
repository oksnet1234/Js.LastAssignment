const todoForm = document.querySelector("#todoform");
const todoInput = todoForm.querySelector("input");
const todoButton = todoForm.querySelector("#todobutton");
const todoList = document.querySelector("#todolist");
const savedToDo = localStorage.getItem("todos");
const clear = document.querySelector("#clear");


let toDos = [];

if (savedToDo !== null) {
    const parsetodo =  JSON.parse(savedToDo);
    toDos = parsetodo;
    toDos.forEach(painting);
} 

todoButton.addEventListener("click",makeTodolist);

function saveToDos() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function painting(a) {
  const li = document.createElement("li");
  li.id = a.id;
  const span = document.createElement("span");
  span.innerText = a.text;
  const button = document.createElement("button");
  button.innerText = "⌫";
  button.addEventListener("click",toDodeletefunction);
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function makeTodolist(a) {
    a.preventDefault();
    const newToDo = {
        text : todoInput.value,
        id : Date.now()
    };
    if (newToDo.text === "") {
        alert("plz write something!");
    };
    
    toDos.push(newToDo);
    saveToDos();
    painting(newToDo);
    todoInput.value = "";
}

function toDodeletefunction(a) {
    a.preventDefault();
    const deleteli = a.target.parentElement;
    deleteli.remove();
    toDos = toDos.filter((b) => b.id !== parseInt(deleteli.id));
    saveToDos();
}

// clear button

clear.addEventListener("click", deletefunction);

function deletefunction(a) {
    // login clear
    localStorage.removeItem("username");
    loginForm.classList.remove("hidden");
    h1text.classList.add("hidden");
    loginInput.value = "";
    // todos clear
    localStorage.removeItem("todos");
    window.location.reload();
}



