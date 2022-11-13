const form = document.getElementById("form");
const input = document.getElementById("input");
const todoList = document.getElementById("todoList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoValue = input.value;

  if (todoValue) {
    const todoElement = document.createElement("li");
    todoElement.innerText = todoValue;

    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
    });

    todoList.appendChild(todoElement);

    input.value = "";
  }
});
