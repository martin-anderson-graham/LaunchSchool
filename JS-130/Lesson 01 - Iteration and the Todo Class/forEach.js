/* eslint-disable no-unused-vars */
function forEach (arr, callback, thisArg = undefined) {
  for (let idx = 0; idx < arr.length; idx++) {
    callback.call(thisArg, arr[idx], idx, arr);
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

// let arr = [1,2,3,4];
// let fn = function(ele) {
//   console.log(ele);
// };

// forEach(arr, fn);

// let foo = new Foo("Item: ");
// forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

let fn = function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
};

forEach(["a", "b", "c"], fn );

