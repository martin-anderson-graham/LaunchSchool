function lightsOn(numSwitches) {
  let arr = new Array(numSwitches).fill(false);

  for (let i = 1; i <= numSwitches; i += 1) {
    arr = arr.map( (ele, index) => (index + 1) % i === 0 ? !ele: ele);
  }

  return arr.map ( (ele, index) => ele ? index + 1 : undefined).filter( ele => ele);
}

/*
problem
- the total number of switches
- output an array of switches numbers that are on
- rules
  - lights start off (false)
  - toggle switches on
    - 1st time all fo them
    - 2nd time 2, 4, 6, ...
    - 3rd time 3, 6, 9
    - nth time

examples/test cases
*/

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/* 
data structures
- an array of length n of booleans whose index corresponds to the switch
  - note that index 0 -> is switch 1!


algorithm
- create an array of length numSwitches filled with false.
- loop numSwitch times (index goes from 1 to n)
  - each time loop through the array and toggle lights for which (index + 1 ) % loopvar === 0
- map the boolean array to (index+1) values for on switches (undefined for off)
- return the array filtered for truthy values only

*/