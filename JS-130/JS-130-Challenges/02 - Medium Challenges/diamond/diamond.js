function Diamond() { }
Diamond.makeDiamond = function (letter) {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let targetIndex = letters.indexOf(letter) + 1;
  let result = [];
  result.push(' '.repeat(targetIndex - 1) + letters[0] + ' '.repeat(targetIndex - 1));
  for (let idx = 1; idx < targetIndex; idx += 1) {
    let temp = '';
    temp += " ".repeat(targetIndex - idx - 1);
    temp += letters[idx];
    temp += " ".repeat((2 * idx) - 1);
    temp += letters[idx];
    temp += " ".repeat(targetIndex - idx - 1);
    result.push(temp);
  }
  for (let idx = targetIndex - 2; idx > 0; idx -= 1) {
    let temp = '';
    temp += " ".repeat(targetIndex - idx - 1);
    temp += letters[idx];
    temp += " ".repeat((2 * idx) - 1);
    temp += letters[idx];
    temp += " ".repeat(targetIndex - idx - 1);
    result.push(temp);
  }
  if (letter !== 'A') {
    result.push(' '.repeat(targetIndex - 1) + letters[0] + ' '.repeat(targetIndex - 1));
  }
  return result.join('\n') + '\n';
};

console.log(" A \nB B\n A \n");

module.exports = Diamond;

