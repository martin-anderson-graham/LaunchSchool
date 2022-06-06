//Reverse the behavior of scenario 3. Have the alert box of the div#elem1 element show up first.

let elem1 = document.querySelector('#elem1');
let elem4 = document.querySelector('#elem4');

elem1.addEventListener('click', event => alert(event.currentTarget.id), true);
elem4.addEventListener('click', event => alert(event.currentTarget.id));


// Study the example below.

// Can you predict what happens when you click on "4"?
// If we add the following line of code, what will happen?

let divs = document.querySelectorAll('.pick');

for(let index = 0; index < divs.length; index += 1) {
  divs[index].addEventListener('click', highlightThis, true);
}
    
function highlightThis(e) {
  alert(`${this.className} ${e.currentTarget.tagName}`);
}

//click on 4 - 

//Check out the HTML structure and the JavaScript code. How many alert boxes do you think will fire when the yellow box is clicked? Why?

