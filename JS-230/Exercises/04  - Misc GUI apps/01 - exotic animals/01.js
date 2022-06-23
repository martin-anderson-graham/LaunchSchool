/* eslint-disable max-lines-per-function */

document.addEventListener('DOMContentLoaded', () => {
  let timeoutId = undefined;

  function showImagesCaption(imageElement) {
    let cap = imageElement.nextElementSibling;
    cap.hidden = false;
    timeoutId = undefined;
  }

  function hideImageCaption(imageElement) {
    let cap = imageElement.nextElementSibling;
    cap.hidden = true;
  }

  document.getElementById('images').addEventListener('mouseenter', (event) => {
    let ele = event.target;
    if (ele.tagName === 'IMG') {
      timeoutId = setTimeout( () => {
        showImagesCaption(ele);
      }, 2000);
    }
  }, true);

  document.getElementById('images').addEventListener('mouseleave', (event) => {
    let ele = event.target;
    if (ele.tagName === 'IMG') {
      event.stopPropagation();
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = undefined;
      } else {
        hideImageCaption(ele);
      }
    }
  }, true);

});