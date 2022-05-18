function mysteryMath(text) {
  let result = text.replace(/[\+\-\*\/]/, '?')
  console.log(result);
  return result;
}

mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'