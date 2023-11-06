import Todo from "./modules/todo.js"
import List from "./modules/list.js"


const list = new List();

document.querySelector("form").addEventListener("submit", () => {
  event.preventDefault();
  const input = document.querySelector("input");
  const todo = new Todo(input.value);
  list.add(todo);
})
