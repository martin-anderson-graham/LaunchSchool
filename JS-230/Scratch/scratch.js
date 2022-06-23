document.addEventListener('DOMContentLoaded', () => {
  let req = new XMLHttpRequest();
  req.open('GET', 'http://random-word-api.herokuapp.com/word');
  req.responseType = 'json';

  req.addEventListener('load', (event) => {
    console.log(event.target.status);
    console.log(event.target.response);
  });

  req.addEventListener('error', (event) => {
    console.log(event.target);
    console.log('error');
  });

  req.send();
});