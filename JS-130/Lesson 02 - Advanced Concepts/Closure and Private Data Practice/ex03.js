/* eslint-disable max-lines-per-function */

//this can be done simpler - just define the array outside of the return obj
//and the methods on the returned object - the array will be in the closure
//of the methods on the object

function makeList() {
  function listFunctions() {
    let todos = [];
    function add(item) {
      todos.push(item);
      console.log(`${item} added!`);
    }
    function remove(item) {
      if (todos.indexOf(item) !== -1) {
        todos.splice(todos.indexOf(item), 1);
        console.log(`${item} removed!`);
      }
    }
    function list() {
      if (todos.length === 0) {
        console.log("The list is empty")
      } else {
        todos.forEach(todo => console.log(todo));
      }
    }
    return [add, remove, list];
  }
  let obj = {};
  [obj.add, obj.remove, obj.list] = listFunctions();

  return obj;
}


let list = makeList();
list.add("peas");
// peas added!

list.list();
// peas

list.add("corn");
// corn added!

list.list();
// peas
// corn

list.remove("peas");
// peas removed!

list.list();
// corn

console.log(list.todos); //undefined!