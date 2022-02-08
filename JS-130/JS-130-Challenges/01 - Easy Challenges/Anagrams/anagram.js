/* eslint-disable max-lines-per-function */
function Anagram(word) {
  this.word = word;
}
Anagram.prototype.match = function (arr) {
  let matches = [];

  function countLetter(letter, word) {
    return word.split('').filter(lett => lett === letter).length;
  }

  function wordMatch(word1, word2) {
    let result = true;
    if (word1.length !== word2.length) {
      result = false;
    } else {
      result = word1.split('').every(letter => {
        return countLetter(letter, word1) === countLetter(letter, word2);
      });
    }
    return result;
  }


  arr.forEach(word => {
    if (wordMatch(this.word.toLowerCase(), word.toLowerCase())
      && word.toLowerCase() !== this.word.toLowerCase()) {
      matches.push(word);
    }
  });
  return matches;
};

module.exports = Anagram;