//Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

let capitalize = (str) =>{
  let result = '';
  let stringArray = str.split(' ');
  for(let w of stringArray){
    result += w.charAt(0).toUpperCase();
    result += w.substring(1);
    result += ' ';
  }
  return result;
};

let testString = 'launch school tech & talk';

console.log(capitalize(testString));