/*
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>Bold Element + Custom</title>
  </head>
  <body>
    <section>Hello World</section>
    <p>Greetings!</p>
  </body>
</html>
*/

function makeBold(ele, callback) {
  ele.setAttribute('font-weight', 'bold');

  let customEvent = new CustomeEvent('bolded', {
    detail: {backgroundColor: 'yellow'}
  });
  
}

/*
> let sectionElement = document.querySelector('section');
> makeBold(sectionElement, function(elem) {
    elem.classList.add('highlight');
  });

> sectionElement.classList.contains('highlight');
= true
> sectionElement.style.fontWeight;
= "bold"
*/