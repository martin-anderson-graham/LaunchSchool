document.addEventListener("DOMContentLoaded", () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'hts://api.github.com/repos/rails/rails')
  request.responseType = 'json';

  request.addEventListener('load', event => {
    let req = event.target;
    console.log(req.status);
    console.log(req.response.open_issues_count);
  })
  request.addEventListener('error', (event) => {
    console.log("The request could not be completed")
  })

  request.send();
})