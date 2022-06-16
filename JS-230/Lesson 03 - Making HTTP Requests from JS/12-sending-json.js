document.addEventListener("DOMContentLoaded", () => {
  let request = new XMLHttpRequest();
  request.open('POST', 'https://ls-230-web-store-demo.herokuapp.com/v1/products');
  request.setRequestHeader('Content-Type', "application/json; charset=utf-8");
  request.setRequestHeader('Authorization', 'token AUTH_TOKEN');

  let obj = {
    name: 'me',
    sku:  '12345kj',
    price: 23
  }

  let data = JSON.stringify(obj);

  request.addEventListener('load', event => {
    console.log(event.target.response);
  })

  request.send(data);

});