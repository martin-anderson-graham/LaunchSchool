let sortingFunction = (itemA, itemB) => {
  let titleA = itemA.title.toLowerCase();
  let titleB = itemB.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleB < titleA) {
    return 1;
  } else {
    return 0;
  }
}

const sortTodoLists = (todoListsArr) => {
  let doneTodoLists = todoListsArr.filter(todoList => todoList.isDone());
  let unDoneTodoLists = todoListsArr.filter(todoList => !todoList.isDone());

  return [...unDoneTodoLists.sort(sortingFunction), ...doneTodoLists.sort(sortingFunction)];
};

const sortTodos = (todoList) => {
  let doneTodos = todoList.allDone().toArray();
  let notDoneTodos = todoList.allNotDone().toArray();

  return [...notDoneTodos.sort(sortingFunction), ...doneTodos.sort(sortingFunction)];
};

module.exports = {sortTodoLists, sortTodos};