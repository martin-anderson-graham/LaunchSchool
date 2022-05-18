function isBalanced(text) {
  let parensCount = 0;
  let result = true;
  text.split('').forEach( letter => {
    if (letter === '(') {
      parensCount += 1;
    } else if (letter === ')') {
      parensCount -= 1;
    }
    if (parensCount < 0) {
      result = false;
    }
  });
  if (result) {
    result = (parensCount === 0);
  }
  console.log(result);
  return result;
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false