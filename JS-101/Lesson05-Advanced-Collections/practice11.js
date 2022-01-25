let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map( ( obj => {
  let tempObj = {};
  Object.entries(obj).forEach( entry => {
    let [key, value] = entry;
    tempObj[key] = ++value;
  });
  return tempObj;
}));

arr.forEach( (obj) => console.log(obj));
newArr.forEach( (obj) => console.log(obj));