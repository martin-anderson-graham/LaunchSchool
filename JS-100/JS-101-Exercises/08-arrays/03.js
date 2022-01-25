//Remove 'fossil' from the array, then add 'geothermal' to the end of the array.

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.splice(energy.indexOf('fossil'),1);
energy.push('geothermal');

console.log(energy);