// 1. Use JavaScript to set a class of 'heading' to the heading (the h1 element).

document.querySelector('h1').classList.add('heading');

// 2. Use JavaScript to set the class of the ul element to 'bulleted'.

document.getElementById('list').setAttribute('class', 'bulleted')

// 3 Toggling with onclick

let toggleHiddenClass = function (e) {
  e.preventDefault();
  document.getElementById('notice').classList.toggle('hidden');
}

document.getElementById('toggle').onclick = toggleHiddenClass;

document.getElementById('notice').onclick = (e) => {
  e.preventDefault();
  document.getElementById('notice').classList.toggle('hidden');
}

// 5 Locate the multiplication paragraph and change the text to the result of the arithmetic problem.

document.getElementById('multiplication').textContent = `${13*9}`

// 6 Set the ID of the body element to 'styled' to apply the rest of the styles from the original file. The body tag in this file doesn't have an ID, so you must locate it by some other means.
document.body.setAttribute('id', 'styled')