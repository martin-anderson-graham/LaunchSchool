document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    let currentNode = event.target;
    while (currentNode !== document.body) {
      if (!currentNode) break;

      if (currentNode.tagName === 'A') {
        event.preventDefault();
      }
      currentNode = currentNode.parentNode;
    }
  });
});