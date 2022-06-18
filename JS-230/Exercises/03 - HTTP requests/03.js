function clear() {
  let inputs = document.querySelectorAll('input');
  let inputArr = Array.from(inputs)
  inputs.forEach(node => {
    node.value = '';
  })
}

function submit(event) {
  event.preventDefault();

  let request = new XMLHttpRequest();

  request.open("POST", "http://localhost:3000/api/staff_members");

  let form = document.querySelector('form');
  let data = new FormData(form);

  request.addEventListener('load', (event) => {
    let res = event.target;
    if(res.status === 400) {
      clear();
      alert(res.response);
    } else if(res.status === 201) {
      let json = JSON.parse(res.response);
      alert(`Successfully created staff with id: ${json.id}`);
      clear();
    }
  })

  request.send(data);
}

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form');
  
  form.addEventListener('submit', submit);
  

})