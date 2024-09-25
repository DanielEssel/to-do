const todos = [
    {task: "Go to School", status: "Done" }, 
    {task: "Sleep", status: "NotYet" }, 
    {task: "Eat", status: "wakeup" }, 
    {task: "Go to the market", status: "Wear" }, 
    {task: "Set oil in", status: "yeah" }, 
    {task: "move out", status:"mud" },
];

const viewButton = document.getElementById("view-button");
const todoItems = document.getElementById("todo-list");
// console.log(viewButton);

// es5 Syntax
// function [name of the func]
function showTodos() {
    // creat a li element
    // add text content to li
    // attach the li to the ul element
    const todoItem1 = document.createElement("li")
    todoItem1.textContent = todos[0];
    todoItems.appendChild(todoItem1);

    const functionName = () => {};
     todos.forEach((value) => {
        const todoItem = document.createElement("li");
        todoItem.textContent = value;
        todoItems.appendChild(todoItem);
    });

}
    // const todoItem2 = document.createElement("li")
    // todoItem2.textContent = todos[1];
    // todoItems.appendChild(todoItem2);

    // const todoItem3 = document.createElement("li")
    // todoItem3.textContent = todos[2];
    // todoItems.appendChild(todoItem3);

    // const todoItem4 = document.createElement("li")
    // todoItem4.textContent = todos[3];
    // todoItems.appendChild(todoItem4);

    // const todoItem5 = document.createElement("li")
    // todoItem5.textContent = todos[4];
    // todoItems.appendChild(todoItem5);


viewButton.addEventListener("click", showTodos);