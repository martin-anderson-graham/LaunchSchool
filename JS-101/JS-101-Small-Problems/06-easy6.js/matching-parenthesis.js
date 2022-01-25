let isBalanced = (str) => {
  let count = 0;
  for (let idx = 0; idx < str.length; idx++) {
    if (str.charAt(idx) === '(') {
      count++;
    } else if (str.charAt(idx) === ')') {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);