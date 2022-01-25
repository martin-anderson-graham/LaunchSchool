let addUp = (obj) => {
  return Object.values(obj).reduce( (a, b) => a + b, 0);
};

let minAge = (obj) => {
  return Object.values(obj).map( (age) => Number(age)).sort()[0];
};

let minAge2 = (obj) => {
  return Math.min(...Object.values(obj));
};

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(addUp(ages));
console.log(minAge(ages));
console.log(minAge2(ages));