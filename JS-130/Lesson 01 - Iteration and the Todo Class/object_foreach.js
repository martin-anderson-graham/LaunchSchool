function objectForEach(obj, callback) {
  for (let key of Object.keys(obj)) {
    callback(obj[key]);
  }
}

let myObj = {
  name: 'hi',
  age: 10,
  weight: 21,
};

let fn = function(ele) {
  console.log(ele);
};

objectForEach(myObj, fn);