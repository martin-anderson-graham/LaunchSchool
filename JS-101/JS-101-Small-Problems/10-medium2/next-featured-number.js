
let isFeatured = (num) => {
  if (num % 7) {
    return false;
  } else if (!(num % 2)) {
    return false;
  } else {
    let seenDigits = {};
    let digitArray = num.toString().split('');
    for (let idx = 0; idx < digitArray.length; idx++) {
      if (seenDigits[digitArray[idx]]) {
        return false;
      } else {
        seenDigits[digitArray[idx]] = 1;
      }
    }
    return true;
  }
};

let featured = (num) => {
  const MAX_FEATURED = 9876543201;
  if (num >= MAX_FEATURED ) {
    console.log('There is no possible number that fulfills those requirements.');
    return 'There is no possible number that fulfills those requirements.';
  } else {
    let currentNum = num + (7 - (num % 7));
    while (true) {
      if (isFeatured(currentNum)) {
        console.log(currentNum);
        return currentNum;
      } else if (currentNum >= MAX_FEATURED) {
        return 'There is no possible number that fulfills those requirements.';
      } else {
        currentNum += 7;
      }
    }
  }
};

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."