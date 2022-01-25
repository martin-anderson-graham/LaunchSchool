let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3,
  Bambam: 4, Pebbles: 5 };

let arr = Object.entries(flintstones).filter( (val) => val[0] === 'Barney').shift();

console.log(arr);