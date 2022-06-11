class Tracker {
  constructor() {
    this.eventList = [];
  }

  list() {
    return this.eventList.slice();
  }

  clear() {
    this.eventList = [];
    return 0;
  }

  elements(){
    return this.eventList.map(e => e.target)
  }

  addUniqueEvent(event) {
    if(!this.eventList.includes(event)){
      this.eventList.push(event);
    }
  }
}

let tracker = new Tracker();

document.addEventListener("DOMContentLoaded", () => {

  function track(callback) {
    return (event) => {
      tracker.addUniqueEvent(event);
      event.stopPropagation();
      callback(event);
    }
  }

  let divRed = document.querySelector('#red');
  let divBlue = document.querySelector('#blue');
  let divOrange = document.querySelector('#orange');
  let divGreen = document.querySelector('#green');


  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));
  
  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));
  
  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));
  
  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));
})
