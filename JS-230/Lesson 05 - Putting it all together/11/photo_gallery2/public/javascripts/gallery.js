/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */


document.addEventListener('DOMContentLoaded', () => {
  let photosTemplate = Handlebars.compile(document.getElementById('photos').innerHTML);
  let photoInfoTemplate = Handlebars.compile(document.getElementById('photo_information').innerHTML);
  let photoCommentsTemplate = Handlebars.compile(document.getElementById('photo_comments').innerHTML);
  let photoCommentTemplate = Handlebars.compile(document.getElementById('photo_comment').innerHTML);
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

      addLikeFavoriteButtonEventListeners();
      addCommentSubmitListener();
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

  function updateLikesFavorites(event) {
    let xhr = event.target;
    let total = xhr.response.total;
    let field = '';
    if (xhr.responseURL.match(/like/)) field = 'likes';
    if (xhr.responseURL.match(/favorite/)) field = 'favorites';

    photosArr[currentPhotoIndex][field] = total;
    let photo = photosArr[currentPhotoIndex];
    let photoInfoHeader = document.querySelector('section > header');
    photoInfoHeader.innerHTML = photoInfoTemplate(photo);
    addLikeFavoriteButtonEventListeners();
  }

  function addLikeFavoriteButtonEventListeners() {
    document.querySelector('.actions').addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.tagName !== 'A') return;
      let clickedLink = event.target;

      let req = new XMLHttpRequest();
      let url = '';
      if (clickedLink.classList.contains('like')) {
        url = '/photos/like';
      } else if (clickedLink.classList.contains('favorite')) {
        url = '/photos/favorite';
      }
      req.open('POST', url);
      req.responseType = 'json';
      req.setRequestHeader(`Content-Type`, `application/json; charset=utf-8`)
      let data = JSON.stringify({ photo_id: photosArr[currentPhotoIndex].id });
      req.addEventListener('load', updateLikesFavorites);

      req.send(data);
    });
  }

  function handleNewComment(event) {
    let xhr = event.target;
    let commentUL = document.querySelector('#comments > ul');
    let div = document.createElement('div');
    div.innerHTML = photoCommentTemplate(xhr.response);
    console.log(div.firstElementChild);
    commentUL.appendChild(div.firstElementChild);
  }

  function addCommentSubmitListener() {
    let form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let fData = new FormData(form);
      let data = new URLSearchParams(fData);
      let req = new XMLHttpRequest();
      req.open('POST', '/comments/new');
      req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      req.responseType = 'json';

      req.addEventListener('load', handleNewComment);
      req.send(data);
      form.reset();
    });
  }
});