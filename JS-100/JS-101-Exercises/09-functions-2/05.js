/*
Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

The first human year corresponds to 15 cat years.
The second human year corresponds to 9 cat years.
Every subsequent human year corresponds to 4 cat years.
*/

let catAge = (age) => {
  let result = 0;
  if (age >= 1) {
    result += 15;
  }
  if (age >= 2) {
    result += 9;
  }

  if (age > 2) {
    result += ( age - 2 ) * 4;
  }
  
  return result;
}

for ( let i = 0; i < 5; i++){
  console.log(catAge(i));
}