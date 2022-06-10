//Without running it, what will the following code log to the console?

const promise = new Promise(function (resolve, reject) {
  resolve("I am a Promise");
});
​
promise.then(value => console.log(value));
console.log("I am NOT a Promise");

//"I am NOT" first - promise resolution at the bottom of the event loop