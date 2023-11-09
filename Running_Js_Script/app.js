let input = prompt("What would you like to do?");
const todos = ["Collect Chicken Eggs", "Clean litter Box"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("***********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("***********");
  } else if (input === "new") {
    const newTodo = prompt("Ok what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the lsit`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter the index to delete"));
    if (!Number.isNaN(index)) {
      if (index <= todos.length - 1) {
        const deletedTodo = todos.splice(index, 1);
        console.log(`Deleted: ${deletedTodo}`);
        console.log(todos);
      } else {
        console.log("Out of range!");
      }
    } else {
      console.log("Not a valid number");
    }
  }
  input = prompt("What would you like to do?");
}

console.log("Quitting the App!");
