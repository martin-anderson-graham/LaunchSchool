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