/*
1. 
elem1.addEventListener('click', event => alert(event.target.tagName));
elem1.addEventListener('click', event => alert(event.currentTarget.tagName));



2.
elem1.addEventListener('click', event => alert("capturing"), true);
elem1.addEventListener('click', event => alert("bubbling"));


3.
document.addEventListener('keypress', event => {
  setTimeout(() => alert(event.code), 7000);
});

elem1.addEventListener('click', event => {
  setTimeout(() => alert(event.target.tagName), 7000);
});

2 - 1 - 1 -2
*/