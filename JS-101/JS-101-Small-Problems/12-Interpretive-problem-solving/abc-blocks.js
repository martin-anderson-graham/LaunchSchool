/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
const BLOCKS = {
  B: 'O',
  X: 'K',
  D: 'Q',
  C: 'P',
  N: 'A',
  G: 'T',
  R: 'E',
  F: 'S',
  J: 'W',
  H: 'U',
  V: 'I',
  L: 'Y',
  Z: 'M',
};

let isBlockWord = (str) => {
  let availableBlocks = Object.assign({}, BLOCKS);
  let strArray = str.split('');
  for (let idx = 0; idx < strArray.length; idx++) {
    let char = strArray[idx].toUpperCase();
    if (Object.keys(availableBlocks).includes(char)) {
      delete availableBlocks[char];
      continue;
    } else if (Object.values(availableBlocks).includes(char)) {
      for (let index = 0; index < Object.values(availableBlocks).length; index++) {
        if (Object.entries(availableBlocks)[index][1] === char) {
          delete availableBlocks[Object.entries(availableBlocks)[index][0]];
          break;
        }
      }
    } else {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
};

isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
