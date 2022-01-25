let countOccurrences = (arr) => {
  let result = {};
  arr.forEach( (val) => {
    result[val] = result[val] || 0;
    result[val]++;
  });
  Object.entries(result).forEach( (entry) => {
    console.log(`${entry[0]} => ${entry[1]}`);
  });
};


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);