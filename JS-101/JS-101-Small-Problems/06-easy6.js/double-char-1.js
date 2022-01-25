let repeater = (str) => {
  let result = '';
  for (let idx = 0; idx < str.length; idx++) {
    result = result + str.charAt(idx) + str.charAt(idx);
  }
  console.log(result);
  return result;
};

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""