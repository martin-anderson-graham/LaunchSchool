function recycle(arr) {
  let bin = {
    paper: [],
    glass: [],
    organic: [],
    plastic: []
  };

  arr.forEach( obj => {
    bin[obj.material].push(obj.type);

    if(obj.secondMaterial) {
      bin[obj.secondMaterial].push(obj.type);
    }
  });

  return Object.values(bin);
}

/*
problem
- input - an array of objects
    - a 'type' property
    - a 'material' property
    - optionally a 'secondMaterial' property
- output
    - an array of arrays
    - composed of the values of the 'type' properties of the input objects
- rules
    - objects made of both materials should be in both bins
    - order of output object is paper, glass, organic, plastic
    - order of materials should be preserved

example */
let input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
];

let result = recycle(input);

result.forEach( arr => console.log(arr));

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],
//   ["wine bottle", "beer bottle"],
//   ["rotten apples", "out of date yogurt"],
//   ["out of date yogurt"]
// ]

/*
data structures
- input arrays and objects
- I will work with the output as an object, and then return an array of its values

algorithms
- create the bin object with properties paper, glass, organic, plastic whose
  values are empty arrays
- iterate through the input array
    - push the 'type' value to the 'material' property array
    - if 'secondMaterial' property, push the type as well
- return Object.values(bin) - check to see if order is preserved

*/