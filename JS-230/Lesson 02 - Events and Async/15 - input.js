document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');
  let cursorID;

  textField.addEventListener('click', (e) => {
    e.stopPropagation();
    textField.classList.add('focused');

    if (!cursorID) {
      cursorID = setInterval(() => {
        textField.classList.toggle('cursor');
      }, 500);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (textField.classList.contains('focused')) {
      if (e.key.length === 1) {
        content.textContent += e.key;

      }
    }
  });

  document.addEventListener('click', (e) => {
    textField.classList.remove('focused');
    if (cursorID) {
      clearInterval(cursorID);
      textField.classList.remove('cursor');
      cursorID = undefined;
    }
  });

});