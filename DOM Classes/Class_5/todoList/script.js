let todoList = document.getElementById("todoList");
let inoutField = document.getElementById("inputField");

function addItem() {
    let listItem = document.createElement("li");
    listItem.setAttribute("class", "classItem");
    listItem.innerText = inoutField.value;
    todoList.appendChild(listItem);
}