 const list = document.getElementById("todo_list");
const newButton = document.getElementById("newButton");

   
    function create(text) {
      const todo = document.createElement("div");
      todo.className = "todo";
      todo.textContent = text;

   
      todo.addEventListener("click", function () {
        removeList(todo);
      });

     
      list.insertBefore(todo, list.firstChild);
    }

   
    function removeList(todo) {
      const confirmDelete = confirm("Do you really want to remove this TO DO?");
      if (confirmDelete) {
        todo.remove();
      }
    }

 
    newButton.addEventListener("click", function () {
      const text = prompt("Enter your new TO DO:");
      if (text && text.trim() !== "") {
        create(text.trim());
      }
    });