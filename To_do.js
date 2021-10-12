
class todoapp {
  constructor(todo_item) {
    this.todo_item = todo_item;
  }
  addToDo() {
    //console.log("add clicked");
    this.todo_text = document.querySelector("#todo_text").value;
    console.log(this.todo_text);
    document.querySelector(this.todo_text);
    if (this.todo_text == "") {
      return;
    } else {
      this.todoObject = {
        id: todolist.length+1 ,
        todo_text: this.todo_text,
        isDone: false,
      };
      console.log(this.todoObject);
      todolist.unshift(this.todoObject);
      this.display();
    }
  }
  display() {    
    //todo_items.innerHTML = "";
    document.querySelector("#todo_text").value = "";
    todolist.forEach((item) => {
      this.listElement = document.createElement("li");
      this.listElement.innerHTML = item.todo_text;
      //console.log(listElement);
      this.deleteButton = document.createElement("i");
      this.deleteButton.setAttribute("class", "fas fa-trash-alt");
      this.deleteButton.setAttribute("data-id", item.id);
      if (item.isDone) {
        listElement.setAttribute("class", "checked");
      }
      this.listElement.setAttribute("data-id", item.id);
      //ADD EVENT TO LIST ITEM
      this.listElement.addEventListener("click", function (e) {
        this.selectedID = e.target.getAttribute("data-id");
        main.doneToDo(this.selectedID);
      });
      this.deleteButton.addEventListener("click", function (e) {
        this.delID = e.target.getAttribute("data-id");
        main.deleteitem(this.delID);
      });
      //todo_items.appendChild(this.listElement);
      this.listElement.appendChild(this.deleteButton);
    });
  }
  deleteitem(delID) {
    this.deleteIndex = todolist.findIndex((item) => item.id == delID);
    todolist.splice(this.deleteIndex, 1);
    console.log(delID)
    this.display();
  }
  doneToDo(selectedID) {
    this.selectedIdIndex = todolist.findIndex(
      (item) => item.id == this.selectedID,
      console.log(selectedID)
    );
    console.log(this.selectedIdIndex);
    if (this.selectedIdIndex == -1) {
      return;
    } else {
      this.todolist[this.selectedIdIndex].isDone
        ? (this.todolist[selectedIdIndex].isDone = false)
        : (this.todolist[selectedIdIndex].isDone = true);
      console.log(this.todolist[this.selectedIdIndex]);
      this.display();
    }
  }
  

  
}
const todolist = [];
const todo_item = document.querySelector("[todo_text]");
const main = new todoapp(todo_item);
const todo_items = document.querySelector("#ul-id");


addbutton.addEventListener("click", (button) => {
  main.addToDo();
  
});