function combine(obj1, obj2) {
  let result = {};

  Object.entries(obj1).forEach (entry => {
    result[entry[0]] = entry[1];
  });

  Object.entries(obj2).forEach( entry => {
    result[entry[0]] = result[entry[0]] + entry[1] || entry[1];
  })

  return result;
}

/*
problem
 - input - two objects
 - output - a single object (don't mutate the arguments)
 - rules - any keys in both object get added together

examles - test cases */
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
let r = combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

console.log(r);

/*
data structures
objects - iterate through using Object.keys

algorithm
- create a result object to hold values
- iterate through each objects entries
  - if the property doesn't exist on the result object, create it
  - if the property does exist, add its value to the current result object value
- return the result object
*/