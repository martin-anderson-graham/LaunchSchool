function mysteriousMath (text) {
  let result = text.replace(/[\+\-\*\/]/g, '?')
  console.log(result);
  return result;
}

mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'