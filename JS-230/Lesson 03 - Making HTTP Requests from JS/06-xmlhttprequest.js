let path = 'https://api.github.com/repos/rails/rails';

let req = new XMLHttpRequest();

req.open('GET', path);

req.send();

req.addEventListener('load', () => {
  console.log(req.resonse);
});