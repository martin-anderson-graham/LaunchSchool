function myFilter(array, func) {
  let newArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if(func(array[i])) {
      newArr.push(array[i]);
    } 
  }

  return newArr;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let a = myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

a.forEach(ele => console.log(ele));
// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]