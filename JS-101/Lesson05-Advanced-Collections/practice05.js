let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let age = Object.keys(munsters).reduce( (accum, key) => {
  if (munsters[key].gender === 'male') {
    return accum + munsters[key].age;
  } else {
    return accum;
  }
}, 0);

console.log(age);