//Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let countAbove99 = (arr) =>{
  let count = 0;
  for (let n of arr) {
    if (n >= 100) {
      count++;
    }
  }
  return count;
}

console.log(countAbove99(scores));