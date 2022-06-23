/* eslint-disable max-lines-per-function */
let todoItems = [
  { id: 1, title: 'Homework' },
  { id: 2, title: 'Shopping' },
  { id: 3, title: 'Calling Mom' },
  { id: 4, title: 'Coffee with John ' }
];

function createTodoDiv({ id, title }) {
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
  todoItems.forEach(todo => div.appendChild(createTodoDiv(todo)));
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

  document.addEventListener('mousedown', (event) => {
    event.preventDefault();

    let contextMenu = document.getElementById('contextmenu');
    if (!contextMenu.hasAttribute('hidden') && !contextMenu.contains(event.target)) {
      contextMenu.toggleAttribute('hidden');
      return;
    }

    let checkNode = event.target;
    while (checkNode !== document.body) {
      if (checkNode.classList.contains('todo')) break;
      checkNode = checkNode.parentNode;
    }

    if (checkNode === document.body) return;

    if (contextMenu.hasAttribute('hidden') && event.button === 2) {
      contextMenu.style.left = event.clientX;
      contextMenu.style.top = event.clientY;
      contextMenu.toggleAttribute('hidden');
      contextMenu.dataset.id = checkNode.dataset.id;
    }
  });

  document.addEventListener('contextmenu', (event) => event.preventDefault());

  document.getElementById('contextmenu').addEventListener('click', (event) => {
    let ele = event.target;
    let contextMenu = document.getElementById('contextmenu');
    contextMenu.toggleAttribute('hidden');
    if (ele.id === 'deletetodo') {
      confirmDeletion(contextMenu.dataset.id);
    }
  });
});