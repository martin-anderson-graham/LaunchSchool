function letterCaseCount(text) {
  let result = {};

  result.lowercase = (text.match(/[a-z]/g)??[]).length;
  result.uppercase = (text.match(/[A-Z]/g)??[]).length;
  result.neither = text.length - result.lowercase - result.uppercase; 

  console.log(result);
  return result;
};

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }