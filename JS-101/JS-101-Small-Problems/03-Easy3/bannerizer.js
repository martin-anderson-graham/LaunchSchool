
let logInBox = (str, maxWidth = str.length + 4) => {

  console.log('+'.padEnd(maxWidth - 1, '-') + '+');
  console.log('|'.padEnd(maxWidth - 1, ' ') + '|');

  if (str.length <= maxWidth) {
    console.log('| ' + str + ' |');
  } else {
    while (str.length > 0) {
      if (str.length < maxWidth - 4) {
        str = str.padEnd(maxWidth - 4, ' ');
      }
      console.log('| ' + str.slice(0, maxWidth - 4) + ' |');
      str = str.slice(maxWidth - 4, str.length);
    }
  }


  console.log('|'.padEnd(maxWidth - 1, ' ') + '|');
  console.log('+'.padEnd(maxWidth - 1, '-') + '+');
};

logInBox('To boldly go where no one has gone before.', 19);
logInBox('');
