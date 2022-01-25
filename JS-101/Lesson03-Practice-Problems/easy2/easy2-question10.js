let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter( (val) => val === 't').length);
console.log(statement2.split('').filter( (val) => val === 't').length);