function updateXPosition(event) {
  let x = document.querySelector('.x');
  x.style.top= `${event.clientY}px`;
  x.style.left = `${event.clientX}px`;
}

function xColorChange(event) {
  let xDivs = [
    document.querySelector('.x .horizontal'),
    document.querySelector('.x .vertical')
  ];
  if(event.key === 'b') {
    xDivs.forEach(div => div.style.background = 'blue');
  } else if (event.key === 'g') {
    xDivs.forEach(div => div.style.background = 'green');
  } else if (event.key === 'r') {
    xDivs.forEach(div => div.style.background = 'red');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove" , updateXPosition);
  document.addEventListener('keyup', xColorChange);

})


function textFormat(event) {
  let counterParagraph = document.querySelector('.counter');
  let countString = `${140 - event.target.value.length} characters remaining`;
  counterParagraph.textContent = countString;
  
  if(event.target.value.length > 140) {
    event.target.style.color = 'red';
  } else {
    event.target.style.color = 'black';
  }
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.counter').textContent = '140 characters remaining';
    document.querySelector('.composer>textarea').addEventListener('keyup', textFormat);
});