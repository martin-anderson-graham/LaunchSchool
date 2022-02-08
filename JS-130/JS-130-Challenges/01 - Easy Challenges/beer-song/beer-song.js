class BeerSong {
  static verse(num) {
    let result = '';
    if (num > 2) {
      result += `${num} bottles of beer on the wall, ${num} bottles of beer.\n`;
      result += `Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n`;
    } else if (num === 2) {
      result += `${num} bottles of beer on the wall, ${num} bottles of beer.\n`;
      result += `Take one down and pass it around, ${num - 1} bottle of beer on the wall.\n`;
    } else if (num === 1) {
      result += `${num} bottle of beer on the wall, ${num} bottle of beer.\n`;
      result += `Take it down and pass it around, no more bottles of beer on the wall.\n`;
    } else if (num === 0) {
      result += `No more bottles of beer on the wall, no more bottles of beer.\n`;
      result += `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
    }
    return result;
  }

  static verses(...args) {
    let result = [];
    for(let idx = args[0]; idx >= args[1]; idx -= 1) {
      result.push(BeerSong.verse(idx));
    }
    return result.join('\n');
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

console.log(BeerSong.verses(99, 98));

module.exports = BeerSong