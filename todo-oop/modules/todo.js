class Todo {
  constructor(title, completed = false) {
    this.title = title;
    this.completed = completed;
  }
  toggle() {
    this.completed = !this.completed;
  }
}


export default Todo;