document.addEventListener('contextmenu', (event) => {
  alter(event.target.name);
  event.preventDefault();
})