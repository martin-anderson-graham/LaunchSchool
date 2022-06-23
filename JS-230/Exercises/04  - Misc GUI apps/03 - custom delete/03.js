let todoItems = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John '}
];

function createTodoDiv({id, title}) {
  let div = document.createElement('div');
  div.classList.add('todo');
  div.dataset.id = id;
  let para = document.createElement('p');
  para.textContent = title;
  let link = document.createElement('a');
  link.setAttribute('target', '_blank');

  link.addEventListener('click', (event) => {
    event.preventDefault();
    confirmDeletion(id);
  });

  let img = document.createElement('img');
  img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Ambox_delete_soft.svg');
  link.appendChild(img);
  div.appendChild(para);
  div.appendChild(link);

  return div;
}

function confirmDeletion(id) {
  let confirmationDiv = document.getElementById('customalert');
  confirmationDiv.hidden = false;
  document.getElementById('yes').dataset.id = id;
  document.getElementById('no').dataset.id = id;
}

function removeTodo(id) {
  let divToRemove = document.querySelector(`[data-id="${id}"]`);
  divToRemove.remove();
}

function populateAllTodos() {
  let div = document.querySelector('#todolist');
  todoItems.forEach( todo => div.appendChild(createTodoDiv(todo)));
}

document.addEventListener('DOMContentLoaded', () => {
  populateAllTodos();

  document.getElementById('yesno').addEventListener('click', (event) => {
    event.preventDefault();
    let ele = event.target;
    if (ele.textContent === 'Yes') {
      removeTodo(ele.dataset.id);
    }
    document.getElementById('yes').dataset.id = null;
    document.getElementById('no').dataset.id = null;
    document.getElementById('customalert').hidden = true;
  });
});