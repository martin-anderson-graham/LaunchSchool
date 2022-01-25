/* eslint-disable id-length */


function lightsOn(switches) {
  let stateArray = new Array(switches);
  stateArray.fill(false);
  for ( let i = 1; i <= switches; i++) {
    for (let j = 0; j < stateArray.length; j++) {
      if (j % i === i - 1) {
        stateArray[j] = !stateArray[j];
      }
    }
  }
  let result = [];
  stateArray.forEach( (val, idx) => {
    if (val) {
      result.push(idx + 1);
    }
  });
  return result;
}

console.log(lightsOn(9));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/*
## P
input a number (integer)
output a 1-indexed array of on lights

assumptions:
input number is greater than 1
lights are all off initially

## E

given

## D

  a boolean array to hold switch state
  return an array of integers of true


## A

   declare an array of boolean values to hold switch state
  loop through the array *input* number of times
  only flip switches that are (mod of the loop variable - 1 ) === count

  loop through array when finished, adding all on switches to a result array
  and returning that array

*/