//move the header
let header = document.querySelector('body>header');
let main = document.querySelector('main');
let title = document.querySelector('h1');

header.insertAdjacentElement('afterBegin', title);
document.body.insertAdjacentElement('afterBegin', header);

let imageMop = document.querySelector('figure').firstElementChild;
let imageStick = document.querySelectorAll('figure')[1].firstElementChild;

let figures = document.querySelectorAll('figure');

let [stickFigure, mopFigure] = [figures[0], figures[1]];

stickFigure.insertAdjacentElement('afterbegin', imageStick);
mopFigure.insertAdjacentElement('afterbegin', imageMop);

let article = document.getElementById('content').firstElementChild;
article.appendChild(stickFigure);
article.appendChild(mopFigure);