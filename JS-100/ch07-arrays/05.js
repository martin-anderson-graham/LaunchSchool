let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];


/* Using forEach
let findIntegers = arr => {
  let tempArray = [];
  arr.forEach( val =>{
    if( Number.isInteger(val)){
      tempArray.push(val);
      }
    }
  )
  return tempArray;
}
*/

//using filter
let findIntegers = arr => {
  return arr.filter( num => Number.isInteger(num));
};

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]