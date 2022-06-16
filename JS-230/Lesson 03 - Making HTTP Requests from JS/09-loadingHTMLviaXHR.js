document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');


  let request = new XMLHttpRequest();
  request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com/products');

  request.addEventListener('load', event => {
    store.innerHTML = request.response;
  });

  request.send();

  store.addEventListener('click', event => {
    let target = event.target;
    if (target.tagName !== 'A') {
      return;
    }

    event.preventDefault();

    let request = new XMLHttpRequest();
    request.open('GET', 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute('href'));

    request.addEventListener('load', event => store.innerHTML = request.response);
    request.send();
  });

  document.addEventListener('submit', event => {
    event.preventDefault();
    let form = store.querySelector('form');

    let data = new FormData(form);

    let request = new XMLHttpRequest();

    
    request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com' + form.getAttribute('action'));
    request.setRequestHeader('Authorization', 'token AUTH_TOKEN')

    request.addEventListener('load', (event) => {
      store.innerHTML = request.response;
    })

    request.send(data);

  })


});