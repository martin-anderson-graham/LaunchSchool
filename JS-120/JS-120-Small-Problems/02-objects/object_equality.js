function objectsEqual(obj1, obj2) {
  return (Object.keys(obj1).every(key => obj1[key] === obj2[key]) &&
    Object.keys(obj2).every(key => obj1[key] === obj2[key]));
}

console.log(objectsEqual({ a: 'foo' }, { a: 'foo' }));                      // true
console.log(objectsEqual({ a: 'foo', b: 'bar' }, { a: 'foo' }));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({ a: 'foo', b: undefined }, { a: 'foo', c: 1 }));  // false