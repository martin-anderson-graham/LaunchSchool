document.addEventListener('DOMContentLoaded', () => {
  let itemNameEle = document.getElementById('name');
  let quantityEle = document.getElementById('quantity');
  let form = document.querySelector('form');
  let groceryList = document.getElementById('grocery-list');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let itemName = itemNameEle.value;
    let quantity = quantityEle.value;

    if(quantity === '') quantity = '1';

    if(!Number(quantity)) {
      form.reset();
      return;
    }

    let li = document.createElement('li');
    li.textContent = `${quantity} ${itemName}`;

    groceryList.appendChild(li);
    form.reset();
  });

});