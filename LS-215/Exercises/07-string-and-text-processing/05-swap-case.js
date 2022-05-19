function swapCase(text) {
  let result = text.split('')
                   .map( letter => /[a-z]/.test(letter) ? letter.toUpperCase() : letter.toLowerCase())
                   .join('');
  console.log(result);
  return result;
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"