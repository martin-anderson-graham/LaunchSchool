/*
In this problem, we'll build a simple todo list program that uses the
techniques we've seen in this assignment.

Write a makeList function that creates and returns a new function that
implements a todo list. The returned function should have the following
behavior:

When called with an argument that is not already on the list, it adds that
  argument to the list.
When called with an argument that is already on the list, it removes the
  element from the list.
When called without arguments, it prints all of the items on the list. If the
  ist is empty, it prints an appropriate message.
*/
function makeList() {
  let todos = [];
  return function (item) {
    if (item === undefined) {
      if (todos.length === 0) {
        console.log("The list is empty.");
      } else {
        todos.forEach(todo => console.log(todo));
      }
    } else if (todos.indexOf(item) === -1) {
      console.log(`${item} added!`);
      todos.push(item);
    } else if (todos.indexOf(item) !== -1) {
      console.log(`${item} removed!`);
      todos.splice(todos.indexOf(item), 1);
    }
  };
}


let list = makeList();
list();
// The list is empty.

list("make breakfast");
// make breakfast added!

list("read book");
// read book added!

list();
// make breakfast
// read book

list("make breakfast");
// make breakfast removed!

list();
// read book