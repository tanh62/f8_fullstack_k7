
var todoInput = document.querySelector(".todo-input");
var todoForm = document.querySelector(".todo-form");
var todoWrapper = document.querySelector(".wrapper");

function addTodoList(valueInput) {
    return `<div class="todo-item">
  <p class="">${valueInput}</p>
  <div class="icon-todo-item">
    <i class="fa-solid fa-pen-to-square"></i>
    <i class="fa-solid fa-trash"></i>
  </div>
</div>`;
}

todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var valueInput = todoInput.value;
    if (valueInput.length !== 0) {
        var addItem = addTodoList(valueInput);
        todoWrapper.insertAdjacentHTML("beforeend", addItem);
        todoInput.value = "";
    }
});

todoWrapper.addEventListener("click", function (e) {
    var valueInput = document.querySelector(".todo-item p");
    var inputEdit = document.querySelector(".todo-input-item");
    if (e.target.className === "fa-solid fa-pen-to-square") {
        e.target.parentElement.parentElement.remove();
        var html = ` <form class="todo-form">
    <input
      type="text"
      class="todo-input-item"
      placeholder="What is the task today?"
      value="${valueInput.innerText}"
    />
    <button type="button" class="todo-btn-item">Add Task</button>
  </form>`;
        todoWrapper.insertAdjacentHTML("beforeend", html);
    }
});


