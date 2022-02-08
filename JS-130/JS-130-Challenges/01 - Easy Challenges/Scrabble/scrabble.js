class Scrabble {
  static SCORES =  {
    AEIOULNRST: 1,
    DG: 2,
    BCMP: 3,
    FHVWY: 4,
    K: 5,
    JX: 8,
    QZ: 10,
  };

  constructor(str) {
    this.word = str;
  }

  scoreLetter(ltr) {
    let score = 0;
    for (let key of Object.keys(Scrabble.SCORES)) {
      if ( key.split('').includes(ltr)) {
        score = Scrabble.SCORES[key];
        break;
      }
    }
    return score;
  }
  score() {
    if (typeof this.word !== 'string') {
      return 0;
    }
    return this.word.split('').reduce( (acc, ele) => {
      return acc + this.scoreLetter(ele.toUpperCase());
    }, 0);
  }

  static score(word) {
    return (new Scrabble(word)).score();
  }
}

module.exports = Scrabble;