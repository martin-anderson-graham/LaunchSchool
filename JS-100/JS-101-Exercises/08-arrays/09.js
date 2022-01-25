//Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

let checkDestination = (arr, city) => {
  for (let c of arr) {
    if (c === city) {
      return true;
    }
  }
  return false;
};

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

console.log(checkDestination(destinations, 'Nashville'));