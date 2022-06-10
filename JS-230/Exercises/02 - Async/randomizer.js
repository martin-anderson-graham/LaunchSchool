function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  function getRandomTime(){
    return Math.floor(Math.random() * 1000 * 2 * callbacks.length);
  }

  callbacks.forEach( callback => {
    setTimeout(callback, getRandomTime());;
  });

  for(let i = 1; i <= 2 * callbacks.length; i += 1) {
    setTimeout( () => console.log(i), 1000 * i);
  }
}

randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6