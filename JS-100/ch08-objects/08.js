let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let copyObj = ( templateObj, arr = []) => {
  if( arr.length === 0){
    return Object.assign({}, templateObj);
  }
  let rObj = {};
  
  arr.forEach( key => {
    rObj[key] = templateObj[key];
  })
  return rObj;
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }