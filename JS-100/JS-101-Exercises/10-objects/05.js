//Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

let ocean = {};
let prefix = 'Indian';

ocean.prefix = 'Pacific';

console.log(ocean); // ?

/////////////
let ocean = {};
let prefix = 'Indian';

ocean[prefix] = 'Pacific';

console.log(ocean); // ?


// {prefix: 'Pacific'}
// {Indian: 'Pacific'}