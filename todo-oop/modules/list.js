class List {
  constructor(initialList = []) {
    this.list = initialList;
  }
  add(item) {
    this.list.push(item);
    this.render();
  }
  remove(item) {
    this.list.splice(this.list.indexOf(item), 1);
    this._render();
  }

  _render() {
    const ul = document.querySelector("#list-container");
    ul.innerHTML = ""
    this.list.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.title;
      li.addEventListener("click", () => {
        item.toggle();
        li.classList.toggle("completed");
      });
      ul.appendChild(li);
    });
    return ul;
  }
}



export default List;