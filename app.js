let input = prompt("What would you like to do?");
const todos = [];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    for (let i = 0; i < todos.length; i++) {
      alert(`${i}: ${todos[i]}`);
    }
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    alert(`${newTodo}-added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete:"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      alert(`Ok, deleted-${deleted[0]}`);
    } else alert("Unknown index");
  }
  input = prompt("What would you like to do?");
}
alert("Ok Quit The App!");
