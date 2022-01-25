//Write a function clone that takes an object as argument and returns a shallow copy of that argument. A shallow copy returns a new object that is a copy of the original object. However, only the object itself and any properties with primitive values are duplicated. Properties that are themselves objects are copied "by reference" -- that is, only a pointer to the object is copied.

let clone = (obj) => Object.assign({}, obj);

let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

let objCopy = clone(obj);
console.log(objCopy); // { number: 1, string: 'abc', array: [ 1, 2, 3 ] }

objCopy.number = 2;
objCopy.string = 'xyz';
objCopy.array.push(4);
console.log(obj.array);     // { number: 1, string: 'abc', array: [ 1, 2, 3, 4 ] }
console.log(objCopy.array); // { number: 2, string: 'xyz', array: [ 1, 2, 3, 4 ] }