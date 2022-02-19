class Cipher {
  static encode(str) {
    let resultArray = [];
    for (let idx = 0; idx < str.length; idx += 1) {
      let charIdx = str.charCodeAt(idx);
      let currentChar = str.charAt(idx);
      if (currentChar.match(/[a-m]|[A-M]/)) {
        charIdx += 13;
      } else if (currentChar.match(/[n-z]|[N-Z]/)) {
        charIdx -= 13;
      }
      resultArray.push(String.fromCharCode(charIdx));
    }
    return resultArray.join('');
  }
}


module.exports = Cipher;