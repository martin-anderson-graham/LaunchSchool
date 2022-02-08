function countLetter(letter, word) {
  return word.split('').filter(lett => lett === letter).length;
}

console.log(countLetter('i', "hello"));