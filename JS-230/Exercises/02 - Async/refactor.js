document.querySelector('html').addEventListener('click', (event) => {
  let container = document.querySelector('#container');

  if (event.target === container) {
    event.stopPropagation();
  } else {
    document.querySelector('#container').style = 'display: none';
  }
});