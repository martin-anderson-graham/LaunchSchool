/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */


document.addEventListener('DOMContentLoaded', () => {
  let photosTemplate = Handlebars.compile(document.getElementById('photos').innerHTML);
  let photoInfoTemplate = Handlebars.compile(document.getElementById('photo_information').innerHTML);
  let photoCommentsTemplate = Handlebars.compile(document.getElementById('photo_comments').innerHTML);
  //let photoCommentTemplate = Handlebars.compile(document.getElementById('photo_comment').innerHTML);
  Handlebars.registerPartial('photo_comment', document.getElementById('photo_comment').innerHTML);

  let photosArr;
  let currentPhotoIndex = 0;

  (function getPhotos() {
    let req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:3000/photos');
    req.responseType = 'json';
    req.addEventListener('load', (event) => {
      let xhr = event.target;
      photosArr = xhr.response;
      console.table(photosArr);
      let photoHTML = photosTemplate({ photos: photosArr });
      let slidesEle = document.getElementById('slides');
      slidesEle.innerHTML = photoHTML;
      displayPhotoInfo(currentPhotoIndex);
    });
    req.send();
  })();

  function displayPhotoInfo(index) {
    let photo = photosArr[index];
    let photoInfoHeader = document.querySelector('section > header');
    photoInfoHeader.innerHTML = photoInfoTemplate(photo);

    let req = new XMLHttpRequest();
    req.open('GET', `http://localhost:3000/comments?photo_id=${photo.id}`);
    req.responseType = 'json';
    req.addEventListener('load', (event) => {
      let xhr = event.target;
      let commentUL = document.querySelector('#comments > ul');
      commentUL.innerHTML = photoCommentsTemplate({ comments: xhr.response });
    });

    req.send();
  }

  //dir is 1 for right and -1 for left
  function rotateSlideShow(dir) {
    let div = document.getElementById('slides');
    if (dir > 0) {
      let fig = div.firstElementChild;
      div.appendChild(fig);
    } else {
      let fig = div.lastElementChild;
      div.prepend(fig);
    }
  }

  let navUL = document.querySelector('ul > li> a.prev').parentNode.parentNode;

  navUL.addEventListener('click', (event) => {
    event.preventDefault();
    let change = 1;
    if (event.target.classList.contains('prev')) change = -1;

    currentPhotoIndex += change;
    if (currentPhotoIndex < 0) currentPhotoIndex = photosArr.length - 1;
    if (currentPhotoIndex === photosArr.length) currentPhotoIndex = 0;

    rotateSlideShow(change);
    displayPhotoInfo(currentPhotoIndex);
  });
});