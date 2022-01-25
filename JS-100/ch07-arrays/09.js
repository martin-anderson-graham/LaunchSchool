let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

/* I forgot about includes
let checkForThree = (arr) =>{
  let hasThree = false;
  arr.forEach( element => {
    if (element === 3){
      hasThree = true;
    }
  })
  if(hasThree){
    console.log(`Found has a three!`);
    return true;
  }
  else{
  console.log(`The array doesn't have a three!`);
  return false;
  }
};
*/

let checkForThree = arr => arr.includes(3);

console.log(checkForThree(numbers1));
console.log(checkForThree(numbers2));
console.log(checkForThree(numbers3));