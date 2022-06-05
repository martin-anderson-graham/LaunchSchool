console.log('3 ',document.head.childNodes.length);
console.log('TITLE ', document.head.children[0].tagName);
console.log( document.head.textContent);
console.log('3 ',document.body.children.length);
console.log('5 ', document.body.childNodes.length);
console.log('BODY', document.querySelector('div').parentNode.parentNode.tagName);
console.log('null ', document.querySelector('div section').children[2].nextElementSibling);
console.log('1 ', document.querySelectorAll('div').length);
var nodeA = document.body.firstElementChild;
console.log('1 ', document.querySelector('footer').children.length);
console.log('HEADER ', document.querySelector('body').replaceChild(
     document.querySelector('footer'), document.body.firstElementChild).tagName);
console.log('<header>Header</header> ', document.body.appendChild(nodeA));
console.log('["H1", "Hello", "World"] ', document.querySelector('section').textContent.split("\n").map(function(text) {
     return text.trim();
   }).filter(function(text) {
     return text.length > 0;
   }));
console.log('HTMLCollection(3) [h1, p, p] ', document.querySelector('section').children);
console.log(document.querySelector('section').textContent);
console.log('FOOTER ', document.querySelector('span.emphasis').parentNode.tagName);