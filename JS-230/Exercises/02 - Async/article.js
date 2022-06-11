document.addEventListener("DOMContentLoaded", () => {
  let articles = document.getElementsByTagName('article');
  let articleArray = Array.prototype.slice.call(articles);
  let main = document.querySelector('main');

  function clearHighlights() {
    let main = document.querySelector('main');
    main.classList.remove('highlight');
    Array.prototype.slice.call(main.children).forEach( (child) => {
      child.classList.remove('highlight');
    })
  }

  document.querySelector('header ul').addEventListener('click', (event) => {
    if(event.target.nodeName === 'A') {
      clearHighlights();
      event.stopPropagation();
      let articleID = event.target.textContent.toLowerCase().replace(' ', '-');
      document.getElementById(articleID).classList.add('highlight');
    }
  })

 main.addEventListener('click', (event) => {
    clearHighlights();
    articleArray.forEach( art => {
      if(art.contains(event.target)) {
        event.stopPropagation();
        art.classList.add('highlight');
      }
    });
  })

  document.addEventListener('click', (event) => {
    clearHighlights();
    main.classList.add('highlight');
  })

});
